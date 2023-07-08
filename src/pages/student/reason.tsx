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

const reason = () => {
  const methods = useForm();
  const location = getLocation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    let { reason_reason } = data;

    const requestObj = {
      reason: reason_reason,
      longitude: location?.longitude,
      latitude: location?.latitude,
    };

    try {
      const response = await toast.promise(axios.post("/student/exit-request", requestObj), {
        loading: 'Verifying...',
        success: 'Successful',
        error: (error) => (error.response.data || "Server Error"),
      });

      console.log(response)
      navigate(`/student/success`);
    } catch (error: any) {
      console.log(error.response);
      navigate(`/student/failure`);
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="relative flex flex-col lg:hidden overflow-x-clip h-screen" onSubmit={methods.handleSubmit(onSubmit)}>
        <img src={bgbluegradient} className="absolute -z-10 scale-[300%]" />
        <div className="flex flex-col space-y-4 px-4 pb-3">
          {/* Navbar */}
          <nav className="space-y-2">
            <div className="flex pt-4 items-center justify-between ">
              <Link
                to={"/student/home"}
                className="flex items-center space-x-2"
              >
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

              <button type="submit" className="text-white text-p16 bg-[#0EA5E9] py-3 px-10 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg">
                Confirm Exit
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="z-10 bg-white flex flex-col space-y-2 fixed w-screen bottom-0 left-0">
            <hr />
            <img src={logo} className="w-[32px] self-center py-1" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default reason;
