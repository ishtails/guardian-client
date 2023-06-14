import Searchbar from "./Searchbar";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { LuClipboardCheck } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import AppLogo from "./Logo";

type Props = { role: String };

const Navbar = ({ role }: Props) => {
  let location = useLocation();
  console.log(location.pathname);

  if (role === "admin")
    return (
      <div className="navBar">
        <div className="flex space-x-6">
          <Link to={"/admin/home"}>
            <AppLogo />
          </Link>
          <Searchbar isMobile={false} />
        </div>

        <div className="flex items-center">
          <Link to={"/admin/home"} className="bg-slate-100 p-2 rounded-lg mx-1">
            <BiHomeAlt2 style={{ color: "#0EA5E9", fontSize: "24px" }} />
          </Link>
          <Dropdown title="admin" isHeading={true} />
        </div>
      </div>
    );

  if (role === "security")
    return (
      <div className="navBar">
        <div className="flex space-x-6">
          <Link to={"/security/home"}>
            <AppLogo />
          </Link>
          <Searchbar isMobile={false} />
        </div>

        <div className="flex items-center">
          {location.pathname === "/security/home" && (
            <Link
              to={`/security/closed`}
              className="bg-slate-100 p-2 rounded-lg mx-1"
            >
              <LuClipboardCheck
                style={{ color: "#0EA5E9", fontSize: "24px" }}
              />
            </Link>
          )}

          {location.pathname === "/security/closed" && (
            <Link
              to={`/security/home`}
              className="bg-slate-100 p-2 rounded-lg mx-1"
            >
              <LuClipboardCheck
                style={{ color: "#0EA5E9", fontSize: "24px" }}
              />
            </Link>
          )}

          <Dropdown title="security" isHeading={true} />
        </div>
      </div>
    );

  if (role === "student")
    return (
      <div className="navBar">
        <div className="flex space-x-6">
          <Link to={"/student/home"}>
            <AppLogo />
          </Link>
        </div>

        <div className="flex items-center">
          <Dropdown title="student" isHeading={true} />
        </div>
      </div>
    );

    else {
      return(<div className="text-center font-semibold text-red-500 mt-5">Invalid NavBar Role Prop</div>)
    }
};

export default Navbar;
