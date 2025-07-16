import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get current date
    const now = new Date();
    
    // Get all review schedules due today
    const dueReviews = await db.reviewSchedule.findMany({
      where: {
        userId: userId,
        nextReview: {
          lte: now
        }
      },
      include: {
        quizCard: {
          include: {
            Video: {
              select: {
                title: true,
                youtubeId: true,
                playlist: {
                  select: {
                    title: true,
                    id: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        nextReview: 'asc'
      }
    });

    // Get user stats
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { streak: true, xp: true }
    });

    // Get review stats
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    
    const reviewedToday = await db.reviewSchedule.count({
      where: {
        userId: userId,
        lastReview: {
          gte: todayStart
        }
      }
    });

    // Group reviews by playlist/video
    const groupedReviews = dueReviews.reduce((acc: Record<string, any>, review: {
      id: string;
      quizCardId: string;
      quizCard: {
        question: string;
        answer: string;
        type: string;
        difficulty: string;
        videoId: string;
        Video: {
          title: string;
          playlist?: {
            id: string;
            title: string;
          }
        }
      };
      easeFactor: number;
      repetitions: number;
    }) => {
      const playlistId = review.quizCard.Video.playlist?.id || 'uncategorized';
      const playlistTitle = review.quizCard.Video.playlist?.title || 'Uncategorized';
      const videoId = review.quizCard.videoId;
      const videoTitle = review.quizCard.Video.title;
      
      if (!acc[playlistId]) {
        acc[playlistId] = {
          id: playlistId,
          title: playlistTitle,
          videos: {}
        };
      }
      
      if (!acc[playlistId].videos[videoId]) {
        acc[playlistId].videos[videoId] = {
          id: videoId,
          title: videoTitle,
          cards: []
        };
      }
      
      acc[playlistId].videos[videoId].cards.push({
        id: review.quizCardId,
        question: review.quizCard.question,
        answer: review.quizCard.answer,
        type: review.quizCard.type,
        difficulty: review.quizCard.difficulty,
        reviewId: review.id,
        easeFactor: review.easeFactor,
        repetitions: review.repetitions
      });
      
      return acc;
    }, {} as Record<string, any>);

    // Convert to array format
    const reviewGroups = Object.values(groupedReviews).map((playlist: any) => ({
      ...playlist,
      videos: Object.values(playlist.videos),
      totalCards: Object.values(playlist.videos).reduce(
        (sum: number, video: any) => sum + video.cards.length, 0
      )
    }));

    // Calculate retention rate based on confidence scores
    const lastWeekStart = new Date();
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);
    
    const recentReviews = await db.reviewSchedule.findMany({
      where: {
        userId: userId,
        lastReview: {
          gte: lastWeekStart
        }
      },
      select: {
        confidence: true
      }
    });

    const goodReviews = recentReviews.filter((r: { confidence: number }) => r.confidence >= 3).length;
    const retentionRate = recentReviews.length > 0 
      ? Math.round((goodReviews / recentReviews.length) * 100) 
      : 0;

    // Get upcoming reviews for next 7 days
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    const upcomingReviews = await db.reviewSchedule.groupBy({
      by: ['nextReview'],
      where: {
        userId: userId,
        nextReview: {
          gt: now,
          lte: nextWeek
        }
      },
      _count: {
        id: true
      },
      orderBy: {
        nextReview: 'asc'
      }
    });

    const upcomingDays = upcomingReviews.map((day: { nextReview: Date; _count: { id: number } }) => ({
      date: day.nextReview,
      count: day._count.id
    }));

    return NextResponse.json({
      reviewGroups,
      stats: {
        dueCount: dueReviews.length,
        reviewedToday,
        streak: user?.streak || 0,
        xp: user?.xp || 0,
        retentionRate,
        upcomingDays
      }
    });
  } catch (error) {
    console.error('Error fetching due reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch due reviews' },
      { status: 500 }
    );
  }
}