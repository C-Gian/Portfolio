import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className={`${styles.navbar} ${isNavbarShrunk ? styles.shrink : ""}`}>
      <div className={styles.navbarContent}>
        <a href="/" className={styles.titleContainer}>
          <h1 className={`${styles.title} ${styles.outside}`}>&lt;/</h1>
          <h1 className={`${styles.title} ${styles.inside}`}>Portfolio</h1>
          <h1 className={`${styles.title} ${styles.outside}`}>&gt;</h1>
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about" className={styles.menuItem}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className={styles.menuItem}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.menuItem}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.menuItem}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
