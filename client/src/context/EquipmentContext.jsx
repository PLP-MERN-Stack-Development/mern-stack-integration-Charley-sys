import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://mern-stack-integration-charley-sys-2.onrender.com';

  const fetchEquipments = useCallback(async () => {
    console.log('🚀 Fetching from deployed backend...');
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`${API_BASE_URL}/api/equipments`);
      console.log('✅ Data received successfully');
      setEquipments(response.data);
      
    } catch (err) {
      console.error('❌ API Error:', err);
      setError('Temporary connection issue - showing sample data');
      
      // Use the same sample data as backend fallback
      const sampleData = [
        {
          _id: "1",
          name: "Hemoglobin Analyzer",
          model: "HB-2000",
          serialNumber: "SN-12345",
          status: "Operational",
          location: "Lab Room 2",
          dateInstalled: "2024-10-24T00:00:00.000Z"
        },
        {
          _id: "2",
          name: "Centrifuge", 
          model: "CF-900",
          serialNumber: "SN-54872", 
          status: "Maintenance",
          location: "Lab Room 1",
          dateInstalled: "2024-12-10T00:00:00.000Z"
        },
        {
          _id: "3",
          name: "X-Ray Machine",
          model: "XR-5000", 
          serialNumber: "SN-78901",
          status: "Operational",
          location: "Radiology Room 1",
          dateInstalled: "2024-01-15T00:00:00.000Z"
        }
      ];
      setEquipments(sampleData);
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL]);

  const value = {
    equipments,
    fetchEquipments,
    loading,
    error
  };

  return (
    <EquipmentContext.Provider value={value}>
      {children}
    </EquipmentContext.Provider>
  );
};