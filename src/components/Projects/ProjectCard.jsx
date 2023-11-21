import React from "react";
import { getImageUrl } from "../../utils";
import "./ProjectCard.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="pc-container">
      <a href={source} className="pc-center-container">
        <div className="pc-left-container"></div>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title} `}></img>
      </a>
      <div className="pc-right-container">
        <div className="pc-right-info">
          <h3 className="pc-title">{title}</h3>
          <p className="pc-description">{description}</p>
          <ul className="pc-skills">
            {skills.map((skill, id) => {
              return (
                <li key={id} className="pc-skill">
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="pc-source">
            <h1>More info on </h1>
            <a href={source} className="pc-git">
              <img src={getImageUrl("projects/giticon.png")}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
