import React from 'react'

const Pricing = () => {
  return (
    <div className="max-w-6xl mx-auto text-center p-6">
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-left sm:text-center"><span className="text-indigo-600">Eliminate Guesswork </span> and Save Time </h1>
          <p className="text-lg mb-8">Select a flexible monthly Market Insight subscription to get more searches.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 shadow-md flex justify-around flex-col items-center rounded-2xl">
              <div>
              <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
              <p className="text-3xl font-bold ">$25/<span className=' text-xl'>month</span></p>
              </div>
              <div className=' h-[0.03rem] w-3/4 bg-black'></div>
              <div className=' flex flex-col items-start pl-6 text-left'>
              <p className="">★ 50 Searches per month</p>
              <p className="">★ 50 Searches per month</p>
              </div>
              <button className="bg-primary text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-lg">Subscribe</button>
            </div>
            <div className="bg-card p-6 shadow-md flex justify-around flex-col items-center rounded-2xl">
              <div>
              <h2 className="text-xl font-semibold mb-2">Gold Plan</h2>
              <p className="text-3xl font-bold ">$25/<span className=' text-xl'>month</span></p>
              </div>
              <div className=' h-[0.03rem] w-3/4 bg-black'></div>
              <div className=' flex flex-col items-start pl-6 text-left'>
              <p className="">★ 200 searches per month</p>
              <p className="">★ Parallel searching</p>
              <p className="">★ Dedicated Customer Support</p>
              </div>
              <button className="bg-primary text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-lg">Subscribe</button>
            </div>
        
            <div className="bg-card p-6 shadow-md flex justify-around flex-col items-center rounded-2xl">
              <div>
              <h2 className="text-xl font-semibold mb-2">Platinum Plan</h2>
              <p className="text-2xl font-bold ">$120/month</p>
              </div>
              <div className=' flex flex-col items-start pl-6 text-left'>
              <p className="">★ 1000+ searches per month</p>
              <p className="">★ API Access</p>
              <p className="">★ Trend Analysis</p>
              <p className="">★ Advanced Sentiment Analysis</p>
              </div>
              <button className="bg-primary text-white hover:bg-blue-700 font-bold py-2 px-4 rounded-lg">Subscribe</button>
            </div>
          </div>
        </div>
  )
}

export default Pricing
