import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>BrightCause</h3>
          <p>Making giving simple, transparent, and impactful.</p>
        </div>

        <div className="footer-column">
          <h4>Our Mission</h4>
          <p>We connect people to verified charities, ensuring every donation reaches the right cause.</p>
        </div>

        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: support@brightcause.org</p>
          <p>Phone: 1234-567-890</p>
           
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BrightCause. All rights reserved.</p>
      </div>
    </footer>
  );
}
