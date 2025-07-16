TubeWise – Requirements Document (with Tech Stack)
🚀 Overview
TubeWise is a modern web app that turns YouTube playlists into active learning tools. It uses AI to transcribe videos, generate quizzes, track learning, and reinforce retention through spaced repetition.

⚙️ Tech Stack Summary
Area	Technology
Frontend	Next.js (React, SPA)
Backend	neon.tech (PostgreSQL)
Auth	Clerk (Google, Email)
AI Services	OpenAI GPT-4-turbo, Whisper
Deployment	Vercel
Payments	Stripe (Checkout & Billing)

🧑‍💻 Core User Flows
✅ Guest (No Login)
Visit homepage

Try a limited demo (sample playlist + quiz)

Prompted to sign up for saving progress

✅ Registered User (Google or Email Login via Clerk)
Import YouTube playlist

Watch videos

Get AI-generated quizzes + summaries

Save notes and highlights

Receive daily review cards

📦 Feature Breakdown
1. Playlist Import
User pastes a YouTube playlist URL

App fetches metadata:

Playlist title, description

All videos (title, duration, thumbnail)

Stored in Neon DB, tied to user

2. Transcription
Auto-transcribe via:

Whisper (OpenAI) or AssemblyAI

Triggered:

On playlist import (background job)

On-demand (just-in-time when user starts a video)

Fallback: User uploads transcript or summary

3. AI Quiz Generation
3–5 questions per video (~5–10 min clips)

Types:

Multiple choice, open-ended, fill-in-the-blank, timestamp recall, coding

Generated:

After user watches video

Manually ("Generate Now")

User controls:

Edit / regenerate / delete / pin

Difficulty adjustment (Pro only)

4. Spaced Repetition Engine
Based on SM-2 (Anki-style)

Inputs:

Confidence score

Time-to-answer

Review success/failure

Review queue shown daily

5. Notes + Highlights
Timestamped notes per video

Highlights on transcript or video timeline

Autosaved (real-time) to Neon DB

Exportable as Markdown (Free: 1x/month, Pro: unlimited)

6. Learning Dashboard
Tracks:

Playlist progress

XP points, streaks

Weak topics (AI-labeled)

Review queue

7. Export & Sync
Export to:

Markdown (ZIP or Notion-compatible)

Phase 2: Live Notion API sync (optional)

Obsidian export: markdown zip for local sync

🔐 Authentication (Clerk)
Feature	Login Required
Try demo playlist	❌
Import playlist	✅
Notes, highlights	✅
Quiz generation	✅
Daily review	✅

Clerk provides Google OAuth + Email/password

User metadata includes preferences, XP, linked integrations

🧱 Database Models (neon.tech – PostgreSQL)
Table	Description
users	Auth ID, email, preferences, XP, streak
playlists	YouTube URL, title, tags, user_id FK
videos	Title, YouTube ID, transcript, summary
quiz_cards	Questions, answer, type, schedule, starred
notes	User notes + highlights with timestamps
learning_progress	Completed videos, quiz scores
review_queue	Review due dates, history

Use JSONB fields for flexible data like preferences, review history, and tags.

🖥️ Frontend App Structure (Next.js)
Route	Description
/	Landing page w/ demo button
/dashboard	Daily review queue, quick stats
/playlist/[id]	Playlist + video list, progress bar
/video/[id]	Video player, transcript, quiz, notes
/settings	Account, export, integrations

Use Next.js App Router, Client Components, and API routes or edge functions (as needed).

💰 Monetization
Free Tier
1–2 playlists

Limited quiz generations/week

Basic spaced repetition

Markdown export: 1x/month

Pro Tier ($8–12/month)
Unlimited playlists + quizzes

Advanced AI quiz tuning

Adaptive spaced repetition

Notion/Obsidian sync

XP, streak tracking, analytics

Stripe Billing Integration
Use Stripe Checkout

Store subscription status in Neon DB or Clerk metadata

✅ MVP Launch Milestones
Milestone	Status
Google/Email login via Clerk	☐
Import YouTube playlist (w/ metadata)	☐
Transcript fetch & display	☐
AI quiz generation (OpenAI API)	☐
Quiz review system (simple SRS)	☐
Notes + highlights per video	☐
Daily review dashboard	☐
Stripe integration for Pro tier	☐
Export to Markdown (one-click)	☐
Landing page + demo flow	☐

✨ Post-MVP Features
AI chat tutor (“Explain this to me”)

Full Notion integration

Mobile-friendly PWA with offline quiz mode

Team / Bootcamp dashboards (edu licenses)

GitHub + Video learning mashup

Custom learning paths (“Mastery Mode”)