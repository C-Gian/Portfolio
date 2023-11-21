import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    const navbarRect = navbarRef.current?.getBoundingClientRect();

    if (navbarRect.top <= 0) {
      // La navbar è diventata sticky, inizializza le referenze
      const aboutElement = document.getElementById("about");
      const projectsElement = document.getElementById("projects");
      const contactElement = document.getElementById("contact");

      aboutRef.current = aboutElement ? aboutElement : null;
      projectsRef.current = projectsElement ? projectsElement : null;
      contactRef.current = contactElement ? contactElement : null;

      // Determina la sezione attiva
      const scrollPosition = window.scrollY + 200; // Considera lo scroll padding
      if (
        aboutRef.current &&
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < projectsRef.current.offsetTop
      ) {
        setActiveSection("about");
      } else if (
        projectsRef.current &&
        scrollPosition >= projectsRef.current.offsetTop &&
        scrollPosition < contactRef.current.offsetTop
      ) {
        setActiveSection("projects");
      } else if (
        contactRef.current &&
        scrollPosition >= contactRef.current.offsetTop
      ) {
        setActiveSection("contact");
      }
    } else {
      // La navbar non è ancora sticky, torna alla home
      setActiveSection("home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="nav" ref={navbarRef}>
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
            onClick={() => setmenuOpen(!menuOpen)}
          />
          <ul
            className={`nav-menuItems ${menuOpen ? "nav-menuOpen" : ""}`}
            onClick={() => setmenuOpen(false)}
          >
            <li>
              <a
                href="#about"
                className={`nav-menuItem ${
                  activeSection === "about" ? "active" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`nav-menuItem ${
                  activeSection === "projects" ? "active" : ""
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`nav-menuItem ${
                  activeSection === "contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
