import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../auth/firebaseConfig';
import './blog.css';

const ITEMS_PER_PAGE = 8;

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const blogRef = ref(database, 'blogs');
    onValue(blogRef, (snapshot) => {
      let data = snapshot.val();

      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) {
          console.error("Failed to parse blog data:", e);
          return setBlogs([]);
        }
      }

      if (data && typeof data === 'object') {
        const blogArray = Object.entries(data).map(([id, blog]) => ({
          id,
          title: blog?.title || "No Title",
          date: blog?.date || "Unknown Date",
          excerpt: blog?.excerpt || "No excerpt",
          content: blog?.content || "No content",
          author: blog?.author || "Anonymous"
        }));
        setBlogs(blogArray.reverse()); 
      } else {
        setBlogs([]);
      }
    });
  }, []);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="blog-container">
      <h1 className="blog-title">Our Blogs</h1>
      
      <div className="blog-grid">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date} • {blog.author}</p>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <button className="read-more" onClick={() => setSelectedBlog(blog)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? 'active-page' : ''}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedBlog.title}</h2>
            <p className="blog-date">{selectedBlog.date} • {selectedBlog.author}</p>
            <p className="blog-full-content">{selectedBlog.content}</p>
            <button className="close-button" onClick={() => setSelectedBlog(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
