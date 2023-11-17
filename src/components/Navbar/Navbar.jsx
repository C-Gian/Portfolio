import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [isNavbarShrunk, setNavbarShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Imposta isNavbarShrunk a true quando la posizione dello scroll è maggiore di 100px
      setNavbarShrunk(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isNavbarShrunk ? "nav-shrink" : ""}`}>
      <div className="navbarContent">
        <a href="/" className="nav-titleContainer">
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
