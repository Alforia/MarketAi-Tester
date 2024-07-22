import React from 'react'

// importing images

import img1 from '../assets/Images/img7.png'
import img2 from '../assets/Images/img6.png'
import img3 from '../assets/Images/img5.png'
import line3 from '../assets/Icon/lineBig1.png'
import line4 from '../assets/Icon/lineBig2.png'
import line1 from '../assets/Icon/verticalLine.png'
import line2 from '../assets/Icon/verticalLine2.png'

const Steps = () => {
  return (
    <div id='steps' className=' w-full bg-gradient-to-b  from-secondary to-white h-auto items-center justify-center py-10 px-10 rounded-t-[4rem] flex flex-col gap-16 sm:px-40'>
      <div className=' flex flex-col gap-5'>
        <h1 className=' text-3xl sm:text-5xl font-bold text-center'>
          Simple Steps to
          <span className=' text-primary'> Uncover Your Next Big Idea</span>
        </h1>
        <p className=' text-center'>Navigating our platform is straightforward and user-friendly. Follow these simple steps to unlock valuable market insights and discover your next business venture.</p>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-5 items-center  justify-center gap-5 relative' >
        
        
        <div className=' flex flex-col items-center justify-center'>
          <img src={img1} alt="" />
          <h1 className=' text-center font-bold'>1. Input Your Data</h1>
          <p className=' text-center'>Enter specific details about the market you are interested in</p>
        </div>

        <div className='hidden lg:block '>
          <img src={line4} alt=""/>
        </div>

        <div className='block lg:hidden ml-44 '>
          <img src={line2} alt=""/>
        </div>


        <div className=' flex flex-col items-center justify-center'>
          <img src={img2} alt="" />
          <h1 className=' text-center font-bold'>2. Analyze the Insights</h1>
          <p className=' text-center'>Our platform will generate a detailed report based on your inputs</p>
        </div>
        
        <div className='hidden lg:block'>
          <img src={line3} alt=""/>
        </div>

        <div className='block lg:hidden ml-20 '>
          <img src={line1} alt=""/>
        </div>


        <div className=' flex flex-col items-center justify-center'>
          <img src={img3} alt="" />
          <h1 className=' text-center font-bold'>3. Discover Business Ideas</h1>
          <p className=' text-center'>our AI will suggest the best business ideas that align with current market trends.</p>
        </div>
      </div>
    </div>
  )
}

export default Steps
