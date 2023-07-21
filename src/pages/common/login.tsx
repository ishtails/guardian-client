import login from "../../assets/illustrations/login.svg";
import login2 from "../../assets/illustrations/login2.svg";
import AuthUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const loginForm = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    let { login_password, login_remember_me, login_username } = data;

    const requestObj = {
      id: login_username,
      password: login_password,
      remember_me: login_remember_me,
    };

    try {
      toast.loading("Authenticating...", {
        style: {
          minWidth: "180px",
        },
        id: "login_loader",
      });
      await axios.post("/login", requestObj);
      toast.dismiss("login_loader");
      setIsLoading(false);
      navigate(0);
    } catch (error: any) {
      toast.dismiss("login_loader");
      toast.error(error.response.data)
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {/* Header */}
        <div className="space-y-1">
          <span className="font-lexend font-bold text-h36 sm:text-h32">
            Login
          </span>
          <p className="text-[#667085] text-h16 sm:text-h14">
            Please fill your detail to access your account.
          </p>
        </div>

        {/* Input Fields */}
        <InputField
          label="login_Username"
          placeholder="Username or Institute email"
          isPassword={false}
          validationRules={{ required: { value: true, message: "Required" } }}
        />

        <InputField
          label="login_Password"
          placeholder="Password"
          isPassword={true}
          validationRules={{ required: { value: true, message: "Required" } }}
        />

        {/* Remember Me */}
        <div className="text-h14 flex lg:space-x-24 md:space-x-16 sm:space-x-12">
          <div className="flex flex-row items-center justify-between w-screen py-1">
            <label
              className="flex space-x-1.5 text-slate-500 font-semibold cursor-pointer"
              htmlFor="login_remember_me"
            >
              <input
                className="w-[16px] cursor-pointer"
                type="checkbox"
                id="login_remember_me"
                {...methods.register("login_remember_me")}
              />
              <span className="hover:text-slate-600 transition text-p14">
                Remember me
              </span>
            </label>

            <Link
              to="/forgotpass"
              className="text-[#0EA5E9] transition font-medium hover:text-sky-700 text-p14"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center space-y-3">
          <button
            disabled={isLoading}
            className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold disabled:bg-slate-300"
          >
            Sign In
          </button>
          <Link
            to="/register/email"
            className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 text-p14"
          >
            Create new account
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

const loginScreen = () => {
  return (
    <AuthUI
      InputField={loginForm}
      illustration_1={login}
      illustration_2={login2}
    />
  );
};

export default loginScreen;
