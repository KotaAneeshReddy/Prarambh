import React from 'react'
import './Services.css'
import { ServiceCard } from '../serviceCard/ServiceCard'
import { serviceData } from '../../data/ServiceData'

export const Services = () => {
  return (
    <section className='services-component container'>
        <div className='service-text'>
            <h1 className='heading'>Our Services</h1>
            <p>Our services are at the heart of what we do, and they are designed to empower your business with strategic solutions for success. We offer a comprehensive suite of services that cater to the diverse need of our clients</p>
        </div>
        <div className='service-cards'>
            {
                serviceData.map((service) => {
                    return (
                        <ServiceCard name={service.name} description={service.description} image={service.image}/>
                    )
                })
            }
        </div>
    </section>
  )
}
