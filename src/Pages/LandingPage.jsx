import React from 'react'
import Count from '../Components/Count'
import Faq from '../Components/Faq'
import Features from '../Components/Features'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Pricing from '../Components/Pricing'
import Steps from '../Components/Steps'

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Count/>
      <Features/>
      <Steps/>
      <GetStarted/>
      {/* <Pricing/> */}
      <Faq/>
      <Footer/>
    </div>
  )
}

export default LandingPage
