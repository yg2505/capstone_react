import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import ExplorePage from './components/explore/explore.jsx';  
import Profile from './components/profile/profile.jsx';  
import Blog from './components/blog/blog.jsx';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />

      {currentPage === 'home' && (
        <>
          <section className="home-section">
            <Home onNavigate={handleNavigation} />
          </section>

          <div className="svg-divider">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#2A2E3C" />
            </svg>
          </div>

          <section className="explore-section">
            <ExplorePage />
          </section>

          <div className="svg-divider">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" fill="#AEBD93" />
            </svg>
          </div>

          <section style={{backgroundColor:"#AEBD93"}}>
            <About />
          </section>
        </>
      )}

      {currentPage === 'about' && <About />}
      {currentPage === 'explore' && <ExplorePage />}
      {currentPage === 'blog' && <Blog />}
      {currentPage === 'profile' && <Profile />}

      <Footer />
    </div>
  );
}

export default App;
