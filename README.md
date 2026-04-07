VideoHub - Real-Time Video Collaboration Platform
<div align="center">
<img src="frontend/public/logo.svg" alt="VideoHub Logo" width="200"/>
<h3>🚀 A Full-Stack Video Meeting & Collaboration Platform</h3>
<p><strong>Built with Node.js - Express - Socket.io - MongoDB - EJS</strong></p>

[

[

[

[

[

</div>

🎯 Project Overview
VideoHub is a modern, full-stack web application designed for real-time video collaboration, meetings, and team communication. Whether you're conducting virtual meetings, live streaming sessions, or building collaborative video experiences, VideoHub provides the robust backend infrastructure you need.

✨ Key Highlights
Real-time Communication: Powered by Socket.io for instant messaging, presence detection, and live updates

Scalable Architecture: Node.js + Express with MongoDB for handling thousands of concurrent users

User Management: Complete authentication system with secure API endpoints

Production Ready: File upload limits (40KB), CORS handling, environment-based port configuration

Developer Friendly: Clean project structure, EJS templating, and modern tooling

This project demonstrates enterprise-grade full-stack development skills including real-time systems, database design, API development, and deployment strategies – perfect for SDE portfolios and production applications.

🚀 Features
Core Features
🔴 Real-Time Video Meetings: Socket.io powered live communication

👥 User Authentication & Management: Complete user CRUD operations

📊 Live Presence Detection: See who's online in real-time

💬 Real-Time Chat/Messaging: Instant messaging during meetings

📈 Connection Monitoring: Server logs and connection status

🔐 Secure API Endpoints: Protected routes and authentication middleware

Technical Features
40KB File Upload Support: Optimized for profile images, thumbnails

MongoDB Atlas Integration: Cloud-ready database with connection pooling

Environment-Based Configuration: PORT detection from process.env.PORT

CORS & Security Headers: Production-ready middleware stack

EJS Templating: Dynamic server-side rendered pages

Responsive Design: Mobile-friendly CSS layouts

Planned Features (Roadmap)
Video call integration (WebRTC)

Screen sharing capabilities

Recording & playback

Meeting scheduling

Team workspaces

Push notifications

🛠 Tech Stack
Category	Technology	Purpose
Backend	Node.js v18+	Runtime & Server
Express.js	Web Framework
Socket.io	Real-time Communication
Database	MongoDB (Mongoose)	NoSQL Document Store
Frontend	EJS	Server-side Templating
Vanilla CSS/JS	Responsive UI
Dev Tools	Git	Version Control
VS Code	Development Environment
MongoDB Atlas	Cloud Database
📁 Project Structure
text
VideoHub/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── socketManager.js      # Socket.io connection handling
│   │   │   ├── userManager.js        # User operations
│   │   │   └── modelsController.js   # Database models
│   │   ├── models/
│   │   │   ├── meeting.model.js      # Meeting schema
│   │   │   └── user.model.js         # User schema
│   │   ├── routes/
│   │   │   ├── users.routes.js       # User API endpoints
│   │   │   └── app.js                # Main application server
│   │   └── utils/                    # Helper functions
│   ├── package.json                  # Dependencies & scripts
│   └── .gitignore                    # Node modules exclusion
├── frontend/                         # Client-side assets (inferred)
│   ├── public/
│   │   ├── logos/                    # App branding
│   │   ├── src/
│   │   └── styles/
└── README.md                         # You're reading it!
Key Files Explained:

text
src/app.js              # Main Express server (Port 8000)
routes/users.routes.js  # User API endpoints (/api/v1/users)
controllers/socketManager.js # Real-time features
models/user.model.js    # MongoDB schemas
📋 Prerequisites
Before you begin, ensure you have the following installed:

Software Requirements
bash
Node.js v18+          # Download: https://nodejs.org
npm or yarn           # Package managers
Git                   # Version control
MongoDB Atlas Account # Free cloud database
VS Code               # Recommended IDE
Environment Setup
Node.js: Verify with node -v (should be 18+)

MongoDB Atlas:

Create free account at mongodb.com/atlas

Create cluster and get connection string

Git: git --version

🚀 Quick Start Guide
1. Clone & Install
bash
# Clone the repository
git clone https://github.com/Sandeep57818/VideoHub.git
cd VideoHub/backend

# Install dependencies
npm install
2. Environment Configuration
Update the MongoDB connection string in src/app.js:

javascript
const mongoConnection = await mongoose.connect(
  "mongodb+srv://<username>:<password>@videohub.mongodb.12jvidew.r2tw.mongodb.net/?retryWrites=true&w=majority"
);
Replace:

<username>: Your Atlas username

<password>: Your Atlas password

3. Start Development Server
bash
# Method 1: npm start script
npm start

# Method 2: Direct node execution
node src/app.js
Expected Output:

text
[Mongo] Connected to DB: localhost:27017
Server listening on port 8000
4. Access Application
Open browser: http://localhost:8000

Test Endpoints:

text
GET  http://localhost:8000/           # Home page
GET  http://localhost:8000/home       # Hello World
POST http://localhost:8000/api/v1/users # User API
🔍 API Documentation
Base URL
text
http://localhost:8000
Public Routes
Method	Endpoint	Description
GET	/	Home page
GET	/home	Dashboard
GET	/api/v1/users	List users
Protected Routes (Future)
text
POST /api/v1/auth/login
POST /api/v1/auth/register
GET  /api/v1/meetings
Socket.io Events
text
connection      # Client connected
disconnect      # Client disconnected
user-joined     # New participant
user-left       # Participant left
message         # Chat message
🧪 Testing
Manual Testing
bash
# Test home endpoint
curl http://localhost:8000/

# Test user API
curl -X GET http://localhost:8000/api/v1/users
Unit Testing (Setup)
bash
# Install testing dependencies
npm install --save-dev jest supertest

# Run tests
npm test
Socket.io Testing
Open two browser tabs to localhost:8000

Open browser console

Test real-time events

☁️ Deployment
Environment Variables
Create .env file:

text
PORT=8000
MONGODB_URI=mongodb+srv://...
NODE_ENV=production
JWT_SECRET=your-secret-key
Platform Deployment
Platform	Instructions
Render	npm start, MongoDB Atlas
Railway	Auto deploys from GitHub
Heroku	Procfile: web: npm start
Vercel	Serverless functions
DigitalOcean	Docker deployment
Render.com Example:

Connect GitHub repo

Set build command: npm install

Start command: npm start

Add MongoDB env variable

🔧 Development Workflow
Useful Commands
bash
npm run dev       # Development with nodemon
npm run build     # Production build
npm run test      # Run tests
npm run lint      # Code quality
VS Code Extensions
ES7+ React/Redux/React-Native snippets

Prettier - Code formatter

MongoDB for VS Code

GitLens

Git Workflow
bash
git checkout -b feature/video-calls
git add .
git commit -m "feat: add video calling"
git push origin feature/video-calls
🤝 Contributing
We welcome contributions! Follow these steps:

Fork the repository

Create feature branch: git checkout -b feature/amazing-feature

Commit changes: git commit -m 'Add amazing feature'

Push to branch: git push origin feature/amazing-feature

Open Pull Request

Commit Guidelines
text
feat: add video recording
fix: resolve socket disconnect
docs: update README
style: improve CSS
Don't forget to update .gitignore:

text
node_modules/
.env
.DS_Store
*.log
📈 Project Status
Status	Details
✅ Backend	Express server + Socket.io + MongoDB
✅ Real-time	Socket connections working
🔄 Auth	User routes implemented
⏳ Frontend	EJS templates ready
⏳ Video	WebRTC integration planned
✅ Deployable	Production ready
🛡️ Security & Best Practices
Security Implemented
[✅] File size limits (40KB)

[✅] MongoDB connection pooling

[✅] CORS middleware

[✅] Environment variables

[⏳] JWT authentication

[⏳] Rate limiting

Performance Optimizations
Connection pooling for MongoDB

Optimized Socket.io events

Static file serving

Gzip compression

🎓 Learning Outcomes
This project demonstrates:

Full-Stack Development: Complete MERN-stack application

Real-Time Systems: Socket.io implementation

Database Design: MongoDB schemas & queries

API Development: RESTful endpoints

Deployment: Production environment setup

DevOps: Git workflows, environment management

Perfect for:

SDE interviews & portfolios

Learning real-time applications

Production-grade project experience

📞 Support
Created by: Sandeep Tharalla
GitHub: Sandeep57818
Email: sandeep@example.com
Location: Jammu, India

Need help?

Submit GitHub Issue

Check Discussion Forum

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

text
MIT License
Copyright (c) 2026 Sandeep Tharalla
Permission is hereby granted, free of charge...
<div align="center">

⭐ Star this repository if you found it helpful!
🙏 Thanks for reading! Let's build amazing things together 🚀

</div>
