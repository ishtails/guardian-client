
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import {useDropzone} from 'react-dropzone' 
import React, {useCallback, useState} from 'react' 

const updateInfoComp = () => {
    const [idCard, setIdCard] = useState<File | null>(null);
    const onDrop = (acceptedFiles: File[]) => {
        console.log(acceptedFiles[0]);
        setIdCard(acceptedFiles[0]);
    };
    
  const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: 'image/*', multiple:false, })
  return (
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
  )
}

export default updateInfoComp
