import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Cards from './Components/Cards'
import Explore from './Components/Explore'
export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards/>
       <Explore/> 
    </div>
  )
}
