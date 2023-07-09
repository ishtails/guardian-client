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
    let { register_institute_email } = data;

    const requestObj = {
      email: register_institute_email,
    };

    try {
      toast.loading('Checking Email...', {
        id:"check_email"
      })
      const result = await axios.post("/is-registered", requestObj);
      console.log(result)
      toast.dismiss("check_email");

      if (!result.data) {
        const response = await toast.promise(
          axios.post("/send-otp", requestObj),
          {
            loading: "Sending OTP...",
            success: "Successful",
            error: () => "Failed",
          }
        );
        console.log(response);
        navigate(`/register/otp`);
        return;
      }

      return toast.error("Already registered");
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
          label="register_Institute Email"
          placeholder="Enter your email"
          isPassword={false}
          validationRules={{ required: { value: true, message: "Required" } }}
        />

        {/* Submit Button */}
        <div className="flex flex-col text-h14 text-center space-y-2">
          <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
            Register
          </button>
          <Link
            to="/"
            className="text-[#0EA5E9] text-p14 transition font-medium hover:text-sky-700"
          >
            Already registered? Login
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
