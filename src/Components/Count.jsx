import React from 'react'
import CountUp from 'react-countup';

// importing icons 
import oneIcon from '../assets/Icon/One.png'
import documentIcon from '../assets/Icon/Document.png'
import playStoreIcon from '../assets/Icon/PlayStore.png'

const Count = () => {
  return (
    <div id='count' className=' w-full bg-gradient-to-b  from-secondary to-white h-auto grid grid-cols-1 lg:grid-cols-3 gap-5 items-center justify-center py-10 px-10 sm:px-40 rounded-t-[4rem]'>
      <div className=' flex flex-col items-center justify-center'>
        <img src={oneIcon} alt="" />
        <h1 className=' font-bold text-2xl'>
        <span className=' text-primary'> 
        <CountUp start={60} end={96}/>
        </span>
          %</h1>
        <div className=' flex flex-col justify-center items-center'>
        <h1 className=' font-semibold text-lg'>Accuracy rate</h1>
        <h1 className=' text-center'>Ensuring precise and reliable insights.</h1>
        </div>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <img src={playStoreIcon} alt="" />
        <h1 className=' font-bold text-2xl'>
        <span className=' text-primary'>
        <CountUp start={100} end={500}/>
          </span>
          +
        </h1>
        <div className=' flex flex-col justify-center items-center'>
        <h1 className=' font-semibold text-lg'>Case Studies</h1>
        <h1 className=' text-center'>Ensuring precise and reliable insights.</h1>
        </div>
      </div>
      <div className=' flex flex-col items-center justify-center'>
        <img src={documentIcon} alt="" />
        <h1 className=' font-bold text-2xl'>
        <span className=' text-primary'>
        <CountUp start={600} end={1000}/>
          </span>
          + 
          </h1>
        <div className=' flex flex-col justify-center items-center'>
        <h1 className=' font-semibold text-lg text-center'>Business Ideas Generated</h1>
        <h1 className=' text-center'>
        A wide array of ventures to explore.</h1>
        </div>
      </div>
    </div>
  )
}

export default Count
