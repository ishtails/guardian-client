import { Link } from "react-router-dom";
import goback from "../../assets/icons/back-button.svg";
import bgbluegradient from "../../assets/darkblue-gradient-bg.svg";
import reason_illustration from "../../assets/illustrations/reason.svg";
import InputField from "../../components/InputField";
import logo from "../../assets/icons/logo.svg";

type Props = {};

const reason = ({}: Props) => {
  return (
    <div className="relative flex flex-col lg:hidden overflow-x-clip h-screen">
      <img src={bgbluegradient} className="absolute -z-10 scale-[300%]" />
      <div className="flex flex-col space-y-4 px-4 pb-3">
        {/* Navbar */}
        <nav className="space-y-2">
          <div className="flex pt-4 items-center justify-between ">
            <Link to={"/student/home"} className="flex items-center space-x-2">
              <img src={goback} className="w-[24px] self-center" />
              <p className="text-white">Go Back</p>
            </Link>
          </div>
          <hr className="w-full" />
        </nav>

        {/* Reason Box */}
        <div className="bg-white w-[80%] shadow-card-shadow rounded-xl p-5 space-y-10 self-center flex flex-col items-center justify-center">
          <img src={reason_illustration} className="w-full"/>

          <form className="flex flex-col w-full items-center space-y-5 pb-1">
            <InputField
              label="Reason"
              placeholder="Market"
              isPassword={false}
            />

            <button className="text-white text-p16 bg-[#0EA5E9] py-3 px-10 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg">
              Confirm Exit
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="z-10 bg-white flex flex-col space-y-2 fixed w-screen bottom-0 left-0">
          <hr />
          <img src={logo} className="w-[32px] self-center py-1" />
        </div>
      </div>
    </div>
  );
};

export default reason;
