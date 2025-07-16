'use client';
import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Clock, Award, Brain, BookOpen, CheckCircle, AlertTriangle } from 'lucide-react';
import ReviewWidget from './components/ReviewWidget';

export default function Dashboard() {
  // Mock data - would be fetched from API in production
  const [reviewCards, setReviewCards] = useState([
    { id: '1', title: 'React Hooks Explained', dueDate: new Date(), count: 5 },
    { id: '2', title: 'CSS Grid Fundamentals', dueDate: new Date(), count: 3 },
  ]);
  
  const [playlists, setPlaylists] = useState([
    { id: '1', title: 'Next.js Fundamentals', progress: 60, videoCount: 12 },
    { id: '2', title: 'TypeScript for Beginners', progress: 25, videoCount: 8 },
  ]);
  
  const [stats, setStats] = useState({
    xp: 1250,
    streak: 7,
    retention: 85,
    cardsReviewed: 8,
    weakTopics: [
      { name: 'React Context API', count: 3 },
      { name: 'CSS Flexbox', count: 2 },
      { name: 'TypeScript Generics', count: 4 }
    ],
    progressHistory: [
      { day: 'Mon', xp: 120, reviews: 10 },
      { day: 'Tue', xp: 150, reviews: 12 },
      { day: 'Wed', xp: 180, reviews: 15 },
      { day: 'Thu', xp: 200, reviews: 18 },
      { day: 'Fri', xp: 160, reviews: 14 },
      { day: 'Sat', xp: 220, reviews: 20 },
      { day: 'Sun', xp: 190, reviews: 16 },
    ]
  });
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Learning Dashboard</h1>
          <p className="text-gray-600">Track your progress and review your learning</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
            <Award className="h-5 w-5 text-[#6c47ff]" />
            <span className="font-medium">{stats.xp} XP</span>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-[#6c47ff]" />
            <span className="font-medium">{stats.streak} day streak</span>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content - 2/3 width on large screens */}
        <div className="lg:col-span-2 space-y-6">
          {/* Review Widget */}
          <ReviewWidget 
            dueCount={reviewCards.reduce((sum, card) => sum + card.count, 0)} 
            reviewedToday={stats.cardsReviewed}
            streak={stats.streak}
          />
          
          {/* Learning Progress */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Learning Progress</h2>
              <div className="text-sm text-gray-500">Last 7 days</div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={stats.progressHistory}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="xp" stroke="#6c47ff" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="reviews" stroke="#47b881" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="flex justify-center space-x-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#6c47ff] mr-2"></div>
                <span className="text-sm text-gray-600">XP Earned</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#47b881] mr-2"></div>
                <span className="text-sm text-gray-600">Cards Reviewed</span>
              </div>
            </div>
          </section>
          
          {/* My Playlists */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Playlists</h2>
              <Link href="/dashboard/playlists" className="text-[#6c47ff] hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playlists.map(playlist => (
                <div key={playlist.id} className="border rounded-md p-4 hover:border-[#6c47ff]/50 transition-colors">
                  <h3 className="font-medium">{playlist.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{playlist.videoCount} videos</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 mr-3">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#6c47ff] h-2 rounded-full" 
                          style={{ width: `${playlist.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-medium">{playlist.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        {/* Sidebar - 1/3 width on large screens */}
        <div className="space-y-6">
          {/* Learning Stats */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Learning Stats</h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-3">
                  <CircularProgressbar 
                    value={stats.retention} 
                    text={`${stats.retention}%`}
                    styles={buildStyles({
                      textSize: '22px',
                      pathColor: '#6c47ff',
                      textColor: '#6c47ff',
                      trailColor: '#f3f3f3',
                    })}
                  />
                </div>
                <span className="text-sm text-gray-600">Retention Rate</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-3">
                  <CircularProgressbar 
                    value={(stats.cardsReviewed / 20) * 100} 
                    text={`${stats.cardsReviewed}/20`}
                    styles={buildStyles({
                      textSize: '18px',
                      pathColor: '#47b881',
                      textColor: '#47b881',
                      trailColor: '#f3f3f3',
                    })}
                  />
                </div>
                <span className="text-sm text-gray-600">Daily Goal</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium">Weak Topics</h3>
                <span className="text-sm text-gray-500">{stats.weakTopics.length} topics</span>
              </div>
              
              <div className="space-y-2">
                {stats.weakTopics.map((topic, index) => (
                  <div key={index} className="flex justify-between items-center p-2 rounded-md bg-red-50">
                    <div className="flex items-center">
                      <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                      <span className="text-sm">{topic.name}</span>
                    </div>
                    <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-1 rounded">
                      {topic.count} cards
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Quick Actions */}
          <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            
            <div className="space-y-3">
              <Link href="/dashboard/playlists/import" className="flex items-center p-3 border rounded-md hover:bg-[#6c47ff]/5 hover:border-[#6c47ff]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Import Playlist</h3>
                  <p className="text-sm text-gray-500">Add a new YouTube playlist</p>
                </div>
              </Link>
              
              <Link href="/dashboard/notes" className="flex items-center p-3 border rounded-md hover:bg-[#6c47ff]/5 hover:border-[#6c47ff]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">View Notes</h3>
                  <p className="text-sm text-gray-500">Access your saved notes</p>
                </div>
              </Link>
              
              <Link href="/dashboard/settings" className="flex items-center p-3 border rounded-md hover:bg-[#6c47ff]/5 hover:border-[#6c47ff]/50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Settings</h3>
                  <p className="text-sm text-gray-500">Manage your account</p>
                </div>
              </Link>
            </div>
          </section>
          
          {/* Subscription Status */}
          <section className="bg-gradient-to-br from-[#6c47ff] to-[#5a3cd9] p-6 rounded-lg shadow-sm text-white">
            <h2 className="text-xl font-semibold mb-2">Free Plan</h2>
            <p className="text-white/80 mb-4">Upgrade to Pro for unlimited access</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">1-2 playlists</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">Limited quiz generations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">Basic spaced repetition</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-sm">1x/month Markdown export</span>
              </div>
            </div>
            
            <Link href="/dashboard/settings#subscription" className="block w-full bg-white text-[#6c47ff] text-center py-2 rounded-md font-medium hover:bg-white/90 transition-colors">
              Upgrade to Pro
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}