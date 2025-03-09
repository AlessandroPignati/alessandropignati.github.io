import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { House, User, Article, ChatTeardrop, PaperPlaneTilt } from "@phosphor-icons/react";

import HomePage from './pages/HomePage';
import AboutMe from "./pages/AboutMe.tsx";
import PublicationsPage from './pages/PublicationsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [scrollingDown, setScrollingDown] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollingDown(true);
      } else {
        // Scrolling up
        setScrollingDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/src/img/background.jpg')" }}
    >
      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 bg-transparent transition-transform duration-300 ${
        scrollingDown ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto px-10">
          {/* Navbar container with background for links */}
          <div className="flex items-center justify-between h-12 space-x-8 bg-white px-16 py-1 rounded-b-full">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative flex items-center space-x-2 transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-black'
                } group`
              }
            >
              <House size={20} />
              <span className="nav-link">Home</span>
            </NavLink>

            <NavLink
              to="/about_me"
              className={({ isActive }) =>
                `relative flex items-center space-x-2 transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-black'
                } group`
              }
            >
              <User size={20} />
              <span className="nav-link">About Me</span>
            </NavLink>

            <NavLink
              to="/publications"
              className={({ isActive }) =>
                `relative flex items-center space-x-2 transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-black'
                } group`
              }
            >
              <Article size={20} />
              <span className="nav-link">Publications</span>
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `relative flex items-center space-x-2 transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-black'
                } group`
              }
            >
              <ChatTeardrop size={20} />
              <span className="nav-link">Blog</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative flex items-center space-x-2 transition-all duration-300 ${
                  isActive ? 'text-black' : 'text-black'
                } group`
              }
            >
              <PaperPlaneTilt size={20} />
              <span className="nav-link">Contact</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;





