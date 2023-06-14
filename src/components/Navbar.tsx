import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import home from "../assets/icons/home.svg";
import Searchbar from "./Searchbar";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { LuClipboardCheck } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";

type Props = { role: String };

const Navbar = ({ role }: Props) => {
  
  let location = useLocation();

  return (
    <div className="flex flex-row h-[96px] lg:px-8 px-6 items-center bg-white shadow-card-shadow rounded-bl-2xl rounded-br-2xl justify-between">
      <div className="flex space-x-6">
        <Link to={"/admin/home"} className="flex space-x-4">
          <img src={logo} className="w-[32px]" />
          <h1 className="hidden lg:flex flex-row font-lexend text-h28 text-primary">
            Guar <span className="font-lexend font-bold text-h28">dian</span>
          </h1>

          <img src={line} className="" />
          <h1 className="font-lexend font-bold text-h28 text-primary">
            Dashboard
          </h1>
        </Link>
        <Searchbar isMobile={false} />
      </div>
      {role === "admin" && (
        <div className="flex items-center">
          <Link to={"/security/closed"} className="bg-slate-100 p-2 rounded-lg mx-1">
            <BiHomeAlt2 style={{ color: "#0EA5E9", fontSize: "24px" }} />
          </Link>
          <Dropdown title="admin" isHeading={true} />
        </div>
      )}
      {role === "security" && (
        <div className="flex items-center">
          <Link to={"/security/closed"} className="bg-slate-100 p-2 rounded-lg mx-1">
            <LuClipboardCheck style={{ color: "#0EA5E9", fontSize: "24px" }} />
          </Link>
          <Dropdown title="security" isHeading={true} />
        </div>
      )}
      {role === "student" && (
        <div className="flex items-center">
          <Link to={"/admin/home"}>
            <img src={home} className="bg-slate-100 p-2 rounded-lg" />
          </Link>
          <Dropdown title="admin" isHeading={true} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
