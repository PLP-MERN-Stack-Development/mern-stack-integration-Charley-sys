import React, { useContext } from "react";
import { EquipmentContext } from "../context/EquipmentContext";

const EquipmentList = () => {
  const { equipments, loading, handleDelete } = useContext(EquipmentContext);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading equipments...</p>;
  }

  if (!equipments.length) {
    return <p className="text-center mt-10 text-gray-600">No equipment found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Equipment Dashboard</h1>

      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
            <th className="py-3 px-4 text-left border">Name</th>
            <th className="py-3 px-4 text-left border">Category</th>
            <th className="py-3 px-4 text-left border">Status</th>
            <th className="py-3 px-4 text-left border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipments.map((eq) => (
            <tr key={eq._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{eq.name}</td>
              <td className="py-2 px-4 border">{eq.category}</td>
              <td className="py-2 px-4 border">{eq.status}</td>
              <td className="py-2 px-4 border text-center">
                <button
                  onClick={() => handleDelete(eq._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EquipmentList;
