import React from 'react'

// importing images

import img1 from '../assets/Images/image1.png'

function Hero() {
    return (
        <div id='hero' className=' grid lg:grid-cols-2 grid-cols-1-reverse items-center gap-12 md:gap-30 py-20 justify-center px-40 pt-28'>
            <div className='sm:w-[17.125rem] sm:h-[17.125rem] md:w-[19.125rem] md:h-[19.125rem] w-[15.863rem] h-[15.863rem] bg-gradient-to-r from-secondary to-white  rounded-full right-0 sm:order-2 order-1 '>
                <div className='  absolute '></div>
                <img src={img1} alt="" />
            </div>
            <div className='lg:order-1 order-2 flex flex-wrap gap-5'>
                <h1 className=' text-3xl sm:text-5xl font-bold'>
                    Discover the Best
                    <span className=' text-primary'> Market Trends</span>
                </h1>
                <p>Unlock the potential of your entrepreneurial dreams with our cutting-edge market analysis platform. Powered by GPT-4, we provide you with the latest trends, insights, and data to help you find the perfect business idea. Start your journey to success today!</p>
                <button className=' bg-primary px-8 py-2 rounded-lg text-white font-bold w-44'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Hero
