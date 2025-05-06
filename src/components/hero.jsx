import React from 'react';
import './hero.css';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Turn Compassion Into Action</h1>
          <p className="hero-subtitle">
            Join a global community of givers. Support urgent causes and make lasting impact with just a few clicks.
          </p>
          <div className="hero-buttons">
            <a href="/explore" className="btn primary">Donate Now</a>
            <a href="/how-it-works" className="btn secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
