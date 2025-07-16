import { OpenAI } from 'openai';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Authentication
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Validate request body
    const body = await req.json();
    if (!body.videoId || !body.transcript) {
      return NextResponse.json(
        { error: 'Missing videoId or transcript' },
        { status: 400 }
      );
    }

    // 3. Validate OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 4. Generate quiz with proper typing
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{
        role: 'system',
        content: `Generate 3-5 quiz questions based on this video transcript. 
          Return JSON format: {questions: {question: string, answer: string, type: string}[]}`
      }, {
        role: 'user',
        content: body.transcript
      }],
      response_format: { type: 'json_object' }
    });

    const content = response.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content in OpenAI response');
    }

    const { questions } = JSON.parse(content);

    // 5. Save to database with transaction
    const quizzes = await db.$transaction(
      questions.map((q: any) => 
        db.quizCard.create({
          data: {
            videoId: body.videoId,
            userId,
            question: q.question,
            answer: q.answer,
            type: q.type || 'MULTIPLE_CHOICE',
          }
        })
      )
    );

    return NextResponse.json(quizzes);
  } catch (error) {
    console.error('[QUIZ_GENERATION_ERROR]', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}