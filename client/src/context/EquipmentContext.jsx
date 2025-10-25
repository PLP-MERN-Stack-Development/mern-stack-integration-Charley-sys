import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEquipments = useCallback(async () => {
    console.log('🚀 Starting to fetch medical equipment data...');
    setLoading(true);
    setError(null);
    
    try {
      // USE RELATIVE URL - Vite proxy will handle this
      console.log('📡 Fetching equipment data from /api/equipments...');
      const response = await axios.get('/api/equipments', {
        timeout: 5000,
      });
      
      console.log('✅ Medical equipment data received successfully');
      console.log(`📊 Received ${response.data.length} equipment items`);
      setEquipments(response.data);
      
    } catch (err) {
      console.error('❌ Equipment API Error:', err);
      
      let errorMessage = 'Failed to connect to medical equipment server';
      
      if (err.code === 'ECONNREFUSED') {
        errorMessage = 'Cannot connect to server. Please make sure the backend is running on port 5000 and Vite proxy is configured.';
      } else if (err.response) {
        errorMessage = `Server error: ${err.response.status} - ${err.response.data?.message || err.response.statusText}`;
      } else if (err.request) {
        errorMessage = 'No response from server. Check if backend is running and Vite proxy is configured in vite.config.js.';
      } else {
        errorMessage = `Connection error: ${err.message}`;
      }
      
      setError(errorMessage);
      
      // Use fallback sample data
      console.log('🔄 Using sample medical equipment data');
      const sampleMedicalEquipment = [
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
        },
        {
          _id: "4",
          name: "Ultrasound Scanner",
          model: "US-3000",
          serialNumber: "SN-45623",
          status: "Operational",
          location: "Imaging Room 2",
          dateInstalled: "2024-03-20T00:00:00.000Z"
        }
      ];
      
      setEquipments(sampleMedicalEquipment);
      
    } finally {
      setLoading(false);
    }
  }, []);

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