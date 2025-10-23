import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EquipmentDetails() {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/equipment/${id}`)
      .then((res) => setEquipment(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!equipment)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        {equipment.name}
      </h2>
      <ul className="space-y-2">
        <li><strong>Model:</strong> {equipment.model}</li>
        <li><strong>Serial Number:</strong> {equipment.serialNumber}</li>
        <li><strong>Status:</strong> {equipment.status}</li>
        <li><strong>Location:</strong> {equipment.location}</li>
      </ul>
    </div>
  );
}

export default EquipmentDetails;
