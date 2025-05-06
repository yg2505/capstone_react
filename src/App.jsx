import React, { useState } from 'react';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Footer from './components/footer.jsx';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />

      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      
      <Footer />
    </div>
  );
}

export default App;
