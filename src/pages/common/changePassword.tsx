import changepass from "../../assets/illustrations/changepass.svg";
import changepass2 from "../../assets/illustrations/changepass2.svg";
import ChangePassUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useOutingStore, useUserStore } from "../../store/store";

const changePasswordForm = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const { setUser } = useUserStore();
  const { setOuting } = useOutingStore();

  const onSubmit = async (data: any) => {
    let { changepass_current_password, changepass_new_password } = data;
    const requestObj = {
      currentPassword: changepass_current_password,
      newPassword: changepass_new_password,
    };
    try {
      await toast.promise(axios.post("/reset-password", requestObj), {
        loading: "Working...",
        success: "Successful",
        error: (error) =>
          error.response.status === 422
            ? "Invalid password"
            : error.response.data,
      });
      setUser(null);
      setOuting(null);
      navigate(`/`);
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
        {/* <div className="flex flex-col space-y-5"> */}
        {/* Header */}
        <div className="">
          <span className="font-lexend font-bold text-h36 sm:text-h32">
            Change Password
          </span>
          <p className="text-[#667085] text-h16 sm:text-h14">
            Reset your password
          </p>
        </div>

        {/* Input Fields */}
        <InputField
          label="changepass_Current Password"
          placeholder="Current Password"
          isPassword={true}
          validationRules={{ required: { value: true, message: "Required" } }}
        />
        <InputField
          label="changepass_New Password"
          placeholder="New Password"
          isPassword={true}
          validationRules={{
            required: { value: true, message: "Required" },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*[0-9])[a-zA-Z0-9@$!%*#?&]{8,}$/,
              message: "1 alphabet, 1 digit and minimum 8 characters required",
            },
          }}
        />
        <InputField
          label="changepass_Confirm New Password"
          placeholder="Confirm Password"
          isPassword={true}
          validationRules={{
            required: { value: true, message: "Required" },
            validate: (val: string) => {
              if (methods.watch("changepass_new_password") != val) {
                return "Does not match";
              }
            },
          }}
        />

        {/* Submit Button */}
        <div className="pt-1 flex flex-col items-center space-y-2">
          <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
            Submit
          </button>

          <Link
            to={`/`}
            className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center text-p14"
          >
            Back to Home
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};

const changePassword = () => {
  return (
    <ChangePassUI
      InputField={changePasswordForm}
      illustration_1={changepass}
      illustration_2={changepass2}
    />
  );
};

export default changePassword;
