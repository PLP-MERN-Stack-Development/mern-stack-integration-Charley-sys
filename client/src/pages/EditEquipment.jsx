import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEquipment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    model: "",
    serialNumber: "",
    status: "",
    location: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/equipment/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/equipment/${id}`, formData);
      alert("Equipment updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error updating equipment");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Edit Equipment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Equipment Name" value={formData.name} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="model" placeholder="Model" value={formData.model} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="serialNumber" placeholder="Serial Number" value={formData.serialNumber} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} className="border p-2 rounded" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="border p-2 rounded" />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Update Equipment</button>
      </form>
    </div>
  );
}

export default EditEquipment;
