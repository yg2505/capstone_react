import React from 'react';
import './hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Support the Causes That Matter</h1>
          <p className="hero-subtitle">
            Discover and donate to verified charities with just a few clicks. Your generosity makes a difference.
          </p>
          <div className="hero-buttons">
            <a href="/explore" className="btn primary">Explore Charities</a>
            <a href="/about" className="btn secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
