// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // <-- import Navigate if you use it
import Navbar from "./components/navbar.jsx";
import { Home, About, Projects, Contact } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Optional default redirect for hash root */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
  );
};

export default App;
