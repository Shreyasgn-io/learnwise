'use client';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>
        <Link href="/dashboard" className="text-[#6c47ff] hover:underline text-sm font-medium">
          ← Back to Dashboard
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Account Settings</h2>
        </div>
        <div className="p-6 flex items-center justify-between">
          <div>
            <h3 className="font-medium">Profile</h3>
            <p className="text-sm text-gray-500">Manage your personal information</p>
          </div>
          <div className="flex items-center space-x-4">
            <UserButton />
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Learning Preferences</h2>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-medium mb-2">Daily Review Goal</h3>
            <div className="flex items-center space-x-4">
              <input
                aria-label="Daily review goal slider"
                title="Adjust daily review goal"
                type="range" 
                min="5" 
                max="50" 
                defaultValue="20" 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#6c47ff]"
              />
              <span className="text-sm font-medium">20 cards</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Notification Settings</h3>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded text-[#6c47ff] focus:ring-[#6c47ff]" />
                <span>Daily review reminders</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" defaultChecked className="rounded text-[#6c47ff] focus:ring-[#6c47ff]" />
                <span>New content alerts</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded text-[#6c47ff] focus:ring-[#6c47ff]" />
                <span>Weekly progress reports</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold">Subscription</h2>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Current Plan: <span className="text-[#6c47ff]">Free</span></h3>
              <p className="text-sm text-gray-500">Basic features with limited storage</p>
            </div>
            <button className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}