const express = require("express");
const router = express.Router();
const Equipment = require("../models/Equipment");

// @desc    Get all equipments
// @route   GET /api/equipments
// @access  Public
router.get("/", async (req, res, next) => {
  try {
    const equipments = await Equipment.find();
    res.status(200).json(equipments);
  } catch (error) {
    next(error);
  }
});

// @desc    Add new equipment
// @route   POST /api/equipments
// @access  Public
router.post("/", async (req, res, next) => {
  try {
    const newEquipment = new Equipment(req.body);
    const savedEquipment = await newEquipment.save();
    res.status(201).json(savedEquipment);
  } catch (error) {
    next(error);
  }
});

// @desc    Get single equipment by ID
// @route   GET /api/equipments/:id
// @access  Public
router.get("/:id", async (req, res, next) => {
  try {
    const equipment = await Equipment.findById(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json(equipment);
  } catch (error) {
    next(error);
  }
});

// @desc    Update equipment by ID
// @route   PUT /api/equipments/:id
// @access  Public
router.put("/:id", async (req, res, next) => {
  try {
    const updatedEquipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEquipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json(updatedEquipment);
  } catch (error) {
    next(error);
  }
});

// @desc    Delete equipment by ID
// @route   DELETE /api/equipments/:id
// @access  Public
router.delete("/:id", async (req, res, next) => {
  try {
    const deleted = await Equipment.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Equipment not found" });
    }
    res.status(200).json({ message: "Equipment deleted successfully" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
