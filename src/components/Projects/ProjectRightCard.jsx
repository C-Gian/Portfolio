import React from "react";
import { getImageUrl } from "../../utils";
import "./ProjectRightCard.css";

export const ProjectRightCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="pc-right-container">
      <div className="pcr-l-container">
        <div className="pcr-right-info">
          <h3 className="pcr-title">{title}</h3>
          <p className="pcr-description">{description}</p>
          <ul className="pcr-skills">
            {skills.map((skill, id) => {
              return (
                <li key={id} className="pcr-skill">
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="pcr-source">
            <h1>More info on </h1>
            <a href={source} className="pcr-git" target="_blank">
              <img src={getImageUrl("projects/giticon.png")}></img>
            </a>
          </div>
        </div>
      </div>
      <a href={source} className="pcr-r-container" target="_blank">
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title} `}></img>
        <div className="pcr-line"></div>
      </a>
    </div>
  );
};
