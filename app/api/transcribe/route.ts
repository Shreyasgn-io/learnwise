import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { db } from '@/lib/db';

export async function POST(request: Request) {
  const { videoId } = await request.json();
  
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: 'OpenAI API key not configured' },
      { status: 500 }
    );
  }

  const openai = new OpenAI(process.env.OPENAI_API_KEY);
  
  try {
    const video = await db.videos.findUnique({ 
      where: { id: videoId },
      select: { url: true }
    });
    
    if (!video) {
      return NextResponse.json(
        { error: 'Video not found' },
        { status: 404 }
      );
    }
    
    // Note: You'll need to fetch the actual video file content here
    // This is just a placeholder - you may need to use axios or fetch
    const audioFile = await fetch(video.url).then(res => res.blob());
    
    const transcription = await openai.audio.transcriptions.create({
      file: new File([audioFile], 'audio.mp3'),
      model: 'whisper-1',
    });
    
    await db.videos.update({
      where: { id: videoId },
      data: { transcript: transcription.text }
    });
    
    return NextResponse.json({ 
      success: true,
      transcript: transcription.text 
    });
  } catch (error) {
    console.error('Transcription error:', error);
    return NextResponse.json(
      { error: 'Failed to transcribe video' },
      { status: 500 }
    );
  }
}