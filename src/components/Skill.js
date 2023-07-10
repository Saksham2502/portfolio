import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['C','C++','Machine Learning', 'JavaScript', 'React','Python'];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
