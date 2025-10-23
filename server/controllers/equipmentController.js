const Equipment = require("../models/Equipment");

// ➕ Add equipment
exports.addEquipment = async (req, res) => {
  try {
    const newEquipment = await Equipment.create(req.body);
    res.status(201).json(newEquipment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// 📋 Get all
exports.getAllEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.find().sort({ createdAt: -1 });
    res.json(equipments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 🔍 Get one
exports.getEquipmentById = async (req, res) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) return res.status(404).json({ message: "Equipment not found" });
    res.json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✏️ Update
exports.updateEquipment = async (req, res) => {
  try {
    const updated = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ❌ Delete
exports.deleteEquipment = async (req, res) => {
  try {
    await Equipment.findByIdAndDelete(req.params.id);
    res.json({ message: "Equipment deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
