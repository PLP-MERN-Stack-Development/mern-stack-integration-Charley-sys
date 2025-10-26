const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS for all origins (for now)
app.use(cors());

app.use(express.json());

// Simple in-memory storage as fallback
let equipmentData = [
  {
    _id: "1",
    name: "Hemoglobin Analyzer",
    model: "HB-2000",
    serialNumber: "SN-12345",
    status: "Operational",
    location: "Lab Room 2",
    dateInstalled: "2024-10-24T00:00:00.000Z"
  },
  {
    _id: "2",
    name: "Centrifuge",
    model: "CF-900",
    serialNumber: "SN-54872",
    status: "Maintenance",
    location: "Lab Room 1",
    dateInstalled: "2024-12-10T00:00:00.000Z"
  },
  {
    _id: "3",
    name: "X-Ray Machine",
    model: "XR-5000",
    serialNumber: "SN-78901",
    status: "Operational",
    location: "Radiology Room 1",
    dateInstalled: "2024-01-15T00:00:00.000Z"
  }
];

// Equipment routes with MongoDB fallback
app.get('/api/equipments', async (req, res) => {
  try {
    // Try MongoDB first
    const Equipment = require('./models/Equipment');
    const equipments = await Equipment.find();
    res.json(equipments);
  } catch (error) {
    console.log('📦 Using fallback equipment data');
    res.json(equipmentData);
  }
});

// Simple status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Medical Equipment API is running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Medical Equipment Management System API',
    version: '1.0.0',
    status: 'Running',
    endpoints: {
      root: '/',
      status: '/api/status',
      equipment: '/api/equipments'
    }
  });
});

// MongoDB connection with timeout
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.log('⚠️ MONGODB_URI not set, using fallback data');
      return;
    }
    
    console.log('🔗 Attempting MongoDB connection...');
    
    // Set timeout for MongoDB connection
    const connectionPromise = mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      bufferCommands: false,
      bufferMaxEntries: 0
    });
    
    // Timeout after 10 seconds
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('MongoDB connection timeout')), 10000);
    });
    
    await Promise.race([connectionPromise, timeoutPromise]);
    console.log('✅ MongoDB connected successfully');
    
  } catch (error) {
    console.log('❌ MongoDB connection failed:', error.message);
    console.log('💡 Using in-memory data storage');
  }
};

// Initialize database connection
connectDB();

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Medical Equipment Server running on port ${PORT}`);
  console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully');
  process.exit(0);
});