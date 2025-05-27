import React, { useEffect, useState } from 'react';
import { fetchProjects } from './fetched.jsx';
import ProjectCard from './charity_card.jsx';
import './explore.css';

const ExplorePage = () => {
  const [projects, setProjects] = useState([]);
  const [nextProjectId, setNextProjectId] = useState(null);
  const [loading, setLoading] = useState(false);  // start with false to avoid flicker on first render

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const { projects: initialProjects, nextProjectId } = await fetchProjects();
      setProjects(initialProjects);
      setNextProjectId(nextProjectId);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const loadMore = async () => {
    if (!nextProjectId) return; // no more projects

    setLoading(true);
    const { projects: moreProjects, nextProjectId: newNextId } = await fetchProjects(nextProjectId);
    setProjects((prev) => [...prev, ...moreProjects]);
    setNextProjectId(newNextId);
    setLoading(false);
  };

  return (
    <div className="explore-page">
      <h1 className="explore-title">Explore Charity Projects</h1>

      {/* Show loading message only if no projects yet */}
      {loading && projects.length === 0 && <p>Loading projects...</p>}

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Show Load More only if there are more projects and not loading */}
      {nextProjectId && !loading && (
        <button onClick={loadMore} className="load-more-btn">
          Load More
        </button>
      )}

      {/* Optional: Show loading text when fetching more */}
      {loading && projects.length > 0 && <p>Loading more projects...</p>}
    </div>
  );
};

export default ExplorePage;
