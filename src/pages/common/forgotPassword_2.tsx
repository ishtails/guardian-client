import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const forgotPassForm_1 = () => (
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="">
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Forgot Password?
      </span>
      <p className="text-[#667085] text-h16 sm:text-h14">
        Enter the OTP sent to your email
      </p>
    </div>

    {/* Input Fields */}
    <InputField label="OTP" placeholder="Enter OTP" isPassword={false} />

    {/* Footer */}
    <div className="flex flex-col items-center space-y-2 text-p14">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold text-p16">
        Submit
      </button>
      <Link
        to="/ResendOTP"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
      >
        Didn't recieve the code? Resend OTP
      </Link>
      <Link
        to="/"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
      >
        Back to Login
      </Link>
    </div>
  </div>
);

const forgotPassword_2 = () => {
  return (
    <AuthUI
      InputField={forgotPassForm_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default forgotPassword_2;
