import React from "react";
import "./Footer.css";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/images/logo.png";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer">
        <div className="footer-main">
          <div className="footer-description">
            <img className="logo" src={logo} alt="Prarambh" />
            <p className="about-description-footer">
              Empowering success through strategic excellence your trusted
              partner for innovative solutions and lasting impact
            </p>
          </div>
          <div className="social-media">
            <h2 className="name-footer">Social</h2>
            <div className="social">
              <a href='https://www.instagram.com/___prarambh___?igsh=MXFlbDQ1NHBtN3phag==' target='_blank'><FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
              <a href='https://www.facebook.com/profile.php?id=61566622433415&is_tour_completed' target='_blank'><FontAwesomeIcon className="footer-icon" icon={faFacebook} /></a>
            </div>
          </div>
          <div className="footer-contact-details">
            <span className="logo-contact-text">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>Kothapet, Hyderbad</p>
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
        <div className="footer-copyright">
          <p className="copyright">
            © Copyright 2024 . Made by{" "}
            <a className="link" href="/">
              Prarambh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
