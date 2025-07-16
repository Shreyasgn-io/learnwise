'use client';

import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';

export default function SettingsPage() {
  // Account Settings
  const [accountDetails, setAccountDetails] = useState({
    email: '',
    name: ''
  });

  // Subscription Management (Stripe)
  const [subscription, setSubscription] = useState(null);
  const [loadingSubscription, setLoadingSubscription] = useState(false);

  // Export Settings
  const [exportFormat, setExportFormat] = useState('markdown');
  const [includeMedia, setIncludeMedia] = useState(true);

  // Notification Preferences
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    reminders: true
  });

  // Learning Preferences
  const [learningPrefs, setLearningPrefs] = useState({
    dailyGoal: 30,
    theme: 'light',
    language: 'en'
  });

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      // Fetch subscription status
      setLoadingSubscription(true);
      try {
        const res = await fetch('/api/subscription');
        const data = await res.json();
        setSubscription(data);
      } catch (error) {
        console.error('Error fetching subscription:', error);
      } finally {
        setLoadingSubscription(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Account Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
        <div className="flex items-center gap-4 mb-4">
          <UserButton />
          <div>
            <p className="font-medium">{accountDetails.name}</p>
            <p className="text-gray-500">{accountDetails.email}</p>
          </div>
        </div>
      </div>

      {/* Subscription Management */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Subscription</h2>
        {loadingSubscription ? (
          <p>Loading subscription status...</p>
        ) : (
          <div>
            <p>Current plan: {subscription?.plan || 'Free'}</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => window.location.href = '/api/stripe/checkout'}
            >
              Manage Subscription
            </button>
          </div>
        )}
      </div>

      {/* Export Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Export Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Export Format</label>
            <select 
              className="w-full p-2 border rounded"
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
            >
              <option value="markdown">Markdown</option>
              <option value="pdf">PDF</option>
              <option value="html">HTML</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="includeMedia"
              checked={includeMedia}
              onChange={(e) => setIncludeMedia(e.target.checked)}
            />
            <label htmlFor="includeMedia">Include media attachments</label>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label>Email Notifications</label>
            <input 
              type="checkbox" 
              checked={notifications.email}
              onChange={() => setNotifications({...notifications, email: !notifications.email})}
            />
          </div>
          <div className="flex items-center justify-between">
            <label>Push Notifications</label>
            <input 
              type="checkbox" 
              checked={notifications.push}
              onChange={() => setNotifications({...notifications, push: !notifications.push})}
            />
          </div>
          <div className="flex items-center justify-between">
            <label>Study Reminders</label>
            <input 
              type="checkbox" 
              checked={notifications.reminders}
              onChange={() => setNotifications({...notifications, reminders: !notifications.reminders})}
            />
          </div>
        </div>
      </div>

      {/* Learning Preferences */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Learning Preferences</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Daily Study Goal (minutes)</label>
            <input 
              type="number" 
              className="w-full p-2 border rounded"
              value={learningPrefs.dailyGoal}
              onChange={(e) => setLearningPrefs({...learningPrefs, dailyGoal: parseInt(e.target.value)})}
              min="5"
              max="240"
            />
          </div>
          <div>
            <label className="block mb-2">Theme</label>
            <select 
              className="w-full p-2 border rounded"
              value={learningPrefs.theme}
              onChange={(e) => setLearningPrefs({...learningPrefs, theme: e.target.value})}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}