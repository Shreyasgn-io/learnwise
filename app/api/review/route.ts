import { db } from '@/lib/db';
import { calculateNextReview } from '@/lib/spacedRepetition';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { quizCardId, confidence } = await req.json();
    
    // Get current schedule
    const current = await db.reviewSchedule.findUnique({
      where: { quizCardId_userId: { quizCardId, userId: userId! } }
    });
    
    // Calculate new schedule
    const newSchedule = calculateNextReview({
      easeFactor: current?.easeFactor ?? 2.5,
      interval: current?.interval ?? 1,
      repetitions: current?.repetitions ?? 0
    }, confidence);
    
    // Update or create schedule
    await db.reviewSchedule.upsert({
      where: { quizCardId_userId: { quizCardId, userId: userId! } },
      update: newSchedule,
      create: {
        quizCardId,
        userId: userId!,
        ...newSchedule
      }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}