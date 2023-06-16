import register from "../../assets/illustrations/register.svg";
import register2 from "../../assets/illustrations/register2.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const registerForm = () => (
  <div className="flex flex-col space-y-3">
    {/* Header */}
    <div className="space-y-1">
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Register
      </span>
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

    <InputField label="Password" placeholder="Password" isPassword={true} />

    {/* Submit Button */}
    <div className="flex flex-col text-h14 text-center space-y-2">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
        Register
      </button>
      <Link
        to="/"
        className="text-[#0EA5E9] text-p14 transition font-medium hover:text-sky-700"
      >
        Already registered? Login
      </Link>
    </div>
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
