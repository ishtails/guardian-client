import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import {useDropzone} from 'react-dropzone'
import React, {useCallback, useState} from 'react'
import logo from "../../assets/icons/logo.svg";
import blur_cyan from "../../assets/blur-cyan.svg";

const updateInfo: React.FC<> = () => {
    const [idCard, setIdCard] = useState<File | null>(null);
    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles[0]);
        setIdCard(acceptedFiles[0]);
    };
    
  const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: 'image/*', multiple:false, })

  return (
    
    <div className=" bg-[#FCFFFF] relative">
        {/* Logo */}
      <div className="hidden z-20 md:flex p-5 lg:px-5 absolute space-x-3 left-2 top-0">
        <img src={logo} className="w-[32px]" />
        <div className="flex flex-row font-lexend text-h28 text-primary">
          Guar
          <span className="font-lexend font-bold text-h28">dian</span>
        </div>
      </div>
        
      {/* Background Gradient */}
      <div className="px-6 h-screen hidden md:flex flex-col relative justify-center">
        <img
          src={blur_cyan}
          alt=""
          className="absolute z-0 top-[3%] left-[26%] w-[400px]"
        />

      <div className="flex flex-col z-0 relative">
        <div className="grid grid-cols-2 items-center m-auto w-full">
            {/* Login Component */}

            <div className="grid justify-center items-center h-full w-full">
              <div className="scale-75 xl:scale-100 z-10 backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 p-6 w-[400px]">
                {/* Header */}
                <span className="font-lexend font-bold text-h36 sm:text-h32">
                    Update Profile
                </span>
                <p className="text-[#667085] text-h16 sm:text-h14">Change your information below</p>


                {/* Input Fields */}
                <InputField
                label="Full Name"
                placeholder=""
                isPassword={false}
                />
                <InputField
                label="Phone"
                placeholder=""
                isPassword={false}
                />
                <InputField
                label="Hostel"
                placeholder=""
                isPassword={false}
                />
                <InputField
                label="Room"
                placeholder=""
                isPassword={false}
                />
                {/* Select ID card image*/}
                <div>
                    <div {...getRootProps() } className={`dropzone ${isDragActive ? 'active' : ''}`}>
                    <input {...getInputProps()} accept="image/*"/>
                    {idCard ? (
                        <p>Image selected : {idCard.name}</p>
                    ) : (
                        <p className="cursor-pointer">Drag and drop your identity card image here, or click to select a file</p>
                    )}
                    </div>
                </div>
                {/* Submit Button */}
                <div className="pt-1">
                <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
                    Submit
                </button>
                </div>

                {/* Footer */}
                <Link
                to="/student/home"
                className="text-[#0EA5E9] text-center font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
                >
                Back to Home
                </Link>
              </div>
            </div>
            {/* Illustration */}
            <div className=" z-10 grid justify-center backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 m-5 p-5 items-center">
              <img
                src={update}
                alt=""
                className="py-14 max-h-[720px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default updateInfo;
