import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend base URL
});

// Get all equipments
export const fetchEquipments = () => API.get("/equipments");

// Add a new equipment
export const addEquipment = (equipmentData) => API.post("/equipments", equipmentData);

// Update an equipment
export const updateEquipment = (id, updatedData) => API.put(`/equipments/${id}`, updatedData);

// Delete an equipment
export const deleteEquipment = (id) => API.delete(`/equipments/${id}`);

// Get single equipment
export const getEquipmentById = (id) => API.get(`/equipments/${id}`);
