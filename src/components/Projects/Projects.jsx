import React from "react";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="projects-t-container">
        <h1>Projects</h1>
      </div>
      <div className="projects-b-container">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </div>
    </section>
  );
};
