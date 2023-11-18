import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="navbar-content">
        <a href="/" className="nav-title-container">
          <h1 className="nav-title">&lt;/</h1>
          <h1 className="nav-title nav-inside">Portfolio</h1>
          <h1 className="nav-title">&gt;</h1>
        </a>
        <div className="nav-menu">
          <img
            className="nav-menuBtn"
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/nav-menuIcon.png")
            }
            alt="nav-menu-button"
            onClick={() => setnav - menuOpen(!menuOpen)}
          />
          <ul
            className={`nav-menuItems ${menuOpen ? "nav-menuOpen" : ""}`}
            onClick={() => setnav - menuOpen(false)}
          >
            <li>
              <a href="#about" className="nav-menuItem">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-menuItem">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-menuItem">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
