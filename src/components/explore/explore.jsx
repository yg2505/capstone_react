import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../fetched.jsx';
import ProjectCard from './charity_card.jsx';
import './explore.css';

const ExplorePage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const { projects: initialProjects } = await fetchProjects();
      setProjects(initialProjects);
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <div className="explore-page">
      <h1 className="explore-title">Explore Charity Projects</h1>
 
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ExplorePage;
