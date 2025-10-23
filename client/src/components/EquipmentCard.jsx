import React from "react";

const EquipmentCard = ({ item }) => (
  <div className="border rounded-lg p-4 shadow-md bg-white">
    <h2 className="text-xl font-bold">{item.name}</h2>
    <p className="text-gray-600">Model: {item.model}</p>
    <p>Status: <span className="font-semibold">{item.status}</span></p>
    <p>Department: {item.department}</p>
  </div>
);

export default EquipmentCard;
