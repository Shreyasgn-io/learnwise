import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default async function Home() {
  // Check if user is authenticated
  const { userId } = await auth();
  
  // If authenticated, redirect to dashboard
  if (userId) {
    redirect('/dashboard');
  }
  
  // If not authenticated, show landing page
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-[#6c47ff] flex items-center justify-center text-white font-bold text-xl">L</div>
          <h1 className="text-2xl font-bold text-[#6c47ff]">LearnWise</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-[#6c47ff] font-medium transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-600 hover:text-[#6c47ff] font-medium transition-colors">
            How It Works
          </Link>
          <Link href="#pricing" className="text-gray-600 hover:text-[#6c47ff] font-medium transition-colors">
            Pricing
          </Link>
          <div className="ml-4 flex space-x-2">
            <SignInButton mode="modal">
              <button className="px-4 py-2 border border-[#6c47ff] text-[#6c47ff] rounded-full hover:bg-[#6c47ff]/5 transition-colors font-medium">
                Sign In
              </button>
            </SignInButton>
            <Link href="/sign-up" className="px-4 py-2 bg-[#6c47ff] text-white rounded-full hover:bg-[#5a3cd8] transition-colors font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl font-bold leading-tight">
              Transform YouTube Playlists into <span className="text-[#6c47ff]">Active Learning</span> Tools
            </h2>
            <p className="text-xl text-gray-600">
              LearnWise uses AI to transcribe videos, generate quizzes, track learning, and reinforce retention through spaced repetition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up" className="px-6 py-3 bg-[#6c47ff] text-white rounded-full hover:bg-[#5a3cd8] transition-colors font-medium text-center">
                Get Started for Free
              </Link>
              <Link href="#demo" className="px-6 py-3 border border-[#6c47ff] text-[#6c47ff] rounded-full hover:bg-[#6c47ff]/5 transition-colors font-medium text-center">
                Try Demo
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="p-2 bg-gray-50 border-b flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <Image 
                src="/dashboard-preview.png" 
                alt="LearnWise Dashboard Preview" 
                width={600} 
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#6c47ff]/10 w-40 h-40 rounded-full z-[-1]"></div>
            <div className="absolute -top-6 -left-6 bg-[#6c47ff]/10 w-24 h-24 rounded-full z-[-1]"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Learning Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform passive video watching into active learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">Playlist Import</h3>
              <p className="text-gray-600">
                Easily import YouTube playlists with a single click. We'll fetch all videos, titles, and metadata automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">AI Transcription</h3>
              <p className="text-gray-600">
                Automatically transcribe videos using advanced AI. Search, highlight, and reference specific moments in videos.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">AI Quiz Generation</h3>
              <p className="text-gray-600">
                Generate smart quizzes from video content. Multiple choice, open-ended, and fill-in-the-blank questions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">Spaced Repetition</h3>
              <p className="text-gray-600">
                Optimize your learning with our Anki-style spaced repetition system. Review cards at the perfect time for maximum retention.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">Notes & Highlights</h3>
              <p className="text-gray-600">
                Take timestamped notes while watching videos. Highlight important parts of the transcript for easy reference.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-shadow border border-gray-100 group hover:border-[#6c47ff]/30">
              <div className="w-14 h-14 rounded-full bg-[#6c47ff]/10 flex items-center justify-center text-[#6c47ff] mb-6 group-hover:bg-[#6c47ff] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#6c47ff] transition-colors">Learning Dashboard</h3>
              <p className="text-gray-600">
                Track your progress with our comprehensive dashboard. Monitor XP, streaks, weak topics, and review queue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How LearnWise Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn passive video watching into active learning in just a few steps
            </p>
          </div>
          
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#6c47ff]/20 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#6c47ff]">Import Your Playlist</h3>
                  <p className="text-gray-600 text-lg">
                    Paste any YouTube playlist URL and we'll automatically import all videos, titles, and metadata.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-[#6c47ff] flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 order-3">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                    <Image 
                      src="/import-playlist.png" 
                      alt="Import Playlist" 
                      width={400} 
                      height={250}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 order-2">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                    <Image 
                      src="/watch-video.png" 
                      alt="Watch Video" 
                      width={400} 
                      height={250}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 order-1">
                  <div className="w-16 h-16 rounded-full bg-[#6c47ff] flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-2xl font-bold mb-3 text-[#6c47ff]">Watch & Take Notes</h3>
                  <p className="text-gray-600 text-lg">
                    Watch videos with our enhanced player. Take timestamped notes and highlight important parts of the transcript.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-3 text-[#6c47ff]">Generate & Answer Quizzes</h3>
                  <p className="text-gray-600 text-lg">
                    Our AI generates smart quizzes based on video content. Test your knowledge with various question types.
                  </p>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                  <div className="w-16 h-16 rounded-full bg-[#6c47ff] flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 order-3">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                    <Image 
                      src="/quiz-generation.png" 
                      alt="Quiz Generation" 
                      width={400} 
                      height={250}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center gap-8 relative">
                <div className="md:w-1/2 order-2">
                  <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 transform transition-transform hover:scale-105">
                    <Image 
                      src="/spaced-repetition.png" 
                      alt="Spaced Repetition" 
                      width={400} 
                      height={250}
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 order-1">
                  <div className="w-16 h-16 rounded-full bg-[#6c47ff] flex items-center justify-center text-white text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:text-left order-3">
                  <h3 className="text-2xl font-bold mb-3 text-[#6c47ff]">Review & Retain</h3>
                  <p className="text-gray-600 text-lg">
                    Review cards at optimal intervals with our spaced repetition system. Track your progress and focus on weak areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Try LearnWise Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of LearnWise with our interactive demo
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-md max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-8 bg-black rounded-lg overflow-hidden">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="LearnWise Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to transform your learning?</h3>
              <p className="text-gray-600 mb-6">Sign up now to get started with your own playlists</p>
              <Link href="/sign-up" className="px-8 py-3 bg-[#6c47ff] text-white rounded-full hover:bg-[#5a3cd8] transition-colors font-medium text-lg inline-block">
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that's right for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#6c47ff]/30 hover:shadow-lg transition-all">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <div className="text-4xl font-bold">$0<span className="text-xl text-gray-500 font-normal">/month</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>1-2 playlists</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Limited quiz generations/week</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Basic spaced repetition</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Markdown export: 1x/month</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/sign-up" className="w-full px-6 py-3 border border-[#6c47ff] text-[#6c47ff] rounded-full hover:bg-[#6c47ff]/5 transition-colors font-medium inline-block">
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white p-8 rounded-xl border-2 border-[#6c47ff] shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#6c47ff] text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Pro</h3>
                <p className="text-gray-600 mb-6">For serious learners</p>
                <div className="text-4xl font-bold">$8<span className="text-xl text-gray-500 font-normal">/month</span></div>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Unlimited</strong> playlists + quizzes</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced AI quiz tuning</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Adaptive spaced repetition</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Notion/Obsidian sync</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>XP, streak tracking, analytics</span>
                </li>
              </ul>
              <div className="text-center">
                <Link href="/sign-up" className="w-full px-6 py-3 bg-[#6c47ff] text-white rounded-full hover:bg-[#5a3cd8] transition-colors font-medium inline-block">
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of learners who have transformed their learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#6c47ff]/20 flex items-center justify-center text-[#6c47ff] font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold">John Smith</h4>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600">
                "LearnWise has completely changed how I learn from technical videos. The AI-generated quizzes help me retain information much better than just passive watching."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#6c47ff]/20 flex items-center justify-center text-[#6c47ff] font-bold mr-4">
                  AJ
                </div>
                <div>
                  <h4 className="font-bold">Amy Johnson</h4>
                  <p className="text-sm text-gray-500">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The spaced repetition system is brilliant! I'm retaining complex ML concepts much longer than with traditional note-taking. Worth every penny of the Pro subscription."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#6c47ff]/20 flex items-center justify-center text-[#6c47ff] font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-sm text-gray-500">CS Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As a student, LearnWise has been a game-changer for my online courses. The ability to take timestamped notes and generate quizzes has improved my grades significantly."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#6c47ff]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Learning?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Join thousands of learners who are getting more out of their YouTube playlists with LearnWise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="px-8 py-4 bg-white text-[#6c47ff] rounded-full hover:bg-gray-100 transition-colors font-bold text-lg">
              Get Started for Free
            </Link>
            <Link href="#demo" className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-bold text-lg">
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#6c47ff] flex items-center justify-center text-white font-bold text-xl">L</div>
              <h2 className="text-2xl font-bold text-white">LearnWise</h2>
            </div>
            <p className="text-gray-400">
              Transform YouTube playlists into active learning tools with AI-powered features.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#demo" className="text-gray-400 hover:text-white transition-colors">Demo</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2023 LearnWise. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
