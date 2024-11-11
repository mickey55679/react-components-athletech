import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const logo = require("../Assets/aperture-1142967_1280.webp");

function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }
  

  return (
    <nav>
      <ul className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faXmark} />
          </a>
        </li>
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
      <ul>
        <li>
          <a href="#">
            <img src={logo} width="100%" alt="Logo" />
          </a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li onClick={toggleSidebar}>
          <a href="#">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
