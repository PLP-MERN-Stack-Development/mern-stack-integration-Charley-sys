import React from "react";
import { Wrench, Building2, CheckCircle, AlertTriangle, XCircle, Calendar, Hash } from "lucide-react";

const getStatusBadge = (status) => {
  switch (status?.toLowerCase()) {
    case "operational":
      return (
        <span className="flex items-center gap-1 text-green-600 bg-green-100 px-2 py-1 rounded-full text-sm">
          <CheckCircle size={14} /> Operational
        </span>
      );
    case "maintenance":
      return (
        <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full text-sm">
          <AlertTriangle size={14} /> Maintenance
        </span>
      );
    case "out of service":
      return (
        <span className="flex items-center gap-1 text-red-600 bg-red-100 px-2 py-1 rounded-full text-sm">
          <XCircle size={14} /> Out of Service
        </span>
      );
    default:
      return (
        <span className="flex items-center gap-1 text-gray-600 bg-gray-100 px-2 py-1 rounded-full text-sm">
          {status || 'Unknown'}
        </span>
      );
  }
};

const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const EquipmentCard = ({ item }) => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-semibold text-gray-800">{item?.name || 'Unnamed Equipment'}</h2>
        {getStatusBadge(item?.status)}
      </div>

      <div className="text-gray-600 space-y-2">
        <p className="flex items-center gap-2">
          <Wrench size={16} className="text-gray-500" />
          <span className="font-medium">Model:</span> 
          <span className="ml-1">{item?.model || 'N/A'}</span>
        </p>

        <p className="flex items-center gap-2">
          <Hash size={16} className="text-gray-500" />
          <span className="font-medium">Serial:</span> 
          <span className="ml-1 font-mono text-blue-600">{item?.serialNumber || 'N/A'}</span>
        </p>

        <p className="flex items-center gap-2">
          <Building2 size={16} className="text-gray-500" />
          <span className="font-medium">Location:</span> 
          <span className="ml-1">{item?.location || 'N/A'}</span>
        </p>

        <p className="flex items-center gap-2">
          <Calendar size={16} className="text-gray-500" />
          <span className="font-medium">Installed:</span> 
          <span className="ml-1">{formatDate(item?.dateInstalled)}</span>
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EquipmentCard;