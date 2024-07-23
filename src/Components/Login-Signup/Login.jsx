import React from 'react'

const Login = ({switchToSignup}) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-black md:max-w-lg mx-auto flex flex-col  justify-center items-center gap-6">
    <h1 className=' text-3xl  font-bold'>
        
            <span className=' text-primary'> We're happy to see you again.</span>!!
            Please sign in to continue 
        </h1>
        
        <div className="mt-4">
            
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-lg" placeholder='Email address'/>
        </div>

        
        <div className="mt-4">
            
            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-lg" placeholder='Create Password'/>
        </div>

        
        <div className="mt-6">
            <button type="submit" className="w-full p-3 bg-primary text-white rounded-lg hover:bg-blue-600">Register</button>
        </div>
</div>
  )
}

export default Login
