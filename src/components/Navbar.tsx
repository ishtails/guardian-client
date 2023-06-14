import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { LuClipboardCheck } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import Logo from "./Logo";

type Props = { role: String };

const Navbar = ({ role }: Props) => {
  if(role === "admin") return (
    <div className="navBar">
      <div className="flex space-x-6">
        <Link to={"/admin/home"}>
          <Logo />
        </Link>
        <Searchbar isMobile={false} />
      </div>

      <div className="flex items-center">
        <Link
          to={"/security/closed"}
          className="bg-slate-100 p-2 rounded-lg mx-1"
        >
          <BiHomeAlt2 style={{ color: "#0EA5E9", fontSize: "24px" }} />
        </Link>
        <Dropdown title="admin" isHeading={true} />
      </div>
    </div>
  );

  if(role === "security") return (
    <div className="navBar">
      <div className="flex space-x-6">
        <Link to={"/security/home"}>
          <Logo />
        </Link>
        <Searchbar isMobile={false} />
      </div>

      <div className="flex items-center">
        <Link
          to={"/security/closed"}
          className="bg-slate-100 p-2 rounded-lg mx-1"
        >
          <LuClipboardCheck style={{ color: "#0EA5E9", fontSize: "24px" }} />
        </Link>
        <Dropdown title="security" isHeading={true} />
      </div>
    </div>
  );

  if(role === "student") return (
    <div className="navBar">
      <div className="flex space-x-6">
        <Link to={"/student/home"}>
          <Logo />
        </Link>
      </div>

      <div className="flex items-center">
        <Dropdown title="student" isHeading={true} />
      </div>
    </div>
  );
};

export default Navbar;
