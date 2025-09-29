import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Explore from './Components/Explore'
import Facilites from './Components/Facilites'
import LogoSlider from './Components/Logos'
import Testimonials from './Components/Testimonial'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
       <Explore/> 
       <Facilites/>
       <LogoSlider/>
       <Testimonials/>
       
    </div>
  )
}
