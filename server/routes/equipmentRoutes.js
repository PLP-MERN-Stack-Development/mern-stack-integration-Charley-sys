const express = require('express');
const router = express.Router();
const Equipment = require('../models/Equipment');

// ===== SPECIFIC ROUTES MUST COME BEFORE PARAMETERIZED ROUTES =====

// GET all equipments
router.get('/', async (req, res) => {
  try {
    console.log('📬 All equipments route hit');
    const equipments = await Equipment.find().sort({ createdAt: -1 });
    console.log(`📊 Found ${equipments.length} equipment items`);
    res.json(equipments);
  } catch (err) {
    console.error('❌ Equipments route error:', err);
    res.status(500).json({ message: err.message });
  }
});

// Equipment statistics endpoint
router.get('/stats', async (req, res) => {
  try {
    console.log('📈 Equipment stats route hit');
    const totalEquipment = await Equipment.countDocuments();
    const operational = await Equipment.countDocuments({ status: 'Operational' });
    const maintenance = await Equipment.countDocuments({ status: 'Maintenance' });
    const outOfService = await Equipment.countDocuments({ status: 'Out of Service' });
    
    res.json({
      totalEquipment,
      operational,
      maintenance,
      outOfService,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    console.error('❌ Stats route error:', err);
    res.status(500).json({ message: err.message });
  }
});

// Equipment test endpoint
router.get('/test', (req, res) => {
  console.log('🧪 Equipment test route hit');
  res.json({ 
    message: 'Medical Equipment API is working!',
    system: 'Medical Equipment Management System',
    timestamp: new Date().toISOString()
  });
});

// ===== PARAMETERIZED ROUTES COME LAST =====

// GET single equipment by ID
router.get('/:id', async (req, res) => {
  try {
    console.log(`🔍 Fetching equipment with ID: ${req.params.id}`);
    
    // Check if it's a valid ObjectId to avoid Cast errors
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid equipment ID format' });
    }
    
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    
    console.log(`✅ Found equipment: ${equipment.name}`);
    res.json(equipment);
  } catch (err) {
    console.error('❌ Single equipment route error:', err);
    res.status(500).json({ message: err.message });
  }
});

// POST new equipment
router.post('/', async (req, res) => {
  try {
    console.log('🆕 Creating new equipment:', req.body);
    const equipment = new Equipment({
      name: req.body.name,
      model: req.body.model,
      serialNumber: req.body.serialNumber,
      status: req.body.status,
      location: req.body.location,
      dateInstalled: req.body.dateInstalled
    });

    const newEquipment = await equipment.save();
    console.log(`✅ New equipment created: ${newEquipment.name}`);
    res.status(201).json(newEquipment);
  } catch (err) {
    console.error('❌ Create equipment error:', err);
    res.status(400).json({ message: err.message });
  }
});

// UPDATE equipment
router.put('/:id', async (req, res) => {
  try {
    console.log(`✏️ Updating equipment with ID: ${req.params.id}`);
    const equipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    console.log(`✅ Equipment updated: ${equipment.name}`);
    res.json(equipment);
  } catch (err) {
    console.error('❌ Update equipment error:', err);
    res.status(400).json({ message: err.message });
  }
});

// DELETE equipment
router.delete('/:id', async (req, res) => {
  try {
    console.log(`🗑️ Deleting equipment with ID: ${req.params.id}`);
    const equipment = await Equipment.findByIdAndDelete(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    console.log(`✅ Equipment deleted: ${equipment.name}`);
    res.json({ message: 'Equipment deleted successfully' });
  } catch (err) {
    console.error('❌ Delete equipment error:', err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;