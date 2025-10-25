import React, { useContext, useEffect } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import EquipmentCard from "../components/EquipmentCard";

const Dashboard = () => {
  const { equipments, fetchEquipments, loading, error } = useContext(EquipmentContext);

  // Fetch equipment when component mounts
  useEffect(() => {
    fetchEquipments();
  }, [fetchEquipments]);

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Equipment Dashboard</h1>
        <div className="flex justify-center items-center h-40">
          <div className="text-lg">Loading equipment data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Equipment Dashboard</h1>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error: </strong>{error}
        </div>
        <button 
          onClick={fetchEquipments}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Equipment Dashboard</h1>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
          Total Equipment: <span className="font-bold">{equipments.length}</span>
        </div>
      </div>
      
      {equipments.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-gray-500 text-lg">No equipment found.</div>
          <button 
            onClick={fetchEquipments}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Refresh
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipments.map((item) => (
            <EquipmentCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;