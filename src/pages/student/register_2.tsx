import register from "../../assets/illustrations/register.svg";
import register2 from "../../assets/illustrations/register2.svg";
import AuthUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const registerForm = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    let { register_verify_otp } = data;

    const requestObj = {
    otp: register_verify_otp,
    };

    try {
      await toast.promise(axios.post("/verify-otp", requestObj), {
        loading: 'Checking...',
        success: 'Verified',
        error: (error) => (error.response.data || "Failed"),
      });
      navigate(`/register/password`);
    } catch (error: any) {
      console.log(error.response);
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
        Register
      </span>
      <p className="text-[#667085] text-h16 sm:text-h14">
        Please fill your details to register.
      </p>
    </div>

    {/* Input Fields */}
    <InputField
      label="register_Verify OTP"
      placeholder="Enter OTP"
      isPassword={false}
      validationRules={{ required: { value: true, message: "Required" } }}
    />

    {/* Submit Button */}
    <div className="flex flex-col text-h14 text-center space-y-2">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
        Register
      </button>
      <Link
        to="/register/email"
        className="text-[#0EA5E9] text-p14 transition font-medium hover:text-sky-700"
      >
        Resend OTP
      </Link>
    </div>
    </form>
    </FormProvider>
  );
};

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
