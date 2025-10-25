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

  // Fetch all equipment on load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const { data } = await fetchEquipments();
        setEquipments(data);
      } catch (error) {
        console.error("Error fetching equipment:", error);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  // Add equipment
  const handleAdd = async (equipmentData) => {
    try {
      const { data } = await addEquipment(equipmentData);
      setEquipments((prev) => [...prev, data]);
    } catch (error) {
      console.error("❌ Error adding equipment:", error);
    }
  };

  // Update
  const handleUpdate = async (id, updatedData) => {
    try {
      const { data } = await updateEquipment(id, updatedData);
      setEquipments((prev) =>
        prev.map((eq) => (eq._id === id ? data : eq))
      );
    } catch (error) {
      console.error("❌ Error updating equipment:", error);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    try {
      await deleteEquipment(id);
      setEquipments((prev) => prev.filter((eq) => eq._id !== id));
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
