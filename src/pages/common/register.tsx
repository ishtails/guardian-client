import register from "../../assets/illustrations/register.svg";
import register2 from "../../assets/illustrations/register2.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const registerForm = () => (
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="space-y-1">
      <span className="font-lexend font-bold text-h36 sm:text-h32">Register</span>
      <p className="text-[#667085] text-h16 sm:text-h14">
        Please fill your details to register.
      </p>
    </div>

    {/* Input Fields */}
    <InputField
      label="Institute Email"
      placeholder="bcs_xxxxyyy@iiitm.ac.in"
      isPassword={false}
    />
    <InputField
      label="Username"
      placeholder="bcs_xxxxyyy"
      isPassword={false}
    />

    <InputField label="Password" placeholder="Password" isPassword={true} />

    {/* Remember Me */}
    <div className="text-h14 text-center ">
     
        <Link
          to="/"
          className="text-[#0EA5E9] transition font-medium hover:text-sky-700"
        >
          Already a member?Login
        </Link>
    </div>

    {/* Submit Button */}
    <Link to="/">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
            Register
        </button>
    </Link>

    {/* Footer */}
    {/* <div className="flex flex-col items-center space-y-2">
      <Link
        to="/help"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1"
      >
        Something Wrong? Click Here
      </Link>
    </div> */}
  </div>
);

const registerScreen = () => {
  return (
    <AuthUI
      InputField={registerForm}
      illustration_1={register}
      illustration_2={register2}
    />
  );
};

export default registerScreen;
