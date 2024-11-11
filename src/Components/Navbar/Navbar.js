import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
const logo = require('../Assets/aperture-1142967_1280.webp');

function Navbar() {

  return (
    <>
      <nav>
        <ul className="sidebar">
          <li>
            <a href="#">
              <img src={logo} width="100%" />
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
              <img src={logo} width="100%" />
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
      </nav>
    </>
  );
}

export default Navbar;
