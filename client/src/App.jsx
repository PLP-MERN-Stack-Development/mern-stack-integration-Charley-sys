import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EquipmentProvider } from "./context/EquipmentContext";
import EquipmentList from "./pages/EquipmentList";
import AddEquipment from "./pages/AddEquipment";
import EditEquipment from "./pages/EditEquipment";

function App() {
  return (
    <EquipmentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<EquipmentList />} />
          <Route path="/add" element={<AddEquipment />} />
          <Route path="/edit/:id" element={<EditEquipment />} />
        </Routes>
      </Router>
    </EquipmentProvider>
  );
}

export default App;
