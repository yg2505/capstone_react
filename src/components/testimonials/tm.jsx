// components/Testimonials.jsx
import React from 'react';
import './tm.css';

const testimonials = [
  {
    name: "Ravi Mehta",
    role: "Donor",
    quote:
      "Supporting this cause has been one of the most fulfilling decisions I've ever made. Seeing my donations make a real difference is incredibly rewarding.",
  },
  {
    name: "Neha Bansal",
    role: "Volunteer Teacher",
    quote:
      "Volunteering here opened my eyes and heart. It’s not just service — it’s shared humanity.",
  },
  {
    name: "Anjali",
    role: "Student Beneficiary",
    quote:
      "Because of the support I received, I was able to go back to school and dream again.",
  },
  {
    name: "Simran Kaur",
    role: "Fundraising Volunteer",
    quote:
      "The charity empowers not just the people it helps, but also those who serve. I’m proud to be part of this mission.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">What People Are Saying</h2>
      <div className="testimonial-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <p className="testimonial-quote">“{item.quote}”</p>
            <h4 className="testimonial-name">{item.name}</h4>
            <p className="testimonial-role">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
