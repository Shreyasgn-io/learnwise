import { db } from '@/lib/db';
// Make sure this points to your Prisma client initialization
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import JSZip from 'jszip';

export async function POST() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    // Check export limit for free tier
    const exportsThisMonth = await db.exportHistory.count({
      where: {
        userId,
        exportedAt: {
          gte: new Date(new Date().setDate(1))
        }
      }
    });
    
    // Get user's subscription status
    const isPro = false; // Replace with actual check
    
    if (!isPro && exportsThisMonth >= 1) {
      return NextResponse.json(
        { error: 'Free tier limited to 1 export per month' },
        { status: 403 }
      );
    }
    
    // Get all notes for user
    const notes = await db.note.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
    
    // Convert to Markdown with Obsidian frontmatter
    const markdown = notes.map((note) => 
      `---\ntags: [learnwise]\n---\n\n### Note at ${note.timestamp}s\n\n${note.content}\n`
    ).join('\n\n');
    
    // Create ZIP archive
    const zip = new JSZip();
    zip.file('learnwise-notes.md', markdown);
    const content = await zip.generateAsync({type: 'blob'});
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename=learnwise-notes.zip'
      }
    });
    
    // Record export
    await db.exportHistory.create({
      data: { userId }
    });
    
    return new NextResponse(markdown, {
      headers: {
        'Content-Type': 'text/markdown',
        'Content-Disposition': 'attachment; filename=learnwise-notes.md'
      }
    });
  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}