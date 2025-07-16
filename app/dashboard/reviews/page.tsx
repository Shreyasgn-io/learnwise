'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Award, Brain, BookOpen, CheckCircle, AlertTriangle, ChevronRight, ChevronLeft, X, ThumbsUp, ThumbsDown, Zap, BarChart2, Bookmark, BookmarkCheck } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

// Define types for review data structure
interface QuizCard {
  id: string;
  question: string;
  answer: string;
  type: string;
  difficulty: string;
  nextReviewIntervals?: { again: string; hard: string; good: string; easy: string };
}

interface Video {
  id: string;
  title: string;
  cards: QuizCard[];
}

interface ReviewGroup {
  id: string;
  title: string;
  totalCards: number;
  videos: Video[];
}

interface UpcomingDay {
  date: string;
  count: number;
}

interface ReviewStats {
  reviewedToday: number;
  streak: number;
  retentionRate: number;
  upcomingDays: UpcomingDay[];
}

interface ReviewData {
  reviewGroups: ReviewGroup[];
  stats: ReviewStats;
}

export default function ReviewsPage() {
  // State for review data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  
  // State for active review
  const [activePlaylistIndex, setActivePlaylistIndex] = useState(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [reviewMode, setReviewMode] = useState('queue'); // 'queue' or 'card'
  
  // State for review session
  const [sessionStats, setSessionStats] = useState({
    cardsReviewed: 0,
    correct: 0,
    incorrect: 0,
    xpGained: 0
  });
  const [showCelebration, setShowCelebration] = useState(false);
  const { width, height } = useWindowSize();
  
  // Fetch review data
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/review/get-due');
        setReviewData(response.data || { reviewGroups: [], stats: { upcomingDays: [] } });
        setError('');
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
        setError('Failed to load your review cards. Please try again later.');
        setReviewData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchReviews();
  }, []);
  
  // Helper functions
  const getActivePlaylist = (): ReviewGroup | null => {
    if (!reviewData || !reviewData.reviewGroups || reviewData.reviewGroups.length === 0) return null;
    return reviewData.reviewGroups[activePlaylistIndex];
  };
  
  const getActiveVideo = (): Video | null => {
    const playlist = getActivePlaylist();
    if (!playlist || !playlist.videos || playlist.videos.length === 0) return null;
    return playlist.videos[activeVideoIndex];
  };
  
  const getActiveCard = (): QuizCard | null => {
    const video = getActiveVideo();
    if (!video || !video.cards || video.cards.length === 0) return null;
    return video.cards[activeCardIndex];
  };
  
  const getTotalCards = (): number => {
    if (!reviewData || !('reviewGroups' in reviewData)) return 0;
    let totalCards = 0;
    if (Array.isArray(reviewData?.reviewGroups)) {
      totalCards = reviewData.reviewGroups.reduce((sum: number, playlist: ReviewGroup) => 
        sum + (playlist?.totalCards || 0), 0);
    }
    return totalCards;
  };
  
  const startReview = (playlistIndex: number) => {
    setActivePlaylistIndex(playlistIndex);
    setActiveVideoIndex(0);
    setActiveCardIndex(0);
    setShowAnswer(false);
    setReviewMode('card');
  };
  
  const handleShowAnswer = () => {
    setShowAnswer(true);
  };
  
  const handleConfidenceRating = async (confidence: number) => {
    const card = getActiveCard();
    if (!card) return;
    
    try {
      // Submit review to API
      await axios.post('/api/review', {
        quizCardId: card.id,
        confidence
      });
      
      // Update session stats
      setSessionStats(prev => ({
        cardsReviewed: prev.cardsReviewed + 1,
        correct: confidence >= 3 ? prev.correct + 1 : prev.correct,
        incorrect: confidence < 3 ? prev.incorrect + 1 : prev.incorrect,
        xpGained: prev.xpGained + (confidence >= 3 ? 10 : 5)
      }));
      
      // Move to next card
      moveToNextCard();
    } catch (err) {
      console.error('Failed to submit review:', err);
      setError('Failed to save your review. Please try again.');
    }
  };
  
  const moveToNextCard = () => {
    const playlist = getActivePlaylist();
    const video = getActiveVideo();
    
    if (!playlist || !video) {
      setReviewMode('queue');
      return;
    }
    
    // Check if there are more cards in the current video
    if (activeCardIndex < video.cards.length - 1) {
      setActiveCardIndex(activeCardIndex + 1);
      setShowAnswer(false);
      return;
    }
    
    // Check if there are more videos in the current playlist
    if (activeVideoIndex < playlist.videos.length - 1) {
      setActiveVideoIndex(activeVideoIndex + 1);
      setActiveCardIndex(0);
      setShowAnswer(false);
      return;
    }
    
    // Check if there are more playlists
    if (activePlaylistIndex < (reviewData?.reviewGroups?.length || 0) - 1) {
      setActivePlaylistIndex(activePlaylistIndex + 1);
      setActiveVideoIndex(0);
      setActiveCardIndex(0);
      setShowAnswer(false);
      return;
    }
    
    // No more cards to review
    setShowCelebration(true);
    setTimeout(() => {
      setShowCelebration(false);
      setReviewMode('queue');
      
      // Refresh review data
      axios.get('/api/review/get-due').then(response => {
        setReviewData(response.data);
      }).catch(err => {
        console.error('Failed to refresh reviews:', err);
      });
    }, 3000);
  };
  
  // Render loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 border-4 border-[#6c47ff] border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">Loading your review cards...</p>
      </div>
    );
  }
  
  // Render error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg max-w-md text-center mb-4">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
          <p className="font-medium">{error}</p>
        </div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-[#6c47ff] text-white px-4 py-2 rounded-md font-medium hover:bg-[#5a3cd9] transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  // Render empty state
  if (!reviewData || !reviewData.reviewGroups || reviewData.reviewGroups.length === 0) {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Daily Reviews</h1>
            <p className="text-gray-600">Review your learning cards to reinforce your knowledge</p>
          </div>
          <div className="bg-[#6c47ff]/10 text-[#6c47ff] px-4 py-2 rounded-lg font-medium flex items-center">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>All caught up!</span>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-10 w-10 text-green-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">You're all caught up!</h2>
          <p className="text-gray-600 mb-6">You have no cards due for review today. Great job!</p>
          <Link 
            href="/dashboard"
            className="bg-[#6c47ff] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a3cd9] transition-colors inline-block"
          >
            Back to Dashboard
          </Link>
        </div>
        
        {reviewData?.stats?.upcomingDays && reviewData.stats.upcomingDays.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Upcoming Reviews</h2>
            <div className="space-y-4">
              {reviewData?.stats?.upcomingDays?.map((day: UpcomingDay, index: number) => {
                const date = new Date(day?.date || new Date());
                const formattedDate = date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric'
                });
                const isToday = new Date().toDateString() === date.toDateString();
                const isTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() === date.toDateString();
                const displayDate = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : formattedDate;
                
                return (
                  <div key={index} className="p-4 border rounded-md flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium mr-3">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{displayDate}</h3>
                        <p className="text-sm text-gray-500">{day.count} cards scheduled</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{formattedDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Render review queue
  if (reviewMode === 'queue') {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Daily Reviews</h1>
            <p className="text-gray-600">Review your learning cards to reinforce your knowledge</p>
          </div>
          <div className="bg-[#6c47ff]/10 text-[#6c47ff] px-4 py-2 rounded-lg font-medium flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            <span>Daily Goal: {reviewData?.stats?.reviewedToday || 0}/{getTotalCards() + (reviewData?.stats?.reviewedToday || 0)} cards</span>
          </div>
        </div>
        
        {sessionStats.cardsReviewed > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
            <h2 className="text-lg font-bold mb-4">Session Summary</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-[#6c47ff]/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#6c47ff] mb-1">{sessionStats.cardsReviewed}</div>
                <div className="text-sm text-gray-600">Cards Reviewed</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">{sessionStats.correct}</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-1">{sessionStats.incorrect}</div>
                <div className="text-sm text-gray-600">Needs Review</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600 mb-1">+{sessionStats.xpGained}</div>
                <div className="text-sm text-gray-600">XP Gained</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Review Queue */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4">Today's Review Queue</h2>
          <div className="space-y-4">
            {reviewData.reviewGroups.map((playlist: ReviewGroup, index: number) => (
              <div key={playlist.id} className="p-4 border rounded-md flex justify-between items-center hover:border-[#6c47ff]/50 hover:bg-[#6c47ff]/5 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#6c47ff]/20 flex items-center justify-center text-[#6c47ff] font-bold mr-3">
                    {playlist.totalCards}
                  </div>
                  <div>
                    <h3 className="font-medium">{playlist.title}</h3>
                    <p className="text-sm text-gray-500">{playlist.totalCards} cards due for review</p>
                  </div>
                </div>
                <button 
                  onClick={() => startReview(index)}
                  className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a3cd9] transition-colors"
                >
                  Start Review
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Review Statistics */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4">Review Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-md bg-gradient-to-br from-[#6c47ff]/5 to-[#6c47ff]/10 border-[#6c47ff]/20">
              <div className="text-gray-700 mb-2 font-medium">Cards Reviewed Today</div>
              <div className="text-3xl font-bold text-[#6c47ff]">{reviewData?.stats?.reviewedToday || 0}</div>
              <div className="mt-2 text-sm text-gray-600">
                {(reviewData?.stats?.reviewedToday || 0) > 0 ? 'Great progress today!' : 'Start reviewing to build your streak!'}
              </div>
            </div>
            <div className="p-4 border rounded-md bg-gradient-to-br from-[#6c47ff]/5 to-[#6c47ff]/10 border-[#6c47ff]/20">
              <div className="text-gray-700 mb-2 font-medium">Review Streak</div>
              <div className="text-3xl font-bold text-[#6c47ff]">{reviewData?.stats?.streak || 0} days</div>
              <div className="mt-2 text-sm text-gray-600">
                {(reviewData?.stats?.streak || 0) > 0 ? 'Keep it up!' : 'Start your streak today!'}
              </div>
            </div>
            <div className="p-4 border rounded-md bg-gradient-to-br from-[#6c47ff]/5 to-[#6c47ff]/10 border-[#6c47ff]/20">
              <div className="text-gray-700 mb-2 font-medium">Retention Rate</div>
              <div className="text-3xl font-bold text-[#6c47ff]">{reviewData?.stats?.retentionRate || 0}%</div>
              <div className="mt-2 text-sm text-gray-600">
                {(reviewData?.stats?.retentionRate || 0) >= 80 ? 'Excellent memory!' : 
                 (reviewData?.stats?.retentionRate || 0) >= 60 ? 'Good progress!' : 'Keep practicing!'}
              </div>
            </div>
          </div>
        </div>
        
        {/* Upcoming Reviews */}
        {reviewData?.stats?.upcomingDays && reviewData.stats.upcomingDays.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4">Upcoming Reviews</h2>
            <div className="space-y-4">
              {reviewData.stats.upcomingDays.map((day: UpcomingDay, index: number) => {
                const date = new Date(day.date);
                const formattedDate = date.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'short',
                  day: 'numeric'
                });
                const isToday = new Date().toDateString() === date.toDateString();
                const isTomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toDateString() === date.toDateString();
                const displayDate = isToday ? 'Today' : isTomorrow ? 'Tomorrow' : formattedDate;
                
                return (
                  <div key={index} className="p-4 border rounded-md flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-medium mr-3">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{displayDate}</h3>
                        <p className="text-sm text-gray-500">{day.count} cards scheduled</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{formattedDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  // Render active review card
  const activePlaylist = getActivePlaylist();
  const activeVideo = getActiveVideo();
  const activeCard = getActiveCard();
  
  if (!activePlaylist || !activeVideo || !activeCard) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6">
        <div className="bg-yellow-100 text-yellow-700 p-4 rounded-lg max-w-md text-center mb-4">
          <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
          <p className="font-medium">No cards available for review.</p>
        </div>
        <button 
          onClick={() => setReviewMode('queue')}
          className="bg-[#6c47ff] text-white px-4 py-2 rounded-md font-medium hover:bg-[#5a3cd9] transition-colors"
        >
          Back to Queue
        </button>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      {showCelebration && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Reviewing: {activePlaylist.title}</h1>
          <p className="text-gray-600">{activeVideo.title}</p>
        </div>
        <button 
          onClick={() => setReviewMode('queue')}
          className="text-gray-600 hover:text-[#6c47ff] font-medium flex items-center"
        >
          <X className="h-5 w-5 mr-1" />
          Exit Review
        </button>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#6c47ff] text-white flex items-center justify-center font-bold mr-2">
              {activeCardIndex + 1}
            </div>
            <span className="text-gray-500">of {activeVideo.cards?.length || 0}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
              {activeCard.type.replace('_', ' ')}
            </div>
            <div className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
              Difficulty: {activeCard.difficulty}
            </div>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id + '-question'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-50 p-6 rounded-lg mb-6 min-h-[200px] flex items-center justify-center">
              <p className="text-lg font-medium text-center">{activeCard.question}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="mb-6">
          {!showAnswer ? (
            <button 
              onClick={handleShowAnswer}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-md text-sm font-medium transition-colors mb-3"
            >
              Show Answer
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="bg-[#6c47ff]/5 p-6 rounded-lg border border-[#6c47ff]/20 mb-4"
              >
                <p className="text-gray-800">{activeCard.answer}</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        
        {showAnswer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                onClick={() => handleConfidenceRating(1)}
                className="flex flex-col items-center justify-center p-4 border border-red-300 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
              >
                <ThumbsDown className="h-5 w-5 mb-1" />
                <span className="font-medium">Again</span>
                <span className="text-xs text-gray-500">{activeCard.nextReviewIntervals?.again || 'N/A'}</span>
              </button>
              <button
                onClick={() => handleConfidenceRating(2)}
                className="flex flex-col items-center justify-center p-4 border border-orange-300 rounded-lg text-orange-600 hover:bg-orange-50 transition-colors"
              >
                <Zap className="h-5 w-5 mb-1" />
                <span className="font-medium">Hard</span>
                <span className="text-xs text-gray-500">{activeCard.nextReviewIntervals?.hard || 'N/A'}</span>
              </button>
              <button
                onClick={() => handleConfidenceRating(3)}
                className="flex flex-col items-center justify-center p-4 border border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <ThumbsUp className="h-5 w-5 mb-1" />
                <span className="font-medium">Good</span>
                <span className="text-xs text-gray-500">{activeCard.nextReviewIntervals?.good || 'N/A'}</span>
              </button>
              <button
                onClick={() => handleConfidenceRating(4)}
                className="flex flex-col items-center justify-center p-4 border border-green-300 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
              >
                <CheckCircle className="h-5 w-5 mb-1" />
                <span className="font-medium">Easy</span>
                <span className="text-xs text-gray-500">{activeCard.nextReviewIntervals?.easy || 'N/A'}</span>
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Session Progress */}
        <div className="flex justify-between items-center text-sm text-gray-600 mt-6">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>Reviewed: {sessionStats.cardsReviewed}</span>
          </div>
          <div className="flex items-center">
            <BarChart2 className="h-4 w-4 mr-1" />
            <span>Correct: {sessionStats.correct}</span>
          </div>
          <div className="flex items-center">
            <Zap className="h-4 w-4 mr-1" />
            <span>XP: {sessionStats.xpGained}</span>
          </div>
        </div>
      </div>
    </div>
  );
}