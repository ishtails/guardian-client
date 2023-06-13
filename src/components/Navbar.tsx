import logo from "../assets/icons/logo.svg";
import line from "../assets/icons/line.svg";
import home from "../assets/icons/home.svg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { BsClipboard2Check } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';

const Navbar = ({role}) => {
  return (
    <div className="flex flex-row h-[96px] lg:px-8 px-6 items-center bg-white shadow-card-shadow rounded-bl-2xl rounded-br-2xl justify-between">
      <div className="flex space-x-6">
        <Link to={'/admin/home'} className="flex space-x-4">
          <img src={logo} className="w-[32px]" />
          <h1 className="hidden lg:flex flex-row font-lexend text-h28 text-primary">
            Guar <span className="font-lexend font-bold text-h28">dian</span>
          </h1>

          <img src={line} className="" />
          <h1 className="font-lexend font-bold text-h28 text-primary">
            Dashboard
          </h1>
        </Link>
        <Searchbar isMobile={false}/>
      </div>
      {role === 'admin' && (
        <div className="flex items-center">
        <Link to={"/admin/home"}>
          {/* <img src={home} className="bg-slate-100 p-2 rounded-lg" /> */}
          <BsHouse style={{color: '#0EA5E9', fontSize: '20px'}}/>
        </Link>
        <Dropdown title="admin" isHeading={true}/>
      </div>
      )}
      {role === 'security' && (
        <div className="flex items-center">
        <Link to={"/security/closed"}>
          {/* <img src={home} className="bg-slate-100 p-2 rounded-lg" />/ */}
          <BsClipboard2Check style={{color: '#0EA5E9', fontSize: '20px'}}/>
        </Link>
        <Dropdown title="admin" isHeading={true}/>
      </div>
      )}
      {role === 'student' && (
        <div className="flex items-center">
        <Link to={"/admin/home"}>
          <img src={home} className="bg-slate-100 p-2 rounded-lg" />
        </Link>
        <Dropdown title="admin" isHeading={true}/>
      </div>
      )}
      
    </div>
  );
};

export default Navbar;
