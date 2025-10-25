import React from "react";
import { Wrench, Building2, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case "working":
      return (
        <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
          <CheckCircle size={14} /> Working
        </span>
      );
    case "faulty":
      return (
        <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm">
          <AlertTriangle size={14} /> Faulty
        </span>
      );
    case "out of service":
      return (
        <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm">
          <XCircle size={14} /> Out of Service
        </span>
      );
    default:
      return status;
  }
};

const EquipmentCard = ({ item }) => (
  <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h2>

    <div className="text-gray-600 space-y-1">
      <p className="flex items-center gap-2">
        <Wrench size={16} className="text-gray-500" />
        <span className="font-medium">Model:</span> {item.model}
      </p>

      <p className="flex items-center gap-2">
        <Building2 size={16} className="text-gray-500" />
        <span className="font-medium">Department:</span> {item.department}
      </p>

      <div className="mt-3">
        {getStatusBadge(item.status)}
      </div>
    </div>
  </div>
);

export default EquipmentCard;
