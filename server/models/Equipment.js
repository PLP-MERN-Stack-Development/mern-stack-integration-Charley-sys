const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String },
  serialNumber: { type: String },
  status: { type: String, enum: ["Operational", "Maintenance", "Out of Service"], default: "Operational" },
  location: { type: String },
  dateInstalled: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Equipment", equipmentSchema);
