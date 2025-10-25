import React, { useContext } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import EquipmentCard from "../components/EquipmentCard";

const Dashboard = () => {
  const { equipments } = useContext(EquipmentContext);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Equipment Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {equipments.map((item) => (
          <EquipmentCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
