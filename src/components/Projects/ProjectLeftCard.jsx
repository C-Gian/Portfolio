import React from "react";
import { getImageUrl } from "../../utils";
import "./ProjectLeftCard.css";

export const ProjectLeftCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="pc-left-container">
      <a href={source} className="pcl-l-container" target="_blank">
        <div className="pcl-line"></div>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title} `}></img>
      </a>
      <div className="pcl-r-container">
        <div className="pcl-right-info">
          <h3 className="pcl-title">{title}</h3>
          <p className="pcl-description">{description}</p>
          <ul className="pcl-skills">
            {skills.map((skill, id) => {
              return (
                <li key={id} className="pcl-skill">
                  {skill}
                </li>
              );
            })}
          </ul>
          <div className="pcl-source">
            <h1>More info on </h1>
            <a href={source} className="pcl-git" target="_blank">
              <img src={getImageUrl("projects/giticon.png")}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
