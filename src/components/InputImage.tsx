import toast from "react-hot-toast";
import { useFormStore, useUserStore } from "../store/store";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
};

const InputImage = ({ label }: Props) => {
  const { user } = useUserStore();

  const { formValues, setFormField } = useFormStore();
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isInvalid, setIsInvalid] = useState(false);
  const inputId = `${label.replace(/\s+/g, "_").toLowerCase()}`;
  label = label.split("_")[1];

  const handleInputChange = (fieldName: string, value: any) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (value) {
      if (!allowedTypes.includes(value.type)) {
        setIsInvalid(true);
        setFormField(fieldName, null);
        return toast.error("Invalid file type", {
          id: "invalid_type",
        });
      }

      if (value.size >= 5 * 1024 * 1024) {
        setIsInvalid(true);
        setFormField(fieldName, null);
        return toast.error("File size exceeds 5MB limit", {
          id: "size_exceed",
        });
      }

      setFormField(fieldName, value);
      setIsInvalid(false);
    }
  };

  return (
    <div className="space-y-1">
      <h1 className="text-[#344054] text-p16 font-medium">{label}</h1>
      <label
        htmlFor={inputId}
        className={`border-slate-300 ${
          errors[inputId] || isInvalid ? "border-red-300" : "border-sky-500"
        }
        flex justify-center px-4 transition bg-white border-2  rounded-md appearance-none cursor-pointer hover:border-slate-400 focus:outline-none w-full
        ${
          !formValues[inputId] && user?.idCard
            ? "h-fit boder-solid"
            : "h-32 border-dashed"
        }`}
      >
        {!formValues[inputId] && user?.idCard ? (
          <div className="flex flex-col items-center my-2">
            <img className="mt-2 rounded-lg max-h-[24rem]" src={user?.idCard} />
            <p className="text-red-600 ml-1 mt-2 font-medium">
              Click to change image
            </p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600">
                {formValues[inputId] ? (
                  <span>{formValues[inputId].name}</span>
                ) : (
                  <div>
                    Drop files to Attach, or
                    <span className="text-sky-500 underline ml-1">Browse</span>
                  </div>
                )}
              </span>
            </span>
            {formValues[inputId] ? (
              <span className="text-sky-500 ml-1 font-medium mt-2">
                Click to change
              </span>
            ) : (
              <div />
            )}
          </div>
        )}
      </label>
      <input
        id={inputId}
        {...register(inputId)}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleInputChange(inputId, e.target.files?.[0])}
      />
      {errors[inputId] && (
        <span className="text-red-500 text-p14">{errors[inputId].message}</span>
      )}
    </div>
  );
};

export default InputImage;
