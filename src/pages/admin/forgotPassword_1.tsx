import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import ForgotPassInput_1 from "../../components/ForgotPassInput_1";
import LoginUI from "../../components/AuthUI";

const AdminForgotPassword_1 = () => {
  return (
    <LoginUI
      title="Forgot Password?"
      InputField={ForgotPassInput_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default AdminForgotPassword_1;
