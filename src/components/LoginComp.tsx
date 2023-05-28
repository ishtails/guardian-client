import logo from "../assets/icons/logo.svg"
import { useState } from "react";
import React from 'react'

const LoginComp = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col w-[50%]">
          <div className="flex space-x-4">
            <img src={logo} className="w-[32px]" />
            <div className="hidden lg:flex flex-row font-lexend text-h28 text-primary">Guar <div className="font-lexend font-bold text-h28">dian</div></div>
          </div>
          <div className="flex flex-row h-[650px] justify-center items-center">
            <div className="bg-white rounded-xl shadow-card-shadow space-y-4 p-5 h-[450px] w-[400px]">
              <span className="font-lexend font-bold text-h36">Admin Login</span>
              <p className="text-[#667085] text-h16">Please fill your detail to access your account.</p>
              <div>
                <h1 className="text-[#344054] text-h14">Institute Email</h1>
                <input type="text" placeholder="admin@iiitm.ac.in" className="border-2 rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-1 w-full "/>
              </div>
              <div>
                <h1 className="text-[#344054] text-h14">Password</h1>
                <div className="relative">
                <input type={isPasswordVisible ? "text" : "password"} placeholder="Password" className="border-2 rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-1 w-full"/>
                <button className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600" onClick={togglePasswordVisibility}>
                  {isPasswordVisible ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
                </div>
              </div>
              <div className="text-h14 flex space-x-24">
                <div className="flex space-x-1">
                  <input id="default-checkbox" type="checkbox" value="" className="text-[#D0D5DD]"></input>
                  <h1 className="text-[#344054] ">Remember me</h1>
                </div>
                <a href="" className="text-[#0EA5E9]">Forgot Password?</a>
              </div>
              <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg">Sign In</button>
              <div className="flex flex-col items-center text-decoration-line: underline">
                <a href="" className="text-[#104A70] ">Student? Click Here</a>
                <a href="" className="text-[#104A70]">Security Guard? Click Here</a>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LoginComp
