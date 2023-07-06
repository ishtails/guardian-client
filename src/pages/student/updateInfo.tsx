import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import InputImage from "../../components/InputImage";
import { FormProvider, useForm } from "react-hook-form";
import { useFormStore, useUserStore } from "../../store/store";
import { toast } from "react-hot-toast";
import { ToTitleCase } from "../../helpers/helpers";
import axios from "axios";
import { useState } from "react";

const updateForm = () => {
  const methods = useForm();
  const { user } = useUserStore();
  const { formValues } = useFormStore();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if(!user){
      return toast.error("Not logged in", {
        id: 'update_not_logged_in',
      });
    }

    setIsLoading(true);
    let { update_full_name, update_mobile, update_hostel, update_room } = data;

    if (!formValues.update_identity_card && !user?.idCard) {
      setIsLoading(false);
      return toast.error("No image attached", {
        id: 'update_no_image',
      });
    }

    const formData = new FormData();
    if (update_full_name) {
      formData.append("name", ToTitleCase(update_full_name));
    }

    if (update_mobile) {
      formData.append("mobile", update_mobile);
    }

    if (update_hostel) {
      formData.append("hostel", update_hostel.toUpperCase());
    }

    if (update_room) {
      formData.append("room", update_room);
    }

    if (formValues.update_identity_card) {
      formData.append("idCard", formValues.update_identity_card);
    }

    if(!update_full_name && !update_mobile && !update_hostel && !update_room && !update_full_name && !formValues.update_identity_card){
      setIsLoading(false);
      return toast.error("No changes to submit", {
        id: 'update_no_changes',
      });
    }

    try {
      const response = await toast.promise(
        axios.patch("/update-profile", formData),
        {
          loading: "Updating...",
          success: "Updated Successfully",
          error: (error) => error.response?.data || "Server Error",
        }
      );
      console.log(response);
      setIsLoading(false);
      navigate("/student/home", { state: { key: Math.random() } });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        {/* Header */}
        <div className="">
          <span className=" font-lexend font-bold text-h36 sm:text-h32">
            Update Profile
          </span>
          <p className="text-[#667085] text-h16 sm:text-h14">
            Change your information below
          </p>
        </div>

        {/* Input Fields */}
        <InputField
          label="update_Full Name"
          placeholder={user?.name || "Enter your name"}
          isPassword={false}
          validationRules={{
            required: { value: !user?.name, message: "Required" },
          }}
        />
        <InputField
          label="update_Mobile"
          placeholder={user?.mobile.toString() || "10-digit mobile number"}
          isPassword={false}
          validationRules={{
            required: { value: !user?.mobile, message: "Required" },
            pattern: {
              value: /^\d{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
        />
        <InputField
          label="update_Hostel"
          placeholder={user?.hostel || "BH1 / BH2 / BH3 / IVH / GH"}
          isPassword={false}
          validationRules={{
            required: { value: !user?.hostel, message: "Required" },
            pattern: {
              value: /^(bh1|bh2|bh3|ivh|gh)$/i,
              message: "Invalid Hostel",
            },
          }}
        />
        <InputField
          label="update_Room"
          placeholder={user?.room.toString() || "Room number"}
          isPassword={false}
          validationRules={{
            required: { value: !user?.room, message: "Required" },
            pattern: {
              value: /^\d{3}$/,
              message: "Enter a valid room number",
            },
          }}
        />

        <InputImage label="update_Identity Card" />

        {/* Submit Button */}
        <div className="pt-1">
          <button
            disabled={isLoading}
            className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold disabled:bg-slate-300"
          >
            Submit
          </button>
        </div>

        {/* Footer */}
        <Link
          to="/student/home"
          className="text-[#0EA5E9] font-medium hover:text-sky-600 transition hover:underline underline-offset-1 self-center"
        >
          Back to Home
        </Link>
      </form>
    </FormProvider>
  );
};

const updateInfo = () => {
  return (
    <AuthUI
      InputField={updateForm}
      illustration_1={update}
      illustration_2={update}
    />
  );
};

export default updateInfo;
