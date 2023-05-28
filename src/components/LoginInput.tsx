import logo from "../assets/icons/logo.svg"
import { useState } from "react";
import React from 'react'
import PasswordInput from "./PasswordInput";

const LoginInput = (props) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  return (
    <div className="flex flex-col">
          {/* <div className="flex flex-row h-[650px] justify-center items-center">
            <div className="bg-white rounded-xl shadow-card-shadow space-y-4 p-5 h-[450px] w-[400px]"> */}
            <div className="py-2">
                <span className="font-lexend font-bold text-h36 sm:text-h32">{props.name} Login</span>
                <p className="text-[#667085] text-h16 sm:text-h14">Please fill your detail to access your account.</p>
              </div>
              <div className="py-2">
                <h1 className="text-[#344054] text-h14">Institute Email</h1>
                <input type="text" placeholder="admin@iiitm.ac.in" className="border-2 rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-1 w-full "/>
              </div>
              <div className="py-2">
                <h1 className="text-[#344054] text-h14">Password</h1>
                <div className="relative">
                <PasswordInput/>
                </div>
              </div>
              <div className="text-h14 flex lg:space-x-24 py-2 md:space-x-16 sm:space-x-12">
                <div className="flex space-x-1">
                  <input id="default-checkbox" type="checkbox" value="" className="text-[#D0D5DD]"></input>
                  <h1 className="text-[#344054] ">Remember me</h1>
                </div>
                <a href="" className="text-[#0EA5E9]">Forgot Password?</a>
              </div>
              <div className="py-2">
                <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg">Sign In</button>
              </div>
              <div className="flex flex-col items-center text-decoration-line: underline py-2">
                <a href="" className="text-[#104A70] ">Student? Click Here</a>
                <a href="" className="text-[#104A70]">Security Guard? Click Here</a>
              </div>
            </div>
        //   </div>
        // </div>
  )
}

export default LoginInput
