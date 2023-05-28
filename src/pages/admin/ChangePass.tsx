import React from 'react'
import logo from "../../assets/icons/logo.svg"
import changepass from "../../assets/illustrations/changepass.svg"
import changepass2 from "../../assets/illustrations/changepass2.svg"
import ChangePassInput from '../../components/ChangePassInput'

const ChangePass = () => {
  return (
    <>
    {/* desktop */}
    <div className="bg-[#FCFFFF] m-6 space-y-8 h-[100vh] hidden sm:flex flex-col">
      <div className="flex space-x-6">
        <div className="flex flex-col w-[50%]">
          <div className="flex space-x-4">
            <img src={logo} className="w-[32px]" />
            <div className="hidden lg:flex flex-row font-lexend text-h28 text-primary">Guar <div className="font-lexend font-bold text-h28">dian</div></div>
          </div>
          <div className="flex flex-row h-[650px] justify-center items-center">
            <div className="bg-white rounded-xl shadow-card-shadow space-y-4 p-5 h-[450px] w-[400px]">
          <ChangePassInput name="Change Password"/>  
          </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#F0F9FF] rounded-xl shadow-card-shadow w-[50%] space-y-4 p-5 items-center h-[700px]">
          <img src={changepass} alt="" className="h-[785.96px] w-[736.59px]"/>
        </div>
      </div>
    </div>
    {/* mobile */}
    <div className="bg-[#FCFFFF] m-6 space-y-8 h-[100vh] w-[375px] flex flex-col sm:hidden">
      <div className="flex flex-col space-x-6">
        <img src={changepass2} alt=""/>
        <ChangePassInput name="Change Password"/>  
        <hr className="h-0.5 mx-auto my-4 border-0 rounded bg-[#E0E0E0] justify-center items-center"/>
        <div className="flex flex-col justify-center items-center">
          <img src={logo} className="w-[32px] " />
        </div>
      </div>
    </div>
  </>
  )
}

export default ChangePass
