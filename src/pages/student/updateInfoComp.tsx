
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import {useDropzone} from 'react-dropzone' 
import React, {useCallback, useState} from 'react' 
import axios from 'axios';

const updateInfoComp = () => {
    const [idCard, setIdCard] = useState<File | null>(null);
    const onDrop = async (acceptedFiles: File[]) => {
        // console.log(acceptedFiles[0]);
        setIdCard(acceptedFiles[0]);
    };
    
    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('idCard', idCard);
            
            //sending idCard image to backend route
            const response = await axios.patch('/api/updateInfo', formData);
        
            if (response.status === 200) {
                console.log(response.data);
              const imageUrl = response.data.imageUrl;
              console.log('Image URL:', imageUrl);
            } else {
              console.error('Failed to upload image:', response.status);
            }
          } catch (error) {
            console.error('Error uploading image:', error);
          }
      };
    
  const {getRootProps, getInputProps, isDragActive } = useDropzone({onDrop, accept: 'image/*', multiple:false, })
  return (
    <div className="space-y-4">
        {/* Header */}
        <span className="font-lexend font-bold text-h36 sm:text-h32">
        Update Profile
        </span>

        <p className="text-[#667085] text-h16 sm:text-h14">Change your information below</p>
        <form onSubmit={handleSubmit}>
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
            <button type="submit" className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
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
        </form>
    </div>
  )
}

export default updateInfoComp
