import login from "../../assets/illustrations/login.svg";
import login2 from "../../assets/illustrations/login2.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const loginForm = () => (
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="space-y-1">
      <span className="font-lexend font-bold text-h36 sm:text-h32">Login</span>
      <p className="text-[#667085] text-h16 sm:text-h14">
        Please fill your detail to access your account.
      </p>
    </div>

    {/* Input Fields */}
    <InputField
      label="Institute Email"
      placeholder="example@iiitm.ac.in"
      isPassword={false}
    />

    <InputField label="Password" placeholder="Password" isPassword={true} />

    {/* Remember Me */}
    <div className="text-h14 flex lg:space-x-24 md:space-x-16 sm:space-x-12">
      <div className="flex flex-row items-center justify-between w-screen py-1">
        <label
          className="flex space-x-1.5 text-slate-500 font-semibold cursor-pointer"
          htmlFor="remember"
        >
          <input
            className="w-[16px] cursor-pointer"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <span className="hover:text-slate-600 transition">Remember me</span>
        </label>

        <Link
          to="/forgotpass"
          className="text-[#0EA5E9] transition font-medium hover:text-sky-700"
        >
          Forgot Password?
        </Link>
      </div>
    </div>

    {/* Submit Button */}
    <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
      Sign In
    </button>

    {/* Footer */}
    <div className="flex flex-col items-center space-y-2">
      <Link
        to="/help"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
      >
        Something Wrong? Click Here
      </Link>
    </div>
  </div>
);

const loginScreen = () => {
  return (
    <AuthUI
      InputField={loginForm}
      illustration_1={login}
      illustration_2={login2}
    />
  );
};

export default loginScreen;
