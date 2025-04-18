import React from 'react'
import { Navbar } from '../navbar/Navbar'
import Carousel from '../carousel/Carousel'
import { Services } from '../services/Services'
import { ChooseUs } from '../whyChooseUs/Choose'
import Contact from '../contact/Contact'
import { Footer } from '../footer/Footer'
import { Membership } from '../membership/Membership'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Carousel/>
        <Services/>
        <ChooseUs/>
        <Membership/>
        <Contact/>
        <Footer/>
    </>
  )
}
