import React from "react";
import "./Navbar.css";
const logo = require('../Assets/doglogo.webp');

function Navbar() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#"><img src={logo} width="100%"/></a>
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
      </nav>
    </>
  );
}

export default Navbar;
