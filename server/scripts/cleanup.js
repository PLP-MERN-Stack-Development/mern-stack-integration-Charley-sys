const mongoose = require('mongoose');
require('dotenv').config();

// Adjust the path based on your actual structure
const Equipment = require('../models/Equipment');
// If that doesn't work, try:
// const Equipment = require('./models/Equipment');
// const Equipment = require('../../models/Equipment');

const cleanupData = async () => {
  try {
    console.log('Starting cleanup...');
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medical-equipment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    
    // Delete all documents
    const result = await Equipment.deleteMany({});
    console.log(`✅ Deleted ${result.deletedCount} documents`);
    
  } catch (err) {
    console.error('❌ Cleanup error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

cleanupData();