import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/equipments",
});

// Get all equipments
export const fetchEquipments = () => API.get("/");

// Add new equipment
export const addEquipment = (data) => API.post("/", data);

// Update equipment
export const updateEquipment = (id, data) => API.put(`/${id}`, data);

// Delete equipment
export const deleteEquipment = (id) => API.delete(`/${id}`);

// Get one equipment by ID
export const getEquipmentById = (id) => API.get(`/${id}`);
