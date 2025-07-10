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
import Impact from './components/impact/imp.jsx';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

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
        <Login onNavigate={handleNavigation} />
      </div>
    );
  }

  return (
    <div>
      <Navbar onNavigate={handleNavigation} onLogout={handleLogout} user={user} />

      {currentPage === 'home' && (
        <div>
          <section className="home-section">
            <Home onNavigate={handleNavigation} />
          </section>
         
          <section className="explore">
            <ExplorePage />
          </section>

          <section className="about">
            <About />
          </section>
        </div>
      )}

      {currentPage === 'about' && <About />}
      {currentPage === 'explore' && <ExplorePage />}
      {currentPage === 'blog' && <Blog />}
      {currentPage === 'profile' && <Profile />}
      {currentPage === 'impact' && <Impact />}
      <Footer />
    </div>
  );
}

export default App;
