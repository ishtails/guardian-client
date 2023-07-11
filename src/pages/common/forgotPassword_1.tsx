import forgotpass from "../../assets/illustrations/forgotpass.svg";
import forgotpass2 from "../../assets/illustrations/forgotpass2.svg";
import AuthUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const forgotPassForm_1 = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    let { forgotpass_email } = data;

    const requestObj = {
      email: forgotpass_email,
    };

    try {
      const response = await toast.promise(
        axios.post("/send-otp", requestObj),
        {
          loading: "Sending OTP...",
          success: "Successful",
          error: (error) => {
            if (error.response.data === "OTP not expired") {
              return "Wait before sending OTP...";
            } else if (error.response.status === 422) {
              return "Invalid email";
            } else {
              return "Server Error";
            }
          },
        }
      );
      console.log(response);
      navigate(`/forgotpass_2`);
    } catch (error: any) {
      console.log(error);
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
            Enter your Institute email to continue
          </p>
        </div>

        {/* Input Fields */}
        <InputField
          label="forgotpass_Email"
          placeholder="example@iiitm.ac.in"
          isPassword={false}
          validationRules={{
            required: { value: true, message: "Required" },
          }}
        />

        {/* Submit */}
        <div className="flex flex-col items-center space-y-2">
          <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold">
            Continue
          </button>
          <Link
            to="/"
            className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 text-p14"
          >
            Back to Login
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

const forgotPassword_1 = () => {
  return (
    <AuthUI
      InputField={forgotPassForm_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default forgotPassword_1;
