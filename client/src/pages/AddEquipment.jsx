import { useState } from "react";
import axios from "axios";

function AddEquipment() {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    serialNumber: "",
    status: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/equipment", formData);
      alert("Equipment added successfully!");
      setFormData({
        name: "",
        model: "",
        serialNumber: "",
        status: "",
        location: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding equipment");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Add New Equipment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Equipment Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="serialNumber" placeholder="Serial Number" value={formData.serialNumber} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="status" placeholder="Status (e.g., Active, Serviced)" value={formData.status} onChange={handleChange} className="border p-2 rounded" required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Equipment</button>
      </form>
    </div>
  );
}

export default AddEquipment;
