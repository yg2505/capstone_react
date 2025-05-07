import React from 'react';
import './explore.css';  

const ProjectCard = ({ project }) => (
    
  <div className="project-card">
    <img
      src={project.image?.imagelink?.[0]?.url}
      alt={project.title}
      srcSet={`${project.image?.imagelink?.[0]?.url}?w=400 400w, ${project.image?.imagelink?.[0]?.url}?w=800 800w, ${project.image?.imagelink?.[0]?.url}?w=1200 1200w`}
    />
    <h2 className="project-title">{project.title}</h2>
    <p className="project-summary">{project.summary}</p>
    <a
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Project
    </a>
  </div>
);

export default ProjectCard;
