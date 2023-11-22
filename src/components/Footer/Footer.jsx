import React from "react";
import "./Footer.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-l">
        <h1 className="fl-title">Information About This Portfolio</h1>
        <h1 className="fl-description">
          This portfolio is developed in react with the help of some libraries
          such as tsparticles & react-tabs. For more information and source code
          visit the public repository on github.
        </h1>
      </div>
      <div className="footer-r">
        <a href="https://github.com/C-Gian" target="_blank" className="fr-l">
          <img
            src={getImageUrl("footer/githubIcon.png")}
            alt="Github Profile"
          />
          <h1>Github</h1>
        </a>
        <a
          href="https://www.linkedin.com/in/gianluca-culaon-2380201a3/"
          target="_blank"
          className="fr-r"
        >
          <img
            src={getImageUrl("footer/linkedinIcon.png")}
            alt="Linkedin Profile"
          />
          <h1>Linkedin</h1>
        </a>
      </div>
    </div>
  );
};
