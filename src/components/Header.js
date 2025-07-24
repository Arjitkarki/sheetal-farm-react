// src/components/Header.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">🌱</span>
          <span className="logo-text">SHEETAL FARM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            🏠 Home
          </Link>
          <Link 
            to="/menu" 
            className={`nav-link ${isActive('/menu') ? 'active' : ''}`}
          >
            🍽️ Menu
          </Link>
          <Link 
            to="/pictures" 
            className={`nav-link ${isActive('/pictures') ? 'active' : ''}`}
          >
            📷 Pictures
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            📞 Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav active">
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            🏠 Home
          </Link>
          <Link 
            to="/menu" 
            className={`mobile-nav-link ${isActive('/menu') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            🍽️ Menu
          </Link>
          <Link 
            to="/pictures" 
            className={`mobile-nav-link ${isActive('/pictures') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            📷 Pictures
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            📞 Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;