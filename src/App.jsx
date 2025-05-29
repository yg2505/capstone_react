import React, { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import ExplorePage from './components/explore/explore.jsx';  
import Profile from './components/profile/profile.jsx';  
import Blog from './components/blog/blog.jsx';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />

      {currentPage === 'home' && <Home onNavigate={handleNavigation}/>}
      {currentPage === 'about' && <About />}
      {currentPage === 'explore' && <ExplorePage />}
      {currentPage === 'blog' && <Blog />}
      {currentPage === 'profile' && <Profile/>}

      
    
      <Footer />
    </div>
  );
}

export default App;
