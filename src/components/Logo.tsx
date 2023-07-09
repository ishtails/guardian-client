import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";

const Logo = () => {
  return (
    <div className="flex space-x-4">
      <img src={logo} className="w-[32px]" />
      <h1 className="hidden lg:flex flex-row font-lexend text-h28 text-primary">
        Guar <span className="font-lexend font-bold text-h28">dian</span>
      </h1>

      <img src={line} className="" />
      <h1 className="font-lexend font-bold text-h28 text-primary">Dashboard</h1>
    </div>
  );
};

export default Logo;
