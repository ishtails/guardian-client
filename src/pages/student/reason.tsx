import { Link, useNavigate } from "react-router-dom";
import goback from "../../assets/icons/back-button.svg";
import bgbluegradient from "../../assets/darkblue-gradient-bg.svg";
import reason_illustration from "../../assets/illustrations/reason.svg";
import InputField from "../../components/InputField";
import logo from "../../assets/icons/logo.svg";
import { FormProvider, useForm } from "react-hook-form";
import { getLocation } from "../../helpers/helpers";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import lightbulb from "../../assets/icons/lightbulb.svg";

const reason = () => {
  const methods = useForm();
  const location = getLocation();
  const navigate = useNavigate();
  const [isLocating, setIsLocating] = useState(false);

  const onSubmit = (data: any) => {
    setIsLocating(true);

    setTimeout(async () => {
      setIsLocating(false);

      let { reason_reason } = data;
      const requestObj = {
        reason: reason_reason,
        longitude: location?.longitude,
        latitude: location?.latitude,
      };

      try {
        await toast.promise(axios.post("/student/exit-request", requestObj), {
          loading: "Verifying...",
          success: "Successful",
          error: (error) => error.response.data || "Failed",
        });

        navigate(`/student/success`);
      } catch (error: any) {
        console.log(error.response);
      }
    }, 5000);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="relative flex flex-col lg:hidden overflow-x-clip h-screen"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <img src={bgbluegradient} className="absolute -z-10 scale-[300%]" />
        <div className="flex flex-col space-y-4 px-4 pb-3">
          {/* Navbar */}
          <nav className="space-y-2">
            <div className="flex pt-4 items-center justify-between ">
              <Link to={"/"} className="flex items-center space-x-2">
                <img src={goback} className="w-[24px] self-center" />
                <p className="text-white">Go Back</p>
              </Link>
            </div>
            <hr className="w-full" />
          </nav>

          {/* Reason Box */}
          <div className="bg-white w-[80%] shadow-card-shadow rounded-xl p-5 space-y-10 self-center flex flex-col items-center justify-center">
            <img src={reason_illustration} className="w-full" />

            <div className="flex flex-col w-full items-center space-y-5 pb-1">
              <InputField
                label="reason_Reason"
                placeholder="Going to Market"
                isPassword={false}
                validationRules={{
                  required: { value: true, message: "Required" },
                  maxLength: { value: 20, message: "Message too long" },
                }}
              />

              <button
                type="submit"
                disabled={isLocating || !location}
                className="text-white text-p16 bg-[#0EA5E9] py-3 flex justify-center rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg disabled:bg-slate-400 w-40"
              >
                {location && isLocating ? (
                  <div className="flex space-x-2">
                    <div className="animate-spin w-5 h-5 border-b-2 border-white rounded-full"></div>
                    <p>Locating...</p>
                  </div>
                ) : (
                  "Confirm Exit"
                )}
              </button>
            </div>
          </div>

          <div
            className={`flex justify-center bg-amber-50 rounded-xl shadow-card-shadow px-5 py-4 space-x-4 items-center self-center w-[80%] max-w-fit`}
          >
            <img src={lightbulb} className="h-[32px]" />
            <p className="text-amber-dark text-[12px] font-medium">
              Having trouble with location? Refresh and try again...
            </p>
          </div>

          {/* Footer */}
          <div className="z-10 bg-white flex flex-col space-y-2 fixed w-screen bottom-0 left-0">
            <hr />
            <img src={logo} className="w-[32px] self-center py-1" />
          </div>
        </div>
      </form>

      <div className="hidden lg:flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-sky-500 p-10 text-p20 shadow-card-shadow rounded-full border">
          Switch to a mobile device or resize your window to view this page
        </h1>
        <Link
          to={"/"}
          className="font-medium text-p14 mt-5 underline underline-offset-2 transition hover:scale-110 text-sky-500"
        >
          Go back
        </Link>
      </div>
    </FormProvider>
  );
};

export default reason;
