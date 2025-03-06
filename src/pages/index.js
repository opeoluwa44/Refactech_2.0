import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjFour, homeObjOne, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'
import Slider from '../components/Slider/Slider'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle =()=> {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggle = {toggle} />
      <Sidebar isOpen = {isOpen} toggle = {toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <Slider />
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjFour}/>
      <Footer/>
        
    </>
  )
}

export default Home