import React from 'react';
import './explore.css';  

const ProjectCard = ({ project }) => {
  console.log('Themes:', project.themes);
  return (
  <div className="project-card">
    <img
      src={project.image?.imagelink?.[5]?.url}
      alt={project.title}
    />
    <h2 className="project-title">{project.title}</h2>
    <p className="project-summary">{project.summary}</p>

 
    {project.themes?.theme && project.themes.theme.length > 0 && (
  <div className="project-themes">
    {project.themes.theme.map((theme, index) => (
      <span key={theme.id || index} className="theme-tag">
        {theme.name}
      </span>
    ))}
  </div>
)}

    <a
      href={project.projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
    >
      View Project
    </a>
  </div>
)};

export default ProjectCard;
