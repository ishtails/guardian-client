import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import { useDropzone } from "react-dropzone";
import React, { useCallback, useState } from "react";
import axios from "axios";

const updateInfoComp: React.FC = () => {
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [hostel, setHostel] = useState('');
  // const [room, setRoom] = useState('');
  const [idCard, setIdCard] = useState<File | null>(null);
  const onDrop = async (acceptedFiles: File[]) => {
    // console.log(acceptedFiles[0]);
    setIdCard(acceptedFiles[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!idCard) {
      alert("Please select a file.");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("idCard", idCard);

      //sending idCard image to backend route
      const response = await axios.patch(
        "http://localhost:8000/api/update-profile",
        formData
      );

      console.log(response.data);
      const imageUrl = response.data.imageUrl;
      console.log("Image URL:", imageUrl);
    } catch (error) {
      console.error(error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });
  return (
    <div className="flex-col">
      {/* Header */}
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Update Profile
      </span>

      <p className="text-[#667085] text-h16 sm:text-h14">
        Change your information below
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input Fields */}
        <InputField label="Full Name" placeholder="" isPassword={false} />
        <InputField label="Phone" placeholder="" isPassword={false} />
        <InputField label="Hostel" placeholder="" isPassword={false} />
        <InputField label="Room" placeholder="" isPassword={false} />
        {/* Select ID card image*/}
        <div className="my-5 border p-10 bg-white">
          <div
            {...getRootProps()}
            className={`dropzone ${isDragActive ? "active" : ""}`}
          >
            <input
              {...getInputProps()}
              accept="image/*"
              className="flex justify-center"
            />
            {idCard ? (
              <p>Image selected : {idCard.name}</p>
            ) : (
              <p className="cursor-pointer text-center space-y-2">
                <p>Drop Id Card Image</p>
              </p>
            )}
          </div>
        </div>
        {/* Submit Button */}
        <div className="pt-1">
          <button
            type="submit"
            className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Footer */}
      <Link
          to="/student/home"
          className="text-[#0EA5E9] text-center font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
        >
          Back to Home
        </Link>
    </div>
  );
};

export default updateInfoComp;
