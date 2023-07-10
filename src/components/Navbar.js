import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <Link to="introduction" smooth={true} duration={500} onClick={toggleMenu}>
          About me
        </Link>
        <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="achievements" smooth={true} duration={500} onClick={toggleMenu}>
          Achievements
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>
          Contact Me
        </Link>
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
