import React from "react";

import "./About.css";
import Office1 from '../../assets/images/Office1.jpg'
import Office2 from '../../assets/images/Office2.jpg'
import Person from '../../assets/images/Person.jpg'
import {Footer} from "../footer/Footer";
import {Navbar} from "../navbar/Navbar";
import Contact from "../contact/Contact";

const Knowmore = () => {
  return (
    <>
      <Navbar />
      <section id="about-section" className="knowmore">
        <div className="about-heading">
            <h3 className='choose-heading'>Get To Know</h3>
            <h1 className='choose-supporting-text'>ABOUT US</h1>
        </div>
        <div className="container company_container">
          <div className="company">
            <div className="company_image">
              <img className="office-image" src={Office1} alt="Company" />
            </div>
          </div>
          <div className="company_content">
            <p>
              Welcome to prarambh, Hyderbad's dynamic, versatile and full digital services company. Our mission is to empower business with innovative solutions that drive growth and acheive remarkable result.
            </p>
            <p>
              We prioritize a client-centric approach understanding your business to create customized strategies that deliver measurable results. Our experimental team provide exceptional services, ongoing support and continous optimization.
            </p>
          </div>
        </div>

        <div className="container company_container">
          <div className="company_content">
            <h3>Our Mission</h3>
            <p>
              At Prarambh, our mission is to empower business business of all sizes to thrive in the digital landscape through innovative and result driven marketing solutions. We are dedicated to make a positive difference by transforming digital challenges into opportunities enhancing brand presence and delivering impactful marketing campaigns that resonates with target audiences.
            </p>
            <h3>Our Vision</h3>
            <p>
              At Prarambh, Our vision is to be the premier digital marketing partner reowned for pionering innovative strategies that transform brands and elevate their online presence to new heights. We are dedicated to shaping the future of digital marketing through unwavering commitment, innovative thinking and a passion for excellence, ultimately transforming how brands connect with their audiences and acheive enduring success.
            </p>
            <h3>Our Values</h3>
            <div className="values">
              <div>
                <li>
                  <ul>Innovation</ul>
                  <ul>Collaboration</ul>
                  <ul>Transparency</ul>
                  <ul>Client-Centric Approach</ul>
                </li>
              </div>
              <div>
                <li>
                  <ul>Adaptability</ul>
                  <ul>Accountablity</ul>
                  <ul>Continous Learning</ul>
                  <ul>Integrity</ul>
                </li>
              </div>
            </div>
          </div>
          <div id="company-image2" className="company">
            <div className="company_image">
              <img
                id="second-image"
                className="office-image"
                src={Office2}
                alt="Company"
              />
            </div>
          </div>
        </div>
        <Contact />
        <Footer />
      </section>
    </>
  );
};

export default Knowmore;
