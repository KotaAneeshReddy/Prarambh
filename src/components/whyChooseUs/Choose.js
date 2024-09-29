import React from 'react'
import './Choose.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faLightbulb, faUser } from '@fortawesome/free-solid-svg-icons'


import Choose from '../../assets/images/WhyChooseUs.jpg'
import TailoredSolution from '../../assets/images/tailoredSolution.jpg'
import InnovativeApproach from '../../assets/images/innovativeApproach.jpg'
import ClientCentricServices from '../../assets/images/clientCentric.jpg'

export const ChooseUs = () => {
  return (
    <section className='choose-component container'>
        <img className='digital-media-image' src={Choose} alt='Digital Media'/>
        <div className='choose-text'>
            <h3 className='choose-heading'>Why Choose Us</h3>
            <h1 className='choose-supporting-text'>We are dynamic team for Digital Solution</h1>
            <p></p>
            <div className='choose-cards'>
                <div className='choose-card'>
                    <div className='choose-card-icon'>
                        <FontAwesomeIcon className='fontawesome-icon' icon={faLightbulb} />
                    </div>
                    <div className='choose-card-text'>
                        <h2 className='choose-card-heading'>Tailored Solution</h2>
                        <p>We customise our strategies to align with your unique business goals and target audience ensuring that every campaign is relevant and impactful</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <div className='choose-card-icon'>
                        <FontAwesomeIcon className='fontawesome-icon' icon={faGear} />
                    </div>
                    <div className='choose-card-text'>
                        <h2 className='choose-card-heading'>Innovative Approach</h2>
                        <p>We stay ahead of industry trends and leverage cutting-edge tools to create innovative marketing solutions that set you apart from the competetion</p>
                    </div>
                </div>
                <div className='choose-card'>
                    <div className='choose-card-icon'>
                        <FontAwesomeIcon className='fontawesome-icon' icon={faUser} />
                    </div>
                    <div className='choose-card-text'>
                        <h2 className='choose-card-heading'>Client-Centric Services</h2>
                        <p>We prioritize transpared communication and collabrative patnership working closely with you to understand your needs and exceeds your expectations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
