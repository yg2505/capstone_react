import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">BrightCause</div>

        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li onClick={() => onNavigate('home')}>Home</li>
          <li><a href="/explore">Explore</a></li>
          <li onClick={() => onNavigate('about')}>About</li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>

        <div
        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

