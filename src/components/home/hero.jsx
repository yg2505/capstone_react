import React from 'react';
import './hero.css';

export default function HeroSection({onNavigate}) {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Turn Compassion Into Action</h1>
          <p className="hero-subtitle">
            Join a global community of givers. Support urgent causes and make lasting impact with just a few clicks.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => onNavigate('explore')}>Donate Now</button>
            <button className="btn secondary" onClick={() => onNavigate('about')}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
