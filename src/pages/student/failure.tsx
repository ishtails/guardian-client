import { Link } from "react-router-dom";
import goback from "../../assets/icons/back-button.svg";
import bgyellowgradient from "../../assets/darkyellow-gradient-bg.svg";
import failure_illustration from "../../assets/illustrations/failed.svg";
import logo from "../../assets/icons/logo.svg";
import exclaimation from "../../assets/icons/exclaimation.svg";

const reason = () => {
  return (
    <div>
      <div className="relative flex flex-col xl:hidden overflow-x-clip h-screen">
        <img src={bgyellowgradient} className="absolute -z-10 scale-[250%]" />
        <div className="flex flex-col px-4 pb-3">
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

          {/* Illustration Box */}
          <div className="bg-white mt-8 shadow-card-shadow rounded-xl py-20 self-center w-[85%] flex flex-col items-center justify-center">
            <img src={failure_illustration} className="w-full" />
          </div>

          {/* Message */}
          <div className="flex flex-col mt-6 mb-14 items-center  text-amber-dark">
            <h1 className="text-h32 font-bold">Failed</h1>

            <div className="flex justify-center mt-5 bg-amber-50 rounded-xl shadow-card-shadow px-5 py-4 space-x-4 items-center">
              <img src={exclaimation} className="h-[32px]" />
              <p className="text-[12px] font-medium text-amber-dark">
                Oh no! Something went wrong... Your request was unsuccessful.
              </p>
            </div>

            <Link
              to={"/student/home"}
              className="text-white text-p16 mt-5 bg-yellow py-3 px-10 rounded-full hover:bg-amber-300 transition-all font-semibold shadow-lg"
            >
              Try Again
            </Link>
          </div>

          {/* Footer */}
          <div className="z-10 bg-white flex flex-col space-y-2 fixed w-screen bottom-0 left-0">
            <hr />
            <img src={logo} className="w-[32px] self-center py-1" />
          </div>
        </div>
      </div>
      <div className="hidden xl:flex flex-col items-center justify-center h-screen">
        <h1 className="font-bold text-sky-500 p-10 text-p20 shadow-card-shadow rounded-full border">
          Switch to a mobile device to view this page
        </h1>
        <Link
          to={"/student/home"}
          className="font-medium text-p14 mt-5 underline underline-offset-2 transition hover:scale-110 text-sky-500"
        >
          Go back
        </Link>
      </div>
    </div>
  );
};

export default reason;
