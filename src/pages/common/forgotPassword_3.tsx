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
  // const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    // setIsLoading(true);
    let { forgotpass3_current_password, forgotpass3_new_password } = data;

    const requestObj = {
      currentPassword: forgotpass3_current_password,
      newPassword: forgotpass3_new_password,
    };

    try {
      const response = await toast.promise(axios.post("/reset-password", requestObj), {
        loading: 'Loading...',
        success: 'Successful',
        error: (error) => (error.response.data),
      });
      console.log(response)
      // setIsLoading(false);
      navigate(`/`);
    } catch (error: any) {
      // setIsLoading(false);
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
    <div className="">
      <h1 className="font-lexend font-bold text-h36 sm:text-h32">
        Forgot Password?
      </h1>
      <p className="text-[#667085] text-h16 sm:text-h14">Reset your password</p>
    </div>

    {/* Input Fields */}
    <InputField
      label="forgotpass3_New Password"
      placeholder="New Password"
      isPassword={true}
      validationRules={{ required: { value: true, message: "Required" } }}
    />
    <InputField
      label="forgotpass3_Confirm New Password"
      placeholder="Confirm Password"
      isPassword={true}
      validationRules={{ required: { value: true, message: "Required" } }}
    />

    {/* Footer */}
    <div className="flex flex-col items-center space-y-2">
      <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition font-semibold">
        Submit
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

const forgotPassword_3 = () => {
  return (
    <AuthUI
      InputField={forgotPassForm_1}
      illustration_1={forgotpass}
      illustration_2={forgotpass2}
    />
  );
};

export default forgotPassword_3;
