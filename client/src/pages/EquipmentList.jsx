import React, { useContext, useEffect } from "react";
import { EquipmentContext } from "../context/EquipmentContext";
import EquipmentCard from "../components/EquipmentCard";

const EquipmentList = () => {
  const { equipments, fetchEquipments, loading, error } = useContext(EquipmentContext);

  useEffect(() => {
    fetchEquipments();
  }, [fetchEquipments]);

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Medical Equipment Dashboard</h1>
        <div className="flex justify-center items-center h-40">
          <div className="text-lg text-gray-600">Loading medical equipment data...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Medical Equipment Dashboard</h1>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-red-800 font-semibold text-lg mb-2">Connection Issue</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button 
            onClick={fetchEquipments}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Medical Equipment Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage and monitor all medical equipment</p>
        </div>
        <div className="bg-blue-50 text-blue-800 px-4 py-3 rounded-lg border border-blue-200">
          <div className="text-sm font-medium">Total Equipment</div>
          <div className="text-2xl font-bold">{equipments.length}</div>
        </div>
      </div>

      {equipments.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <div className="text-gray-500 text-lg mb-4">No medical equipment found</div>
          <button 
            onClick={fetchEquipments}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Refresh Equipment List
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

export default EquipmentList;