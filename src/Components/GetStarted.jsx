import React from 'react'

// importing images

import img1 from '../assets/Images/image1.png'


const GetStarted = () => {
  return (
    <div id='getstarted' className=' grid lg:grid-cols-2 grid-cols-1-reverse items-center  gap-12 md:gap-24 py-12   justify-center px-12 sm:px-40'>
      <div className='sm:w-[19.125rem] sm:h-[19.125rem] md:w-[20.125rem] md:h-[20.125rem] w-[15.863rem] h-[15.863rem] bg-gradient-to-r from-secondary to-white  rounded-full right-0 '>
        <div className='  absolute '></div>
        <img src={img1} alt="" />
      </div>
      <div className=' flex flex-wrap gap-5'>
        <h1 className=' text-3xl sm:text-5xl font-bold'>
          <span className=' text-primary'>Kickstart your </span>
          Market Analysis Adventure
        </h1>
        <p>Unlock the potential of your entrepreneurial dreams with our cutting-edge market analysis platform. Powered by GPT-4, we provide you with the latest trends, insights, and data to help you find the perfect business idea. Start your journey to success today!</p>
        <button className=' bg-primary px-8 py-2 rounded-lg text-white font-bold w-44'>
          Get Started
        </button>
      </div>
      
    </div>
  )
}

export default GetStarted
