import React from 'react'
import './ServiceCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ServiceCard = ({name,description,image}) => {
  return (
    <div className='card-component'>
        <div className='choose-card-icon'>
            <FontAwesomeIcon className='fontawesome-icon' icon={image} />
        </div>
        <div className='card-text'>
            <h2>{name}</h2>
            {/* <p>{description}</p> */}
        </div>
        {/* <div className='card-button'>
            <button className='primary-button'>Get Quote</button>
        </div> */}
    </div>
  )
}
