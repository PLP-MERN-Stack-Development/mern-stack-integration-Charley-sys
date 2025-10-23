import React, { createContext, useState, useEffect } from "react";
import {
  fetchEquipments,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "../api";

export const EquipmentContext = createContext();

export const EquipmentProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all equipment from backend
  const loadEquipments = async () => {
    try {
      const { data } = await fetchEquipments();
      setEquipments(data);
      setLoading(false);
    } catch (error) {
      console.error("❌ Failed to load equipments:", error);
    }
  };

  useEffect(() => {
    loadEquipments();
  }, []);

  // Add new equipment
  const handleAdd = async (equipmentData) => {
    try {
      const { data } = await addEquipment(equipmentData);
      setEquipments([...equipments, data]);
    } catch (error) {
      console.error("❌ Error adding equipment:", error);
    }
  };

  // Update existing equipment
  const handleUpdate = async (id, updatedData) => {
    try {
      const { data } = await updateEquipment(id, updatedData);
      setEquipments(equipments.map((eq) => (eq._id === id ? data : eq)));
    } catch (error) {
      console.error("❌ Error updating equipment:", error);
    }
  };

  // Delete equipment
  const handleDelete = async (id) => {
    try {
      await deleteEquipment(id);
      setEquipments(equipments.filter((eq) => eq._id !== id));
    } catch (error) {
      console.error("❌ Error deleting equipment:", error);
    }
  };

  return (
    <EquipmentContext.Provider
      value={{
        equipments,
        loading,
        handleAdd,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </EquipmentContext.Provider>
  );
};
