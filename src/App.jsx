import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";
import NotHome from "./pages/NotHome.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nothome" element={<NotHome />} />
        </Routes>
      </div>
    </div>
  );
}
