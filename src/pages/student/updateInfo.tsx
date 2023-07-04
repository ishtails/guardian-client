import update from "../../assets/illustrations/updateInfo.svg";
import AuthUI from "../../components/AuthUI";
import { Link } from "react-router-dom";
import InputField from "../../components/InputField";
import InputImage from "../../components/InputImage";
import { FormProvider, useForm } from "react-hook-form";
import { useFormStore } from "../../store/store";
import { toast } from "react-hot-toast";

const ToTitleCase = (value:string) => {
  const words = value.split(' ');

  const capitalizedWords = words.map((word) => {
    const lowercaseWord = word.toLowerCase();
    const firstLetterCapitalized = lowercaseWord.charAt(0).toUpperCase();
    const restOfWord = lowercaseWord.slice(1);

    return firstLetterCapitalized + restOfWord;
  });

  return capitalizedWords.join(' ');
};

const updateForm = () => {
  const methods = useForm();
  const {formValues} = useFormStore();

  const onSubmit = (data: any) => {
    let {update_full_name, update_mobile, update_hostel, update_room} = data;

    if(!formValues.update_identity_card){
      return toast.error("No image attached")
    }

    const requestObj = {
      name: ToTitleCase(update_full_name),
      mobile: update_mobile,
      hostel: update_hostel.toUpperCase(),
      room: update_room,
      idCard: formValues.update_identity_card
    }

    console.log(requestObj)
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
          placeholder="Enter your name"
          isPassword={false}
          validationRules={{
            required: { value: true, message: "Required" },
          }}
        />
        <InputField
          label="update_Mobile"
          placeholder="10-digit mobile number"
          isPassword={false}
          validationRules={{
            required: { value: true, message: "Required" },
            pattern: {
              value: /^\d{10}$/,
              message: "Enter a valid 10-digit mobile number",
            },
          }}
        />
        <InputField
          label="update_Hostel"
          placeholder="BH1 / BH2 / BH3 / IVH / GH"
          isPassword={false}
          validationRules={{
            required: { value: true, message: "Required" },
            pattern: {
              value: /^(bh1|bh2|bh3|ivh|gh)$/i,
              message: 'Invalid Hostel',
            },
          }}
        />
        <InputField
          label="update_Room"
          placeholder="Hostel room number"
          isPassword={false}
          validationRules={{
            required: { value: true, message: "Required" },
          }}
        />

        <InputImage label="update_Identity Card"/>

        {/* Submit Button */}
        <div className="pt-1">
          <button className="text-white text-h16 bg-[#0EA5E9] w-full p-2 rounded-lg hover:bg-sky-400 transition-all font-semibold">
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
