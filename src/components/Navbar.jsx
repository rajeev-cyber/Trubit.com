import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          closeMenu();
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }, [isMenuOpen]);
    
    return (
        <>
        <nav className= "navbar">
            <div className="navbar-container">
              <div className="navbar-content">
                <a href="#services" className="nav-link">Services</a>
                <a href="#how-it-works" className="nav-link">How it works</a>
                <a href="#" className="nav-logo">Trubbit</a>
                <a href="#why-us" className="nav-link">Why us?</a>
                <a href="#faqs" className="nav-link">FAQs</a>
              </div>
              {/* Mobile Navigation */}
              <div className="mobile-nav">
                <a href="#" className="nav-logo mobile-logo">Trubbit</a>
                <button type="button" className="menu-toggle" onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="Open menu">
                  <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
            </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu} role="dialog" aria-modal="true">
            <div id="mobile-menu" className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <a href="#" className="nav-logo mobile-menu-logo">Trubbit</a>
                <button type="button" className="close-button" onClick={closeMenu} aria-label="Close menu">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="mobile-menu-items">
                <a href="#" className="mobile-nav-link" onClick={closeMenu}>Services</a>
                <a href="#" className="mobile-nav-link" onClick={closeMenu}>How it works</a>
                <a href="#" className="mobile-nav-link" onClick={closeMenu}>Why us?</a>
                <a href="#" className="mobile-nav-link" onClick={closeMenu}>FAQs</a>
              </div>
            </div>
          </div>
        )}
        </>
    );
}

export default Navbar;