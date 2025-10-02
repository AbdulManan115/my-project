import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import Explore from '../Components/Explore'
import Facilites from '../Components/Facilites'
import LogoSlider from '../Components/Logos'
import Testimonials from '../Components/Testimonial'
import Imageslide from '../Components/Imageslide'
import Booking from '../Components/Booking'
import Footer from '../Components/Footer'
import Ourservice from '../Components/Ourservice'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
       <Explore/> 
       <Facilites/>
       <Ourservice/>
       <LogoSlider/>
       <Testimonials/>
       <Imageslide/>
       <Booking/>
       <Footer/>
    </div>
  )
}
