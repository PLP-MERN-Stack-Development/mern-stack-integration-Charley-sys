import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/equipment", 
  // Make sure your server route is actually /api/equipment or /api/equipments
});

// GET ALL EQUIPMENTS
export const getEquipments = () => API.get("/");

// ADD NEW EQUIPMENT
export const addEquipment = (data) => API.post("/", data);

// UPDATE EQUIPMENT
export const updateEquipment = (id, data) => API.put(`/${id}`, data);

// DELETE EQUIPMENT
export const deleteEquipment = (id) => API.delete(`/${id}`);
