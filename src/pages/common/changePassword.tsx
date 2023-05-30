import changepass from "../../assets/illustrations/changepass.svg";
import changepass2 from "../../assets/illustrations/changepass2.svg";
import ChangePassUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";

const changePasswordForm = () => (
  <div className="flex flex-col space-y-4">
    {/* Header */}
    <div className="">
      <span className="font-lexend font-bold text-h36 sm:text-h32">
        Change Password
      </span>
      <p className="text-[#667085] text-h16 sm:text-h14">Reset your password</p>
    </div>

    {/* Input Fields */}
    <InputField
      label="Enter Current Password"
      placeholder="Current Password"
      isPassword={true}
    />
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

    {/* Submit Button */}
    <div className="pt-2">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
        Submit
      </button>
    </div>

    {/* Footer */}
      <Link
        to="/admin/home"
        className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center"
      >
        Back to Home
      </Link>
  </div>
);

const AdminChangePassword = () => {
  return (
    <ChangePassUI
      InputField={changePasswordForm}
      illustration_1={changepass}
      illustration_2={changepass2}
    />
  );
};

export default AdminChangePassword;
