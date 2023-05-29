import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import ForgotPassInput_3 from "../../components/ForgotPassInput_3";
import LoginUI from "../../components/AuthUI";

const AdminForgotPassword_3 = () => {
  return (
    <LoginUI
      title="Forgot Password?"
      InputField={ForgotPassInput_3}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default AdminForgotPassword_3;
