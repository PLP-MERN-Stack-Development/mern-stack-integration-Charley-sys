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
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Medical Equipment Management System
                </h1>
                <nav className="flex space-x-4">
                  <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">
                    Dashboard
                  </a>
                  <a href="/add" className="text-gray-600 hover:text-gray-900 font-medium">
                    Add Equipment
                  </a>
                </nav>
              </div>
            </div>
          </header>
          
          <Routes>
            <Route path="/" element={<EquipmentList />} />
            <Route path="/add" element={<AddEquipment />} />
            <Route path="/edit/:id" element={<EditEquipment />} />
          </Routes>
        </div>
      </Router>
    </EquipmentProvider>
  );
}

export default App;