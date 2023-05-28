import logo from "../../assets/icons/logo.svg"
import login from "../../assets/illustrations/login.svg"
import { useState } from "react";
import LoginComp from "../../components/LoginComp";

const adminLogin = () => {
  
  return (
    <>
    <div className="bg-[#FCFFFF] m-6 space-y-8 h-[100vh]">
      <div className="flex space-x-6">
        <LoginComp name="Admin"/>
        <div className="flex flex-col bg-[#F0F9FF] rounded-xl shadow-card-shadow w-[50%] space-y-4 p-5 items-center h-[700px]">
          <img src={login} alt="" className="h-[700.17px] w-[731.45px]"/>
        </div>
      </div>
    </div>
    
  </>
  )
}

export default adminLogin;