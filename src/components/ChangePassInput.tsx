import React from "react";
import PasswordInput from "./PasswordInput";

const ChangePassInput = (props: { title: string }) => {
  return (
    <div className="flex flex-col">
      <div className="py-2">
        <span className="font-lexend font-bold text-h36 sm:text-h32">
          {props.title}
        </span>
        <p className="text-[#667085] text-h16 sm:text-h14">
          Reset your password
        </p>
      </div>
      <div className="py-2">
        <h1 className="text-[#344054] text-h14">Enter Current Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[#344054] text-h14">Enter New Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="py-2">
        <h1 className="text-[#344054] text-h14">Confirm New Password</h1>
        <div className="relative">
          <PasswordInput />
        </div>
      </div>
      <div className="py-2">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg">
          Sign In
        </button>
      </div>
      <div className="flex flex-col items-center text-decoration-line: underline py-2">
        <a href="" className="text-[#104A70] ">
          Back to Login
        </a>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default ChangePassInput;
