import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-navbar">
      <div className="navbar">
        <h2>BrandName</h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✕" : "☰"}
        </button>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
