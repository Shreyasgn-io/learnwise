import { NextResponse } from 'next/server';
import { getYouTubePlaylistMetadata } from '@/lib/youtube';
import { db } from '@/lib/db';
import { currentUser } from '@clerk/nextjs/server';

export async function POST(request: Request) {
  try {
    console.log('Starting playlist import process');
    
    // Authentication check
    const user = await currentUser();
    console.log('Authentication check:', user ? 'Successful' : 'Failed');
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse request body
    let requestBody;
    try {
      requestBody = await request.json();
      console.log('Request body parsed successfully:', requestBody);
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
    }

    const { url } = requestBody;
    console.log('Playlist URL received:', url);
    
    if (!url) {
      return NextResponse.json({ error: 'Playlist URL is required' }, { status: 400 });
    }
    
    // YouTube API call
    console.log('Fetching YouTube playlist metadata...');
    let playlistData;
    try {
      playlistData = await getYouTubePlaylistMetadata(url);
      console.log('YouTube data fetched successfully:', {
        title: playlistData.title,
        videoCount: playlistData.videos?.length || 0
      });
    } catch (youtubeError) {
      console.error('YouTube API error:', youtubeError);
      return NextResponse.json(
        { error: 'Failed to fetch playlist from YouTube', details: youtubeError instanceof Error ? youtubeError.message : String(youtubeError) },
        { status: 500 }
      );
    }
    
    // Database connection test
    console.log('Testing database connection...');
    try {
      await db.$queryRaw`SELECT 1`;
      console.log('Database connection successful');
    } catch (dbConnectionError) {
      console.error('Database connection failed:', dbConnectionError);
      return NextResponse.json(
        { error: 'Database connection failed', details: dbConnectionError instanceof Error ? dbConnectionError.message : String(dbConnectionError) },
        { status: 500 }
      );
    }
    
    // Save to database
    console.log('User ID from Clerk:', user.id);
    console.log('Attempting to save playlist to database...');
    let playlist;
    try {
      playlist = await db.playlist.create({
        data: {
          url: url,
          title: playlistData.title,
          tags: [], // Default empty array for tags
          userId: user.id,
          videos: {
            create: playlistData.videos.map((video: {id: string; title: string; duration: string; thumbnail: string}) => {
              console.log('Processing video:', video.id, video.title);
              return {
                title: video.title,
                youtubeId: video.id
                // Remove the thumbnail field since it doesn't exist in the schema
              };
            })
          }
        },
        include: { videos: true }
      });
      console.log('Playlist saved successfully with ID:', playlist.id);
    } catch (dbError) {
      console.error('Database operation failed:', dbError);
      return NextResponse.json(
        { error: 'Failed to save playlist to database', details: dbError instanceof Error ? dbError.message : String(dbError) },
        { status: 500 }
      );
    }

    // Return response
    console.log('Returning successful response');
    return NextResponse.json({
      id: playlist.id,
      title: playlist.title,
      videos: playlist.videos.map((video: { id: string; title: string; youtubeId: string }) => ({
        ...video,
        thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/mqdefault.jpg` // Generate thumbnail URL from youtubeId
      }))
    });
  } catch (error) {
    console.error('Import failed with detailed error:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { error: 'Failed to import playlist', details: errorMessage },
      { status: 500 }
    );
  }
}