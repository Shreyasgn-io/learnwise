'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { Search, Plus, X, ExternalLink, Play, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function PlaylistsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [isImportSuccess, setIsImportSuccess] = useState(false);
  const [importError, setImportError] = useState('');

  // Mock data - would be fetched from API in production
  const [playlists, setPlaylists] = useState([
    { 
      id: '1', 
      title: 'Next.js Fundamentals', 
      progress: 60, 
      videoCount: 12,
      thumbnail: 'https://i.ytimg.com/vi/KjY94sAKLlw/mqdefault.jpg',
      lastWatched: '2 days ago',
      createdAt: new Date('2023-10-15')
    },
    { 
      id: '2', 
      title: 'TypeScript for Beginners', 
      progress: 25, 
      videoCount: 8,
      thumbnail: 'https://i.ytimg.com/vi/BwuLxPH8IDs/mqdefault.jpg',
      lastWatched: 'Yesterday',
      createdAt: new Date('2023-11-05')
    },
    { 
      id: '3', 
      title: 'React Hooks Masterclass', 
      progress: 10, 
      videoCount: 15,
      thumbnail: 'https://i.ytimg.com/vi/TNhaISOUy6Q/mqdefault.jpg',
      lastWatched: '5 days ago',
      createdAt: new Date('2023-09-20')
    },
  ]);

  // Only modifying the handleImport function
  
  // Only modifying the handleImport function
  
  const handleImport = async () => {
  setIsLoading(true);
  setImportError('');
  
  try {
    const response = await axios.post('/api/playlists/import', {
      url: playlistUrl
    });
    
    // Handle successful import
    setIsModalOpen(false);
    setPlaylistUrl('');
    setIsImportSuccess(true);
    
    // Add the newly imported playlist to the list
    const importedPlaylist = response.data;
    const newPlaylist = {
      id: importedPlaylist.id,
      title: importedPlaylist.title,
      progress: 0,
      videoCount: importedPlaylist.videos.length,
      thumbnail: importedPlaylist.videos[0]?.thumbnailUrl || 'https://i.ytimg.com/vi/default/mqdefault.jpg',
      lastWatched: 'Just now',
      createdAt: new Date()
    };
    
    setPlaylists([newPlaylist, ...playlists]);
    
    // Hide success message after 3 seconds
    setTimeout(() => setIsImportSuccess(false), 3000);
  } catch (error) {
    console.error('Import failed:', error);
    let errorMessage = 'Failed to import playlist. Please check the URL and try again.';
    
    if (axios.isAxiosError(error) && error.response) {
      // Get the detailed error message from the API response
      errorMessage = error.response.data?.error || errorMessage;
      if (error.response.data?.details) {
        errorMessage += ` (${error.response.data.details})`;
      }
      console.log('Error details:', error.response.data);
    }
    
    setImportError(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

  // Filter playlists based on search query and filter status
  const filteredPlaylists = playlists
    .filter(playlist => {
      // Search filter
      const matchesSearch = playlist.title.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Status filter
      if (filterStatus === 'all') return matchesSearch;
      if (filterStatus === 'in-progress') return matchesSearch && playlist.progress > 0 && playlist.progress < 100;
      if (filterStatus === 'completed') return matchesSearch && playlist.progress === 100;
      if (filterStatus === 'not-started') return matchesSearch && playlist.progress === 0;
      
      return matchesSearch;
    })
    .sort((a, b) => {
      // Sort playlists
      if (sortBy === 'recent') return b.createdAt.getTime() - a.createdAt.getTime();
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'progress') return b.progress - a.progress;
      return 0;
    });

  return (
    <div className="space-y-6">
      {/* Success notification */}
      {isImportSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-md shadow-md flex items-center z-50">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Playlist imported successfully!</span>
          <button 
            onClick={() => setIsImportSuccess(false)} 
            className="ml-3"
            title="Close notification"
            aria-label="Close notification"
          >
            <X className="h-4 w-4 text-green-800" />
          </button>
        </div>
      )}
      
      {/* Modal for playlist import */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Import YouTube Playlist</h2>
              <button
                title="Close modal"
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">Paste a YouTube playlist URL to import it into LearnWise.</p>
            
            <div className="mb-4">
              <label htmlFor="playlist-url" className="block text-sm font-medium text-gray-700 mb-1">Playlist URL</label>
              <input
                id="playlist-url"
                type="text"
                value={playlistUrl}
                onChange={(e) => setPlaylistUrl(e.target.value)}
                placeholder="https://www.youtube.com/playlist?list=..."
                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#6c47ff] focus:border-transparent outline-none transition-all"
              />
            </div>
            
            {importError && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">{importError}</span>
              </div>
            )}
            
            <div className="flex justify-end space-x-2">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleImport}
                disabled={!playlistUrl || isLoading}
                className="bg-[#6c47ff] text-white px-4 py-2 rounded-md disabled:opacity-50 hover:bg-[#5a3cd8] transition-colors flex items-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Importing...
                  </>
                ) : 'Import Playlist'}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">My Playlists</h1>
          <p className="text-gray-600">Manage and track your learning progress</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a3cd8] transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-1" />
          Import New Playlist
        </button>
      </div>

      {/* Search and filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search playlists..."
              className="pl-10 w-full p-2 border rounded-md focus:ring-2 focus:ring-[#6c47ff] focus:border-transparent outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <select
              title="Filter playlists by status"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-[#6c47ff] focus:border-transparent outline-none"
            >
              <option value="all">All Playlists</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="not-started">Not Started</option>
            </select>
            
            <select
              title="Sort playlists"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="p-2 border rounded-md focus:ring-2 focus:ring-[#6c47ff] focus:border-transparent outline-none"
            >
              <option value="recent">Most Recent</option>
              <option value="title">Title (A-Z)</option>
              <option value="progress">Progress</option>
            </select>
          </div>
        </div>
      </div>

      {/* Playlists grid */}
      {filteredPlaylists.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaylists.map(playlist => (
            <div key={playlist.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                {playlist.thumbnail ? (
                  <img 
                    src={playlist.thumbnail} 
                    alt={playlist.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Playlist Thumbnail
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Link 
                    href={`/playlist/${playlist.id}`}
                    className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a3cd8] transition-colors flex items-center"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Start Learning
                  </Link>
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {playlist.videoCount} videos
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg line-clamp-1">{playlist.title}</h3>
                  <span className="text-xs font-medium bg-[#6c47ff]/10 text-[#6c47ff] px-2 py-1 rounded">
                    {playlist.progress}% complete
                  </span>
                </div>
                
                <div className="mb-3 flex items-center text-sm text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>Last watched {playlist.lastWatched}</span>
                </div>
                
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div 
                    className={`h-2.5 rounded-full ${playlist.progress >= 100 ? 'bg-green-500' : 'bg-[#6c47ff]'}`}
                    style={{ width: `${playlist.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex space-x-2">
                  <Link 
                    href={`/playlist/${playlist.id}`}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Continue
                  </Link>
                  <Link 
                    href={`/playlist/${playlist.id}/details`}
                    className="flex-1 bg-[#6c47ff]/10 text-[#6c47ff] hover:bg-[#6c47ff]/20 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-1">No playlists found</h3>
          <p className="text-gray-500 mb-4">
            {searchQuery ? 'Try adjusting your search or filters' : 'Import your first YouTube playlist to get started'}
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#6c47ff] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#5a3cd8] transition-colors inline-flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Import New Playlist
          </button>
        </div>
      )}
    </div>
  );
}