const mongoose = require('mongoose');
require('dotenv').config();

// Import your equipment model
const Equipment = require('../models/Equipment');

const seedEquipment = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/medical-equipment', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('Connected to MongoDB');
    
    const equipmentData = [
      {
        name: "Hemoglobin Analyzer",
        model: "HB-2000", 
        serialNumber: "SN-12345",
        status: "Operational",
        location: "Lab Room 2",
        dateInstalled: new Date("2024-10-24")
      },
      {
        name: "Centrifuge", 
        model: "CF-900",
        serialNumber: "SN-54872",
        status: "Maintenance",
        location: "Lab Room 1", 
        dateInstalled: new Date("2024-12-10")
      },
      {
        name: "X-Ray Machine",
        model: "XR-5000",
        serialNumber: "SN-78901", 
        status: "Operational",
        location: "Radiology Room 1",
        dateInstalled: new Date("2024-01-15")
      },
      {
        name: "Ultrasound Scanner",
        model: "US-3000",
        serialNumber: "SN-45623",
        status: "Operational", 
        location: "Imaging Room 2",
        dateInstalled: new Date("2024-03-20")
      }
    ];

    // Clear existing data
    await Equipment.deleteMany({});
    console.log('Cleared existing equipment data');

    // Insert new data
    const result = await Equipment.insertMany(equipmentData);
    console.log(`✅ Successfully seeded ${result.length} equipment items`);
    
    // Display what was created
    result.forEach(item => {
      console.log(`- ${item.name} (${item.serialNumber})`);
    });
    
  } catch (err) {
    console.error('❌ Seeding error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

// Run the seeding
seedEquipment();