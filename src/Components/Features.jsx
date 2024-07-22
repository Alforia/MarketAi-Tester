import React from 'react'
import img1 from '../assets/Images/featureImg.png'
const Features = () => {
  return (
    <div id='features' className=' grid lg:grid-cols-2 grid-cols-1-reverse items-center gap-12 md:gap-32 py-24  sm:flex-row justify-center px-40'>
      <div className='sm:w-[19.125rem] sm:h-[19.125rem] md:w-[20.125rem] md:h-[20.125rem] w-[15.863rem] h-[15.863rem] bg-gradient-to-r from-secondary to-white  rounded-full right-0 sm:order-2 order-1 flex items-center justify-center '>
        <div className=' '></div>
        <img src={img1} alt="" />
      </div>
      <div className='lg:order-1 order-2 gap-5'>
        <h1 className=' text-3xl lg:text-5xl font-bold pb-6'>
          <span className=' text-primary'>Revolutionary Features </span>
          to Guide Your Success
        </h1>
        <p>Our platform offers a suite of innovative tools designed to analyze market trends, identify opportunities, and provide you with actionable business ideas. From in-depth competitor analysis to detailed customer insights, we equip you with everything you need to thrive in the competitive landscape.</p>
      </div>
    </div>
  )
}

export default Features
