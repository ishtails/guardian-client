import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const forgotPassForm_1 = () => (
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="">
      <h1 className="font-lexend font-bold text-h36 sm:text-h32">
        Forgot Password?
      </h1>
      <p className="text-[#667085] text-h16 sm:text-h14">Reset your password</p>
    </div>

    {/* Input Fields */}
    <InputField
      label="Enter New Password"
      placeholder="New Password"
      isPassword={true}
    />
    <InputField
      label="Confirm New Password"
      placeholder="Confirm Password"
      isPassword={true}
    />

    {/* Footer */}
    <div className="flex flex-col items-center space-y-2">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold">
        Submit
      </button>
      <Link
        to="/"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 text-p14"
      >
        Back to Login
      </Link>
    </div>
  </div>
);

const forgotPassword_3 = () => {
  return (
    <AuthUI
      InputField={forgotPassForm_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default forgotPassword_3;
