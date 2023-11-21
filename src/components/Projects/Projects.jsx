import React from "react";
import projects from "../../data/projects.json";
import { ProjectLeftCard } from "./ProjectLeftCard";
import { ProjectRightCard } from "./ProjectRightCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-t-container">
        <h1>Projects</h1>
      </div>
      <div className="projects-b-container">
        {projects.map((project, id) => {
          if (id % 2 == 0) {
            return (
              <ProjectLeftCard key={id} project={project}></ProjectLeftCard>
            );
          }
          return (
            <ProjectRightCard key={id} project={project}></ProjectRightCard>
          );
        })}
      </div>
    </section>
  );
};
