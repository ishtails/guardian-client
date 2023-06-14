import { Link } from "react-router-dom";
import goback from "../../assets/icons/back-button.svg";
import bgbluegradient from "../../assets/darkblue-gradient-bg.svg";
import success_illustration from "../../assets/illustrations/success.svg";
import logo from "../../assets/icons/logo.svg";

type Props = {};

const reason = ({}: Props) => {
  return (
    <div className="relative flex flex-col lg:hidden overflow-x-clip h-screen">
      <img src={bgbluegradient} className="absolute -z-10 scale-[300%]" />
      <div className="flex flex-col px-4 pb-3">
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

        {/* Illustration Box */}
        <div className="bg-white mt-8 shadow-card-shadow rounded-xl py-6 self-center w-[85%] flex flex-col items-center justify-center">
          <img src={success_illustration} className="w-full"/>
        </div>

        {/* Message */}
        <div className="flex flex-col mt-6 mb-14 items-center text-[#0A77A8]">
          <h1 className="text-h32 font-bold">Success</h1>
          <h2 className="tracking-widest font-light">11:47AM 22/06/2023</h2>

          <h2 className="tracking-wide mt-6 font-lexend font-bold text-6xl">
            00:00:26
          </h2>
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
