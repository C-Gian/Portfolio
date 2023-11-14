import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:g.culaon.lav@gmail.com">g.culaon.lav@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email Icon" />
          <a href="https://www.linkedin.com/in/gianluca-culaon-2380201a3/">
            Linkedin.com/CulaonGianluca
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" />
          <a href="https://github.com/C-Gian">github.com/C-Gian</a>
        </li>
      </ul>
    </footer>
  );
};
