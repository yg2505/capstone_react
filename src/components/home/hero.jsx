import React from 'react';
import './hero.css';

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-heading">Be the Change<br />You Wish to See</h1>
        <p className="hero-tagline">
          Empower communities. Support causes. Your kindness can rewrite someone's tomorrow.
        </p>
        <div className="hero-actions">
          <button className="cta-btn donate" onClick={() => onNavigate('explore')}>
            Start Donating
          </button>
          <button className="cta-btn learn" onClick={() => onNavigate('impact')}>
            Discover More
          </button>
        </div>
      </div>
      <div className="hero-right" />
    </section>
  );
}
