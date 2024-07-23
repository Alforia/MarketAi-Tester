import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Signup = ({ switchToLogin }) => {
  return (
    <div>
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-black md:max-w-lg mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Sign up</span> for a free account
        </h1>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="First Name"
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mt-4">
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Email address"
            />
          </div>

          <div className="mt-4">
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-lg"
              placeholder="Create Password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-primary text-white rounded-lg hover:bg-blue-600"
            >
              Register
            </button>
          </div>

          <hr className="my-6 border-gray-300 w-full" />

          <div className="mt-4 flex flex-col items-center">
            <p className="text-gray-500">or sign up with</p>
            <button
              type="button"
              className="mt-3 flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
                <div className=' flex gap-4 items-center '>
              <FcGoogle size={25} />
              <span>Sign up with Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
