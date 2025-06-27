import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './components/auth/firebaseConfig';

import Navbar from './components/navbar/navbar.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Footer from './components/footer/footer.jsx';
import ExplorePage from './components/explore/explore.jsx';  
import Profile from './components/profile/profile.jsx';  
import Blog from './components/blog/blog.jsx';
import Login from './components/auth/login.jsx';


import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null); // 🔐 store logged-in user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = async () => {
    await signOut(auth);
    alert('Logged out');
    setCurrentPage('login');
  };


  if (!user) {
    return (
      <div>
        {
          <Login onNavigate={handleNavigation} />
        }
      </div>
    );
  }


  return (
    <div>
      <Navbar onNavigate={handleNavigation} onLogout={handleLogout} user={user} />

      {currentPage === 'home' && (
        <div style={{ backgroundColor: "#A1683A" }}>
          <section className="home-section">
            <Home onNavigate={handleNavigation} />
          </section>

          <div className="svg-divider">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#2A2E3C" />
            </svg>
          </div>

          <section>
            <ExplorePage />
          </section>

          <div className="svg-divider">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
              <path d="M0,100 C480,0 960,100 1440,0 L1440,100 L0,100 Z" fill="#B8C5D6" />
            </svg>
          </div>

          <section style={{ backgroundColor: "#B8C5D6" }}>
            <About />
          </section>
        </div>
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
