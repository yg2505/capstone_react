import React, { useState } from 'react';
import './blog.css';
import tech_img from "../../assets/donation-community-service-volunteer-support.jpg"
import sustainable from "../../assets/elderly-person-children-holding-plant.jpg"
import donations from "../../assets/volunteer-giving-box-with-donations-another-volunteer.jpg"
import community from "../../assets/volunteer-handing-donation-box.jpg"
import volunteer from "../../assets/volunteers-teaming-up-organize-donations-charity.jpg"

const BlogPage = () => {
  const blogs = [
    {
      title: "How Donations are Changing Lives",
      date: "May 20, 2025",
      excerpt: "Discover how small contributions lead to big changes in underserved communities.",
      content: "Donations, no matter how small, can drastically transform lives. From education to healthcare, every rupee matters. This post explores success stories from around the globe and how you can be part of this change.",
      author: "Admin",
      image: donations,
    },
    {
      title: "10 Ways to Make a Difference Today",
      date: "May 15, 2025",
      excerpt: "Explore actionable tips for contributing to social causes even on a busy schedule.",
      content: "Making a difference doesn’t always require grand gestures. This article shares ten easy ways to support your community, from volunteering an hour a week to digital advocacy.",
      author: "Jane Doe",
      image: community,
    },
    {
      title: "The Future of Philanthropy",
      date: "May 10, 2025",
      excerpt: "A glimpse into how tech is reshaping the future of charitable giving.",
      content: "Blockchain, AI, and data analytics are transforming how NGOs operate and donors give. Learn how the future of giving is becoming smarter, faster, and more impactful.",
      author: "John Smith",
      image: tech_img,
    },
    {
      title: "Volunteer Stories That Inspire",
      date: "May 5, 2025",
      excerpt: "Real stories of people changing the world through selfless service.",
      content: "Meet the volunteers who've changed lives, and had their own lives changed, through selfless service. This post shares touching accounts of compassion and courage.",
      author: "Emily Watts",
      image: volunteer,
    },
    {
      title: "Building Sustainable Communities",
      date: "April 28, 2025",
      excerpt: "A closer look at long-term solutions for social and environmental impact.",
      content: "Short-term aid helps, but sustainability changes systems. From eco-friendly villages to self-sustaining food banks, learn what sustainable community development looks like.",
      author: "Michael Lin",
      image: sustainable,
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date} • {blog.author}</p>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="read-more" onClick={() => setSelectedBlog(blog)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBlog.title}</h2>
            <p className="blog-date">{selectedBlog.date} • {selectedBlog.author}</p>
            <p className="blog-full-content">{selectedBlog.content}</p>
            <button className="close-button" onClick={() => setSelectedBlog(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
