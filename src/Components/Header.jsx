import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>Welcome to</span> Morocco
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">History</a>
          <a href="#" className="nav-link">Cities</a>
          <a href="#" className="nav-link">Travel Tips</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            <a href="#" className="nav-link">Home</a>
            <a href="#" className="nav-link">History</a>
            <a href="#" className="nav-link">Cities</a>
            <a href="#" className="nav-link">Travel Tips</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;