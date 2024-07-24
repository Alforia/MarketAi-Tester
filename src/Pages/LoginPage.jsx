import React, { useState } from 'react'
import Login from '../Components/Login-Signup/Login'
import Signup from '../Components/Login-Signup/Signup';
import MeshGradientBackground from '../MeshGradientBackground';
import Forgot from '../Components/Login-Signup/Forgot';

const LoginPage = () => {
  const [currentComponent , setCurrentComponent] = useState ("forgot");

  const switchToLogin =()=>{
    setCurrentComponent('login')
  }

  const switchToSignup = ()=>{
    setCurrentComponent('signup')
  }

  const switchToForgot = ()=>{
    setCurrentComponent('forgot')
    console.log("clicked");
  }

  return (
    <div className=' w-full h-screen flex justify-center items-center px-8'>
      <MeshGradientBackground/>
      {
        currentComponent === "login" && (
          <Login switchToSignup={[switchToSignup, switchToForgot]}/>
        )
      }
      {
        currentComponent === "signup" && (
          <Signup switchToLogin={switchToLogin}/>
        )
      }
      {
        currentComponent === "forgot" && (
          <Forgot switchToLogin={switchToLogin}/>
        )
      }
    </div>
  )
}

export default LoginPage
