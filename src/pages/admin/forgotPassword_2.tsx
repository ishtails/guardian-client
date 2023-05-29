import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import ForgotPassInput_2 from "../../components/ForgotPassInput_2";
import LoginUI from "../../components/AuthUI";

const AdminForgotPassword_2 = () => {
  return (
    <LoginUI
      title="Forgot Password?"
      InputField={ForgotPassInput_2}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default AdminForgotPassword_2;
