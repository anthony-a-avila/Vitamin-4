import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">My Website</div>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/nothome" className={({ isActive }) => (isActive ? "active" : "")}>
            Not Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
