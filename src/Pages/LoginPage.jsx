import React, { useState } from 'react'
import Login from '../Components/Login-Signup/Login'
import Signup from '../Components/Login-Signup/Signup';
import MeshGradientBackground from '../MeshGradientBackground';
import Navbar from '../Components/Navbar';

const LoginPage = () => {
  const [currentComponent , setCurrentComponent] = useState ("login");

  const switchToLogin =()=>{
    setCurrentComponent('login')
  }

  const switchToSignup = ()=>{
    setCurrentComponent('signup')
  }

  return (
    <div className=' w-full h-screen flex justify-center items-center px-8'>
      <MeshGradientBackground/>
      {
        currentComponent === "login" && (
          <Login switchToSignup={switchToSignup}/>
        )
      }
      {
        currentComponent === "signup" && (
          <Signup switchToLogin={switchToLogin}/>
        )
      }
    </div>
  )
}

export default LoginPage
