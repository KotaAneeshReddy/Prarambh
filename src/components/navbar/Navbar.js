import React, { useState,useEffect } from 'react'
import './Navbar.css'

import logo from '../../assets/images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  function handleMenuList() {
    setShowNavbar(!showNavbar);
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
        setActiveNavItem('home');
    } else if (currentPath === '/about') {
        setActiveNavItem('about');
    } 
    // You can add more route checks for other pages if needed.
}, [location]);

  const handleNavItemClick = (itemName, targetId) => {
    setActiveNavItem(itemName);

    // Handle sections that only exist on the homepage
    if (itemName === 'home' || itemName === 'project' || itemName === 'contact') {
        if (window.location.pathname !== '/') {
            // If not already on the homepage, navigate to it first
            navigate('/');
        }

        // After navigating, wait for the homepage to load and then scroll to the target section
        setTimeout(() => {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Adjust timeout based on how fast your page loads
    } else {
        // For routes like 'About' which have their own pages, just navigate normally
        if (itemName === 'about') {
            navigate('/about');
        }
    }
};


  return (
    <motion.nav className="navbar-component">
      <div className="social-media-icons">
        <div className="social-media-icons-container">
          <a href='https://www.instagram.com/___prarambh___?igsh=MXFlbDQ1NHBtN3phag==' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='https://www.facebook.com/profile.php?id=61566622433415&is_tour_completed' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
        </div>
        <div className="contact-details">
          <span className="logo-contact-text">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Kothapet, Hyderabad</p>
          </span>
          <span className="logo-contact-text">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>prarambhitsolutions@gmail.com</p>
          </span>
          <span className="logo-contact-text">
            <FontAwesomeIcon icon={faPhone} />
            <p>+91 9493373812</p>
          </span>
        </div>
      </div>
      <div className="navbar-bg">
        <div className="navbar">
          <div className="logo-brand">
            <img className="logo" src={logo} alt="Prarambh" />
          </div>
          <div className="mobile-nav" onClick={handleMenuList}>
            <FontAwesomeIcon className="navbar-icon" icon={faBars} />
          </div>
          <motion.ul
            className={`menu-items ${showNavbar ? "active" : ""}`}
          >
            <li
              className={activeNavItem === "home" ? "active" : ""}
              onClick={() => handleNavItemClick("home", "home-section")}
            >
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li
              className={activeNavItem === "about" ? "active" : ""}
              onClick={() => handleNavItemClick("about")}
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {/* <li
              className={activeNavItem === "project" ? "active" : ""}
              onClick={() => handleNavItemClick("project", "projects-section")}
            >
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li> */}
            <li
              className={activeNavItem === "contact" ? "active" : ""}
              onClick={() => handleNavItemClick("contact", "contact-section")}
            >
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </motion.ul>
          <div className={`${showNavbar ? "menu-items" : "menu-items active"}`}>
            <a href="#contact-section">
              <button className="primary-button">Lets Talk</button>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
