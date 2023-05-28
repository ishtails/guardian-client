import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import home from "../assets/icons/home.svg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <div className="flex flex-row h-[96px] lg:px-8 px-6 items-center bg-white shadow-card-shadow rounded-bl-2xl rounded-br-2xl justify-between">
      <div className="flex space-x-6">
        <div className="flex space-x-4">
          <img src={logo} className="w-[32px]" />
          <div className="hidden lg:flex flex-row font-lexend text-h28 text-primary">
            Guar <div className="font-lexend font-bold text-h28">dian</div>
          </div>

          <img src={line} className="" />
          <span className="font-lexend font-bold text-h28 text-primary">
            Dashboard
          </span>
        </div>
        <Searchbar />
      </div>
      <div className="flex items-center">
        <Link to={"/admin/home"}>
          <img src={home} className="bg-slate-100 p-2 rounded-lg" />
        </Link>
        <Dropdown title="admin" isHeading={true}/>
      </div>
    </div>
  );
};

export default Navbar;
