import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import {useDropzone} from 'react-dropzone'
import React, {useCallback, useState} from 'react'
import logo from "../../assets/icons/logo.svg";
import blur_cyan from "./../assets/blur-cyan.svg";

const updateInfo: React.FC<> = () => {
    const [idCard, setIdCard] = useState<File | null>(null);
    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles[0]);
        setIdCard(acceptedFiles[0]);
    };
    
  const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: 'image/*', multiple:false, })

  return (
    
    <div className="flex flex-col space-y-4 relative">
        
    {/* Header */}
    <div className="">
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Update Profile
      </span>
      <p className="text-[#667085] text-h16 sm:text-h14">Change your information below</p>
    </div>

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
      className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center"
    >
      Back to Home
    </Link>
  </div>
  );
};

export default updateInfo;
