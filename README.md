<h2>🚀 Full-Stack Video Meeting & Collaboration Platform</h2>
<p><strong>Node.js - Express - Socket.io - MongoDB - EJS</strong></p>


</div>

📖 Table of Contents
📋 Overview

✨ Features

🛠 Tech Stack

📁 Project Structure

🚀 Getting Started

🔧 Development

🧪 Testing

☁️ Deployment

🤝 Contributing

📄 License

📋 Overview
VideoHub is a production-ready full-stack web application built for real-time video collaboration and team communication.

🎯 What it does:
Powers live video meetings with real-time communication

Manages users with secure authentication system

Provides live presence detection and chat functionality

Scales to handle thousands of concurrent connections

Production-ready with file upload limits and security headers

Perfect for SDE portfolios - demonstrates enterprise-grade full-stack skills including real-time systems, REST APIs, MongoDB integration, and deployment strategies.

✨ Features
✅ Live Features
text
🔴 Real-time video meetings (Socket.io)
👥 User authentication & management
💬 Live chat during meetings
📊 Real-time presence detection
📈 Connection monitoring dashboard
✅ Technical Features
text
📤 40KB file upload support (avatars/thumbnails)
☁️ MongoDB Atlas cloud database
🔒 Secure API endpoints (/api/v1/users)
⚙️ Environment-based port (PORT || 8000)
🌐 CORS & security middleware
📱 Responsive EJS templates
🚧 Roadmap
text
⏳ WebRTC video calling
⏳ Screen sharing
⏳ Meeting recording
⏳ Team workspaces
⏳ Push notifications
🛠 Tech Stack
Category	Technology	Version	Purpose
Backend	Node.js	v18+	Runtime Environment
Express.js	4.x	Web Framework
Socket.io	4.x	Real-time Communication
Database	MongoDB	Latest	NoSQL Document Database
Mongoose	Latest	ODM for MongoDB
Frontend	EJS	Latest	Server-side Templating
CSS/JavaScript	Vanilla	Responsive UI
Tools	Git	Latest	Version Control
npm	Latest	Package Manager
📁 Project Structure
text
VideoHub/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── socketManager.js     # Socket.io logic
│   │   │   ├── userManager.js       # User operations
│   │   │   └── modelsController.js  # Model handlers
│   │   ├── models/
│   │   │   ├── meeting.model.js     # Meeting schema
│   │   │   └── user.model.js        # User schema
│   │   ├── routes/
│   │   │   └── users.routes.js      # API endpoints
│   │   ├── utils/                   # Helper functions
│   │   └── app.js                   # Main server file
│   ├── package.json                 # Dependencies
│   └── .gitignore                   # Git exclusions
├── frontend/                        # Client assets
│   ├── public/
│   │   ├── logos/                   # Branding images
│   │   └── styles/                  # CSS files
│   └── src/                         # Frontend components
└── README.md                        # This file
🚀 Getting Started
📋 Prerequisites
bash
# Check Node.js version (must be 18+)
node --version

# Check npm
npm --version

# Install Git (if missing)
# Download: https://git-scm.com/
Required Accounts:

MongoDB Atlas (Free tier)

🛠 Step-by-Step Setup
1. Clone Repository
bash
git clone https://github.com/Sandeep57818/VideoHub.git
cd VideoHub/backend
2. Install Dependencies
bash
npm install
3. Configure Database
Update src/app.js with your MongoDB Atlas connection:

javascript
const mongoConnection = await mongoose.connect(
  "mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/videohub?retryWrites=true&w=majority"
);
Get connection string:

Login to MongoDB Atlas

Create free cluster

Click "Connect" → "Connect your application"

Copy connection string

4. Start Server
bash
npm start
Expected Output:

text
[Mongo] Connected to DB successfully
Server listening on port 8000
5. Test Application
text
🌐 http://localhost:8000/          # Home page
🌐 http://localhost:8000/home      # Dashboard
🌐 http://localhost:8000/api/v1/users # API
🔧 Development
📦 Useful Commands
bash
npm run dev      # Development with auto-reload
npm start        # Production server
npm run test     # Run tests
npm run lint     # Code quality check
🔄 Add Development Tools
bash
# Auto-reload on file changes
npm install --save-dev nodemon

# Testing
npm install --save-dev jest supertest

# Linting
npm install --save-dev eslint
📝 Environment Variables
Create .env file:

text
PORT=8000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret
🧪 Testing
🔍 Manual API Tests
bash
# Test home endpoint
curl http://localhost:8000/

# Test user API
curl -X GET http://localhost:8000/api/v1/users

# Test with headers
curl -H "Content-Type: application/json" \
     http://localhost:8000/api/v1/users
🧑‍💻 Socket.io Testing
Open two browser tabs: http://localhost:8000

Open Developer Console (F12)

Test real-time events

✅ Unit Tests Setup
bash
# Install test dependencies
npm install --save-dev jest supertest

# Create tests/user.test.js
npm test
☁️ Deployment
⚙️ Environment Variables (Production)
text
PORT=8000
MONGODB_URI=production_mongodb_uri
NODE_ENV=production
JWT_SECRET=super-secure-secret-key
🚀 Deployment Platforms
Platform	⭐ Rating	Setup Time	Free Tier
Render	⭐⭐⭐⭐⭐	2 minutes	✅ Yes
Railway	⭐⭐⭐⭐	1 minute	✅ Yes
Heroku	⭐⭐⭐	5 minutes	Limited
Vercel	⭐⭐⭐⭐	3 minutes	✅ Yes
Render.com (Recommended)
bash
1. Connect GitHub repo
2. Build Command: npm install
3. Start Command: npm start
4. Add MONGODB_URI environment variable
🤝 Contributing
👨‍💻 How to Contribute
Fork the repository

Clone your fork

Create feature branch:

bash
git checkout -b feature/amazing-feature
Commit changes:

bash
git commit -m "feat: add amazing feature"
Push to branch:

bash
git push origin feature/amazing-feature
Open Pull Request

📚 Commit Standards
text
feat:     new feature
fix:      bug fix
docs:     documentation
style:    formatting
refactor: code changes
test:     adding tests
📄 License
This project is licensed under the MIT License:

text
MIT License
Copyright (c) 2026 Sandeep Tharalla (Sandeep57818)

Permission is hereby granted, free of charge, to any person obtaining a copy...
<div align="center">

<h3>👨‍💻 Author</h3>
<strong>Sandeep Tharalla</strong>

<a href="https://github.com/Sandeep57818">GitHub</a> -
<a href="mailto:sandeep@example.com">Email</a> -
Jammu, India




<strong>⭐ Star this repo if you found it helpful!</strong>




<h4>Built with ❤️ for developers</h4>

</div>
