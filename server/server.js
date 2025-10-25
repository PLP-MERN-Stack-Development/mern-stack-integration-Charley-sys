const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Equipment Routes
app.use('/api/equipments', require('./routes/equipmentRoutes'));

// Server status endpoint
app.get('/api/status', (req, res) => {
  res.json({ 
    server: 'Running', 
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    timestamp: new Date().toISOString()
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medical-equipment', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.error('❌ MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Medical Equipment Server running on port ${PORT}`);
  console.log(`🏥 All Equipment: http://localhost:${PORT}/api/equipments`);
  console.log(`📈 Equipment Stats: http://localhost:${PORT}/api/equipments/stats`);
  console.log(`🧪 Equipment Test: http://localhost:${PORT}/api/equipments/test`);
  console.log(`📊 Server Status: http://localhost:${PORT}/api/status`);
});