# LearnWise
## 📚 Overview
LearnWise is a modern web application that transforms YouTube playlists into interactive learning experiences. Using AI-powered features, it transcribes videos, generates quizzes, tracks learning progress, and reinforces knowledge retention through spaced repetition techniques.

Turn passive video watching into active learning with personalized quizzes, notes, and daily review cards.

## ✨ Features
### Core Functionality
- YouTube Playlist Integration : Import any YouTube playlist with a simple URL paste
- AI-Powered Transcription : Automatic video transcription using OpenAI Whisper
- Smart Quiz Generation : AI-generated questions based on video content
- Spaced Repetition System : Anki-style review cards to optimize knowledge retention
- Notes & Highlights : Create timestamped notes and highlights while watching videos
- Learning Dashboard : Track your progress, streaks, and identify weak areas
- Export Capabilities : Export your notes and highlights as Markdown
### User Tiers Free Tier
- 1-2 playlists
- Limited quiz generations per week
- Basic spaced repetition
- Markdown export (1x/month) Pro Tier ($8-12/month)
- Unlimited playlists & quizzes
- Advanced AI quiz tuning
- Adaptive spaced repetition
- Notion/Obsidian sync
- XP, streak tracking, and analytics
## 🛠️ Tech Stack
- Frontend : Next.js (React)
- Backend : PostgreSQL (neon.tech)
- Authentication : Clerk (Google, Email)
- AI Services : OpenAI GPT-4-turbo, Whisper
- Deployment : Vercel
- Payments : Stripe (Checkout & Billing)
## 🚀 Getting Started
### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- PostgreSQL database (or neon.tech account)
- Clerk account for authentication
- OpenAI API key
### Installation
1. Clone the repository
   
   ```
   git clone https://github.com/
   yourusername/learnwise.git
   cd learnwise
   ```
2. Install dependencies
   
   ```
   npm install
   # or
   yarn install
   ```
3. Set up environment variables
   Create a .env.local file in the root directory with the following variables:
   
   ```
   # Database
   DATABASE_URL="your-postgresql-connection-
   string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_cl
   erk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Run database migrations
   
   ```
   npx prisma migrate dev
   ```
5. Start the development server
   
   ```
   npm run dev
   # or
   yarn dev
   ```
6. Open http://localhost:3000 with your browser to see the application
## 📖 Usage
### For Guests
- Visit the homepage to learn about LearnWise
- Try the limited demo with a sample playlist and quiz
- Sign up to save your progress
### For Registered Users
1. Import a YouTube Playlist
   
   - Paste a YouTube playlist URL
   - The app will fetch metadata and begin transcription
2. Watch Videos
   
   - Navigate to your imported playlist
   - Select a video to watch
   - View the transcript alongside the video
3. Create Notes & Highlights
   
   - Add timestamped notes while watching
   - Highlight important sections of the transcript
4. Generate & Take Quizzes
   
   - After watching, generate AI quizzes
   - Answer questions to test your understanding
   - Pin important questions for later review
5. Review Daily
   
   - Visit the dashboard to see your daily review cards
   - Rate your confidence on each card
   - The spaced repetition system will schedule future reviews
6. Export Your Learning
   
   - Export notes and highlights as Markdown
   - Pro users can sync with Notion or Obsidian
## 🧩 Project Structure
```
/app                  # Next.js application 
code
  /api                # API routes
  /dashboard          # Dashboard pages
  /playlist           # Playlist viewing 
  pages
  /video              # Video player pages
/lib                  # Utility functions 
and helpers
/prisma               # Database schema and 
migrations
/public               # Static assets
```
## 🤝 Contributing
Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch ( git checkout -b feature/amazing-feature )
3. Commit your changes ( git commit -m 'Add some amazing feature' )
4. Push to the branch ( git push origin feature/amazing-feature )
5. Open a Pull Request
Please make sure to update tests as appropriate and adhere to the existing coding style.

### Development Guidelines
- Follow the existing code style and patterns
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact
Your Name - @your_twitter - email@example.com

Project Link: https://github.com/yourusername/learnwise

## 🙏 Acknowledgments
- Next.js for the React framework
- Clerk for authentication
- OpenAI for AI capabilities
- neon.tech for PostgreSQL database
- Vercel for hosting and deployment
- Stripe for payment processing
## 📊 Roadmap
### MVP Milestones
- Project setup and configuration
- Google/Email login via Clerk
- Import YouTube playlist (w/ metadata)
- Transcript fetch & display
- AI quiz generation (OpenAI API)
- Quiz review system (simple SRS)
- Notes + highlights per video
- Daily review dashboard
- Stripe integration for Pro tier
- Export to Markdown (one-click)
- Landing page + demo flow
### Future Enhancements
- AI chat tutor ("Explain this to me")
- Full Notion integration
- Mobile-friendly PWA with offline quiz mode
- Team / Bootcamp dashboards (edu licenses)
- GitHub + Video learning mashup
- Custom learning paths ("Mastery Mode")
Made with ❤️ for better learning by Shreyas GN# learnwise
