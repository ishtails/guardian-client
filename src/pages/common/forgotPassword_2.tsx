import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import AuthUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const forgotPassForm_1 = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    let { forgotpass2_otp } = data;

    const requestObj = {
      otp: forgotpass2_otp,
    };

    try {
      await toast.promise(
        axios.post("/verify-otp", requestObj),
        {
          loading: "Verifying OTP...",
          success: "Verified",
          error: (error) => error.response?.data || "Server Error",
        }
      );
      setIsLoading(false);
      navigate(`/forgotpassword/reset`);
    } catch (error: any) {
      setIsLoading(false);

      if (
        error.response.data === "OTP expired" ||
        error.response.data === "Not generated"
      ) {
        return navigate("/forgotpassword/email");
      }

      if (error.response.data === "Already logged in") {
        return navigate("/");
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col space-y-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {/* Header */}
        <div className="">
          <span className="font-lexend font-bold text-h36 sm:text-h32">
            Forgot Password?
          </span>
          <p className="text-[#667085] text-h16 sm:text-h14">
            Enter the OTP sent to your email
          </p>
        </div>

        {/* Input Fields */}
        <InputField
          label="forgotpass2_OTP"
          placeholder="Enter OTP"
          isPassword={false}
          validationRules={{ required: { value: true, message: "Required" } }}
        />

        {/* Footer */}
        <div className="flex flex-col items-center text-p14">
          <button
            disabled={isLoading}
            className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold text-p16"
          >
            Submit
          </button>
          <Link
            to="/forgotpassword/email"
            className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 mt-2 -mb-1"
          >
            Resend OTP
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

const forgotPassword_2 = () => {
  return (
    <AuthUI
      InputField={forgotPassForm_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default forgotPassword_2;
