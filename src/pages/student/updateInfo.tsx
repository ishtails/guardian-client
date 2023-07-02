import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import InputImage from "../../components/InputImage";

const updateForm = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      {/* Header */}
      <div className="">
        <span className=" font-lexend font-bold text-h36 sm:text-h32">
          Update Profile
        </span>
        <p className="text-[#667085] text-h16 sm:text-h14">
          Change your information below
        </p>
      </div>

      {/* Input Fields */}
      <InputField label="Full Name" placeholder="" isPassword={false} />
      <InputField label="Mobile" placeholder="" isPassword={false} />
      <InputField label="Hostel" placeholder="" isPassword={false} />
      <InputField label="Room" placeholder="" isPassword={false} />
      <InputImage label="Identity Card"/>

      {/* Submit Button */}
      <div className="pt-1">
        <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
          Submit
        </button>
      </div>

      {/* Footer */}
      <Link
        to="/student/home"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center"
      >
        Back to Home
      </Link>
    </div>
  );
};

const updateInfo = () => {
  return (
    <AuthUI
      InputField={updateForm}
      illustration_1={update}
      illustration_2={update}
    />
  );
};

export default updateInfo;
