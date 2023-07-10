import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'Made a React based Frontend of Netflix',
      link: 'https://netflix-clone-rwdq.onrender.com'
    },
    {
      title: 'Car Price Predictor',
      description: 'Developed a car Price Predictor Model which predicts the price of a car using Machine Learning.',
      link: 'https://github.com/Saksham2502/Car-Price-Predictor'
    },
    {
      title: 'Data Encryption using Merkle Trees',
      description: 'Created a data encryptor which provides a unique hexadecimal code for a given input string',
      link: 'https://betawill.com'
    },
    

  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Visit Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
