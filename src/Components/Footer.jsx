import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Welcome to Morocco</h3>
          <p>
            Your ultimate guide to exploring the vibrant culture, 
            rich history, and breathtaking landscapes of Morocco.
          </p>
        </div>
        
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">History & Culture</a></li>
            <li><a href="#">Cities</a></li>
            <li><a href="#">Travel Tips</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Popular Cities</h3>
          <ul className="footer-links">
            <li><a href="#">Marrakech</a></li>
            <li><a href="#">Fes</a></li>
            <li><a href="#">Chefchaouen</a></li>
            <li><a href="#">Sahara Desert</a></li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="footer-links">
            <li>contact@welcometomorocco.com</li>
            <li>+212 600 123 456</li>
            <li>Avenue Mohamed V, Rabat</li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        <p>© {new Date().getFullYear()} Welcome to Morocco. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;