import React from "react";
import { getImageUrl } from "../../utils";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="pj-container">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title} `}
        className="pg-image"
      />
      <h3 className="pg-title">{title}</h3>
      <p className="pg-description">{description}</p>
      <ul className="pg-skills">
        {skills.map((skill, id) => {
          return (
            <li key={id} className="pg-skill">
              {skill}
            </li>
          );
        })}
      </ul>
      <div className="pg-links">
        <a href={demo} className="pg-link">
          Demo
        </a>
        <a href={source} className="pg-link">
          Soruce
        </a>
      </div>
    </div>
  );
};
