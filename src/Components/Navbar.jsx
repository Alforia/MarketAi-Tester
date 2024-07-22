import React, { useState } from 'react'
import logo from "../assets/Images/logo.png"
import { Link } from 'react-scroll';


function Navbar() {

  const [toggle, setToggle] = useState(false);

  navigation = [{

  }]

  return (
    <div className=' w-full h-auto flex bg-transparent justify-between items-center px-32 py-6 absolute z-10'>
      <div className="justify-center items-center">
        <img src={logo} alt="" className=' h-10' />
      </div>
      <div className=' flex justify-center  items-center gap-5'>
        <div className=' hidden sm:block'>
          <ul className=' flex gap-5 items-center justify-center font-medium'>
            <li className=' font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="features"
                spy={true} 
                smooth={true} 
                offset={-50} 
              >
                Features
              </Link>
            </li>
            <li className=' font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="pricing"
                spy={true} 
                smooth={true} 
                offset={-50} 
              >
                Pricing
              </Link>
            </li>
            <li className=' font-medium cursor-pointer'>
              <Link
                activeClass="active"
                to="faq"
                spy={true} 
                smooth={true} 
                offset={-50} 
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <button className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
