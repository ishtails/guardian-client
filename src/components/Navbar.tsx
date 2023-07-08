import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { LuClipboardCheck } from "react-icons/lu";
import { BiHomeAlt2 } from "react-icons/bi";
import AppLogo from "./Logo";
import { useOutingStore } from "../store/store";
import Searchbar from "./SearchBar";

const dropDownNavStudent = [
  { href: "/student/update", label: "Update Profile" },
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];
const dropDownNavSecurity = [
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];
const dropDownNavAdmin = [
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];

const Navbar = ({ role }: { role: String }) => {
  let location = useLocation();
  const { filter, setFilter } = useOutingStore();

  if (role === "admin")
    return (
      <div className="navBar">
        <div className="flex space-x-6">
          <Link to={"/admin/home"}>
            <AppLogo />
          </Link>
          <Searchbar />
        </div>

        <div className="flex items-center">
          <Link to={"/admin/home"} className="bg-slate-100 p-2 rounded-lg mx-1">
            <BiHomeAlt2 style={{ color: "#0EA5E9", fontSize: "24px" }} />
          </Link>
          <Dropdown options={dropDownNavAdmin} title="admin" isHeading={true} />
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
          <Searchbar />
        </div>

        <div className="flex items-center">
          {location.pathname === "/security/home" && (
            <label
              htmlFor="toggleOpenNav"
              className="cursor-pointer bg-slate-100 p-2 rounded-lg mx-1"
            >
              <LuClipboardCheck
                title="View Closed Entries"
                style={{ color: "#0EA5E9", fontSize: "24px" }}
              />
              <input
                type="checkbox"
                id="toggleOpenNav"
                name="toggleOpenNav"
                className="hidden"
                checked={filter?.isOpen || false}
                onChange={(e) => {
                  setFilter({ ...filter, isOpen: e.target.checked });
                }}
              />
            </label>
          )}

          {location.pathname === "/security/closed" && (
            <Link
              to={`/security/home`}
              className="bg-slate-100 p-2 rounded-lg mx-1"
            >
              <LuClipboardCheck
                title="View Open Entries"
                style={{ color: "#0EA5E9", fontSize: "24px" }}
              />
            </Link>
          )}

          <Dropdown
            options={dropDownNavSecurity}
            title="security"
            isHeading={true}
          />
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
          <Dropdown
            options={dropDownNavStudent}
            title="student"
            isHeading={true}
          />
        </div>
      </div>
    );
  else {
    return (
      <div className="text-center font-semibold text-red-500 mt-5">
        Invalid NavBar Role Prop
      </div>
    );
  }
};

export default Navbar;
