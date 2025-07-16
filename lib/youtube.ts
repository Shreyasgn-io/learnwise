import axios from 'axios';

export async function getYouTubePlaylistMetadata(url: string) {
  // Extract playlist ID from URL
  const playlistId = extractPlaylistId(url);
  
  if (!playlistId) {
    throw new Error('Invalid YouTube playlist URL. Please provide a valid YouTube playlist link.');
  }
  
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    throw new Error('YouTube API key is not configured. Please add YOUTUBE_API_KEY to your environment variables.');
  }
  
  try {
    // Use YouTube API to fetch metadata
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists`,
      {
        params: {
          part: 'snippet',
          id: playlistId,
          key: apiKey
        }
      }
    );

    if (!response.data.items || response.data.items.length === 0) {
      throw new Error('Playlist not found or is private. Please check the URL and try again.');
    }

    const playlist = response.data.items[0].snippet;
    
    // Fetch videos in playlist
    const videosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlistItems`,
      {
        params: {
          part: 'snippet',
          playlistId,
          maxResults: 50,
          key: apiKey
        }
      }
    );

    if (!videosResponse.data.items) {
      throw new Error('Failed to fetch playlist videos. The playlist might be empty.');
    }

    const videos = videosResponse.data.items.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      duration: '', // Would need another API call to get duration
      thumbnail: item.snippet.thumbnails?.default?.url || ''
    }));

    return {
      title: playlist.title,
      description: playlist.description || '',
      videos
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      console.error('YouTube API error:', errorMessage);
      throw new Error(`YouTube API error: ${errorMessage}`);
    }
    console.error('Unexpected error:', error);
    throw error;
  }
}

function extractPlaylistId(url: string): string {
  // Implementation to extract playlist ID from URL
  const regex = /[&?]list=([^&]+)/;
  const match = url.match(regex);
  return match ? match[1] : '';
}