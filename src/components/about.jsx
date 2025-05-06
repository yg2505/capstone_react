import React from 'react';
import './about.css';  
import abtimg from '../assets/photorealistic-refugee-camp.jpg' 
function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-image">
          <img
            src={abtimg}
            alt="Donation concept"
          />
        </div>
        <div className='right'>
        <div className="about-text">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            Welcome to our donation platform, where generosity meets purpose. Our goal is to create a
            seamless way for you to contribute towards causes that truly make a difference. Whether
            it's supporting individuals in need, funding life-changing projects, or helping to build a
            better world, every contribution counts.
          </p>

          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-description">
            Our mission is simple: to make giving back easy, accessible, and impactful. We believe in the
            power of community, and we work tirelessly to ensure that every donation reaches the people and
            causes that need it the most.
          </p>
        </div>
        <div className="impact-section">
            <h3 className="about-subtitle">Our Impact</h3>
            <div className="impact-stats">
                <div className="impact-card">
                <h4>1,200+</h4>
                <p>Donors</p>
                </div>
                <div className="impact-card">
                <h4>150+</h4>
                <p>Causes Supported</p>
                </div>
                <div className="impact-card">
                <h4>$250K+</h4>
                <p>Funds Raised</p>
                </div>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default About;
