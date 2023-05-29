import login from "../../assets/illustrations/login.svg";
import login2 from "../../assets/illustrations/login2.svg";
import LoginInput from "../../components/LoginInput";
import LoginUI from "../../components/AuthUI";

const Login = () => {
  return (
    <LoginUI
      title="Login"
      InputField={LoginInput}
      illustration_1={login}
      illustration_2={login2}
    />
  );
};

export default Login;
