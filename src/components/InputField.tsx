import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  placeholder: string;
  isPassword: boolean;
  validationRules: any;
};

const InputField = ({
  label,
  placeholder,
  isPassword,
  validationRules,
}: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputId = `${label.replace(/\s+/g, "_").toLowerCase()}`;
  label = label.split("_")[1];
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="space-y-1">
      <label htmlFor={inputId} className="text-[#344054] text-p16 font-medium">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          {...register(inputId, validationRules)}
          type={!isPassword ? "text" : isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          className={`border rounded-lg border-[#D0D5DD] text-[#667085] text-h16 p-2 w-full focus:outline-sky-300 focus:bg-slate-50 hover:bg-slate-50 transition ${
            errors[inputId] ? "border-red-300" : ""
          }`}
        />
        <div
          className={`${
            !isPassword ? "hidden" : "absolute"
          } top-3 right-4 text-gray-600 cursor-pointer`}
          onClick={() => {
            setIsPasswordVisible((prevState) => !prevState);
          }}
        >
          {isPasswordVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </div>
        {errors[inputId]?.message && (
          <span className="text-red-500 text-p14">
            {(errors[inputId] as FieldError).message}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
