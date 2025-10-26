# Medical Equipment Management System


A full-stack MERN (MongoDB, Express.js, React, Node.js) application for managing medical equipment in healthcare facilities. This system provides a comprehensive dashboard to track, monitor, and manage medical equipment with real-time status updates.

🚀 Live Demo
Frontend Application: https://mern-stack-integration-charley-sys-mu.vercel.app

Backend API: https://mern-stack-integration-charley-sys-2.onrender.com

📁 Repository
GitHub Repository: https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Charley-sys

📸 Application Screenshot
https://./screenshots/dashboard.png

Dashboard showing medical equipment with status indicators and detailed information

🛠️ Features
Core Functionality
✅ Equipment Dashboard - View all medical equipment in a responsive grid layout with status badges

✅ Equipment Status Tracking - Real-time status monitoring (Operational, Maintenance, Out of Service) with color-coded indicators

✅ Equipment Details - Comprehensive equipment information including model, serial number, location, and installation date

✅ CRUD Operations - Full Create, Read, Update, Delete functionality for equipment management

✅ Responsive Design - Mobile-friendly interface built with Tailwind CSS

Technical Features
✅ RESTful API - Clean API design with proper HTTP status codes

✅ CORS Configuration - Secure cross-origin resource sharing

✅ Error Handling - Robust error handling with fallback mechanisms

✅ MongoDB Integration - Cloud database with local fallback data

✅ Modern React - Built with React 19, Hooks, and Context API

💻 Technology Stack
Frontend
React 19 - Modern React with latest features

Vite - Fast build tool and development server

Tailwind CSS - Utility-first CSS framework

Axios - HTTP client for API requests

React Router DOM - Client-side routing

Lucide React - Beautiful icons

Backend
Node.js - JavaScript runtime environment

Express.js - Web application framework

MongoDB - NoSQL database

Mongoose - MongoDB object modeling

CORS - Cross-Origin Resource Sharing middleware

dotenv - Environment variable management

Deployment
Vercel - Frontend deployment platform

Render - Backend deployment platform

MongoDB Atlas - Cloud database service

📊 API Endpoints
Equipment Management
GET /api/equipments - Retrieve all equipment items

GET /api/equipments/:id - Get specific equipment details

POST /api/equipments - Add new equipment

PUT /api/equipments/:id - Update equipment information

DELETE /api/equipments/:id - Remove equipment

System Information
GET / - API information and documentation

GET /api/status - Server health check and status

🎯 Demo Equipment
The application comes pre-loaded with sample medical equipment:

Hemoglobin Analyzer - Operational (Lab Room 2)

Centrifuge - Maintenance (Lab Room 1)

X-Ray Machine - Operational (Radiology Room 1)

Ultrasound Scanner - Operational (Imaging Room 2)

🏗️ Project Structure
text
mern-stack-integration-Charley-sys/
├── frontend/                 # React Vite application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React Context for state management
│   │   ├── pages/            # Application pages
│   │   └── App.jsx           # Main application component
│   ├── vite.config.js        # Vite configuration
│   └── package.json
├── server/                   # Express.js backend
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── scripts/              # Database utilities
│   ├── server.js             # Main server file
│   └── package.json
├── screenshots/              # Application screenshots
└── README.md
🚀 Installation & Local Development
Prerequisites
Node.js (v18 or higher)

MongoDB (local or Atlas)

Git

Backend Setup
bash
# Clone the repository
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Charley-sys.git

# Navigate to backend directory
cd mern-stack-integration-Charley-sys/server

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB connection string

# Start development server
npm run dev
Frontend Setup
bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start development server
npm run dev
The application will be available at:

Frontend: http://localhost:5173

Backend: http://localhost:5000

🌐 Deployment
Backend Deployment (Render)
Connect GitHub repository to Render

Set build command: cd server && npm install

Set start command: cd server && npm start

Configure environment variables in Render dashboard

Frontend Deployment (Vercel)
Connect GitHub repository to Vercel

Set root directory to frontend

Set framework to Vite

Add environment variable: VITE_API_BASE_URL

🔧 Configuration
Environment Variables
Backend (.env)

env
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
PORT=5000
Frontend (.env)

env
VITE_API_BASE_URL=your_backend_api_url
🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

👥 Authors
Charles Otieno - Initial work - Charley-sys

🙏 Acknowledgments
Power Learn Project (PLP) for the MERN Stack Development program

Vercel and Render for providing excellent deployment platforms

MongoDB Atlas for cloud database services

The React and Node.js communities for excellent documentation and support

📞 Support
For support, please open an issue in the GitHub repository or contact the development team.

Built with ❤️ for the Power Learn Project MERN Stack Development Assignment


📱 Dashboard Features Showcase
Feature	Description
https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Charley-sys/blob/75834dad7c3730add06ecc49bd74e421df6f320a/Screenshot%20(477).png
#Color-coded status badges for quick equipment status identification
#Detailed equipment cards showing all relevant information in clean layout
#Fully responsive design that works on all device sizes

