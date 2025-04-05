import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function handleMenuList() {
    setShowNavbar(!showNavbar);
  }

  const handleNavItemClick = (itemName, targetId) => {
    setActiveNavItem(itemName);
    setShowNavbar(!showNavbar);
    
    // Navigation logic with scroll to section
    if (itemName === 'about') {
      navigate('/about');
    } else if (itemName === 'home' || itemName === 'contact') {
      if (window.location.pathname !== '/') {
        navigate('/');
      }
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="navbar-component">
      <div className="navbar-bg">
        <div className="navbar">
          <div className="logo-brand">
            <img className="logo" src={logo} alt="Prarambh" />
          </div>
          <div className="mobile-nav" onClick={handleMenuList}>
            <FontAwesomeIcon className="navbar-icon" icon={faBars} />
          </div>
          <ul className={`menu-items ${showNavbar ? "active" : ""}`}>
            <li
              className={activeNavItem === "home" ? "active" : ""}
              onClick={() => handleNavItemClick("home", "home-section")}
            >
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li
              className={activeNavItem === "about" ? "active" : ""}
              onClick={() => handleNavItemClick("about")}
            >
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li
              className={activeNavItem === "contact" ? "active" : ""}
              onClick={() => handleNavItemClick("contact", "contact-section")}
            >
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
