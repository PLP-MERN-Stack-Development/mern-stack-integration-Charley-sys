import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Use environment variable for API URL with fallback
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

  const fetchEquipments = useCallback(async () => {
    console.log('🚀 Fetching medical equipment data from:', API_BASE_URL);
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get(`${API_BASE_URL}/api/equipments`, {
        timeout: 10000,
      });
      
      console.log('✅ Medical equipment data received successfully');
      setEquipments(response.data);
      
    } catch (err) {
      console.error('❌ Equipment API Error:', err);
      
      let errorMessage = 'Failed to fetch equipment data';
      
      if (err.code === 'ECONNREFUSED' || err.code === 'NETWORK_ERROR') {
        errorMessage = 'Cannot connect to the server. Please try again later.';
      } else if (err.response) {
        errorMessage = `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = 'No response from server. The service might be temporarily unavailable.';
      }
      
      setError(errorMessage);
      
      // Fallback sample data
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