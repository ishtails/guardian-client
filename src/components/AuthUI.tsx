import blur_cyan from "./../assets/blur-cyan.svg";
import logo from "./../assets/icons/logo.svg";

const authUI = (props: {
  InputField: any;
  illustration_1: any;
  illustration_2: any;
}) => {
  return (
    <div className="bg-[#FCFFFF] relative">
      <div className="md:px-6 mb-10 md:h-screen flex flex-col relative md:justify-center">
        <img
          src={blur_cyan}
          alt=""
          className="hidden md:block absolute z-0 top-[3%] left-[26%] w-[400px]"
        />

        <img src={props.illustration_2} className="md:hidden my-4" />

        <div className="md:grid md:grid-cols-2 flex items-center md:h-screen m-auto w-full">
          {/* Login Component */}
          <div className=" md:grid w-screen justify-center items-center md:w-full">
            <div className=" md:my-10 z-10 md:backdrop-blur-xl md:bg-[#F0F9FF]/50 md:rounded-xl md:shadow-card-shadow space-y-4 p-6 w-full md:w-[22rem] lg:w-[25rem]">
              <props.InputField />
            </div>
          </div>

          {/* Illustration */}
          <div className="z-10 hidden md:grid justify-center backdrop-blur-xl bg-[#F0F9FF]/50 rounded-xl shadow-card-shadow space-y-4 m-5 p-5 items-center">
            <img
              src={props.illustration_1}
              alt=""
              className="py-14 max-h-[720px]"
            />
          </div>
        </div>

        <footer className="md:hidden fixed bg-white w-screen bottom-0">
          <hr className="my-2" />
          <div className="flex flex-col justify-center items-center mb-2">
            <img src={logo} className="w-[32px] " />
          </div>
        </footer>
      </div> 
    </div>
  );
};

export default authUI;
