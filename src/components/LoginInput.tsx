import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";

const LoginInput = (props: { title: string }) => {
  return (
    <div className="flex flex-col">
      <div className="py-2 space-y-1">
        <span className="font-lexend font-bold text-h36 sm:text-h32">
          {props.title}
        </span>
        <p className="text-[#667085] text-h16 sm:text-h14">
          Please fill your detail to access your account.
        </p>
      </div>
      <div className="py-2 space-y-1">
        <h1 className="text-[#344054] text-h14 font-medium">Institute Email</h1>
        <input
          type="text"
          placeholder="example@iiitm.ac.in"
          className="border-2 rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-2 w-full focus:outline-sky-300 focus:bg-slate-50 hover:bg-slate-50"
        />
      </div>
      <div className="py-2 space-y-1">
        <h1 className="text-[#344054] text-h14 font-medium">Password</h1>
        <div className="relative">
          <PasswordInput placeholder="Password"/>
        </div>
      </div>
      <div className="text-h14 flex lg:space-x-24 py-2 md:space-x-16 sm:space-x-12">
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
            to="/admin/forgotpass_1"
            className="text-[#0EA5E9] transition font-medium hover:text-sky-700"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
      <div className="py-2">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
          Sign In
        </button>
      </div>
      <div className="flex flex-col items-center py-4 space-y-2">
        <Link
          to="/help"
          className="text-[#0EA5E9] font-medium hover:text-sky-600 transition underline underline-offset-1"
        >
          Something Wrong? Click Here
        </Link>
      </div>
    </div>
  );
};

export default LoginInput;
