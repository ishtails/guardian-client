import logo from "../../assets/icons/logo.svg";
import login from "../../assets/illustrations/login.svg";
import login2 from "../../assets/illustrations/login2.svg";
import LoginInput from "../../components/LoginInput";
import blur_cyan from "../../assets/blur-cyan.svg";

const adminLogin = () => {
  return (
    <div className="bg-[#FCFFFF] relative">
      {/* Logo */}
      <div className="hidden z-20 md:flex p-5 lg:px-5 absolute space-x-3 left-2 top-0">
        <img src={logo} className="w-[32px]" />
        <div className="flex flex-row font-lexend text-h28 text-primary">
          Guar
          <span className="font-lexend font-bold text-h28">dian</span>
        </div>
      </div>

      <div className="px-6 xl:mt-5 h-screen hidden md:flex flex-col relative justify-center xl:justify-normal">
        <img
          src={blur_cyan}
          alt=""
          className="absolute z-0 top-[3%] left-[26%] w-[400px]"
        />

        <div className="flex flex-col z-0 relative">
          <div className="grid grid-cols-2 items-center m-auto w-full">
            {/* Login Component */}
            <div className="grid justify-center items-center h-full w-full">
              <div className="scale-75 xl:scale-100 z-10 backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 p-5 h-[500px] w-[400px]">
                <LoginInput name="Admin" />
              </div>
            </div>

            {/* Illustration */}
            <div className=" z-10 grid justify-center backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 m-5 p-5 items-center">
              <img src={login} alt="" className="py-14" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="flex flex-col md:hidden px-5 h-screen">
        <img src={login2} />

        <LoginInput name="Admin" />

        <footer className="flex flex-col bottom-0">
          <hr className="my-2" />
          <div className="flex flex-col justify-center items-center mb-2">
            <img src={logo} className="w-[32px] " />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default adminLogin;
