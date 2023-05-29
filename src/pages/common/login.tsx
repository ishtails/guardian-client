import login from "../../assets/illustrations/login.svg";
import login2 from "../../assets/illustrations/login2.svg";
import LoginInput from "../../components/LoginInput";
import AuthUI from "../../components/AuthUI";

const Login = () => {
  return (
    <AuthUI
      title="Login"
      InputField={LoginInput}
      illustration_1={login}
      illustration_2={login2}
    />
  );
};

export default Login;
