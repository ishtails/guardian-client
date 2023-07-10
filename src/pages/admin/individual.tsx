import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import React from "react";
import skygradient from "../../assets/icons/sky-gradient.svg";
import avatar from "../../assets/icons/avatar.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import Filter from "../../components/Filter";
import { BiHomeAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const individual: React.FC = () => {
  const columns: TableColumn[] = ["Date", "Out Time", "In Time", "Reason"];
  const values: TableRow[] = [
    // Sample data rows
    {
      Date: "28/05/2023",
      "Out Time": "10:00 AM",
      "In Time": "5:00 PM",
      Reason: "Going to Market for fruits",
    },
  ];

  return (
    <div className="h-screen">
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8 bg-[#FCFFFF]">
        <nav>
          <Navbar role="admin" />
        </nav>

        <div className="flex space-x-6 ">
          <div className="flex flex-col relative md:w-[500px]">
            <img src={skygradient} />
            <img
              src={avatar}
              className="absolute self-center top-[7%] lg:top-[9%] w-[50%]"
            />

            <div className=" bg-white rounded-b-xl shadow-card-shadow space-y-4 pt-[25%] px-5 pb-4 items-center">
              <div className="flex flex-col items-center mt-2 xl:mt-0">
                <h2 className="text-h24 font-lexend font-bold">
                  Kartikay Tiwari
                </h2>
                <h3 className="text-p14 font-medium">2021BCS035</h3>
              </div>
              <div className="flex w-full justify-between py-1">
                <span className="flex items-center space-x-2">
                  <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                  <p>7905934905</p>
                </span>
                <span className="flex items-center space-x-2">
                  <BsFillHouseFill style={{ fontSize: "18px" }} />
                  <p>BH1 / 340</p>
                </span>
              </div>
              <hr className="h-px w-full bg-gray-200 border-0" />

              <div className="flex flex-col space-y-4 pb-4 items-center h-full">
                <span className="font-lexend font-bold text-h24">Filters</span>
                <Dropdown options={[]} title="Deadline" isHeading={false} />
              </div>
            </div>
          </div>

          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between">
              <h1 className="font-lexend font-bold text-h24 mx-4">
                Kartikay Tiwari
              </h1>
              <Dropdown options={[]} title="Today" isHeading={false} />
            </span>
            <Table columns={columns} values={values} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <SearchBar />
          <span className="flex items-center">
            <Link
              to={"/"}
            >
              <BiHomeAlt2 style={{ color: "#0EA5E9", fontSize: "24px" }} />
            </Link>
            <Dropdown options={[]} title="admin" isHeading={true} />
          </span>
        </nav>

        <hr />

        {/* Profile Section */}
        <div className="flex space-x-2 justify-between">
          <div className="h-28 flex bg-white rounded-xl px-6 py-2 space-x-4 border w-screen">
            <img src={avatar} className="w-[80px]" />
            <div className="flex flex-col">
              <h2 className="font-lexend font-bold">Kartikay Tiwari</h2>
              <h3 className="text-[8px]">2021BCS035</h3>
              <span className="flex items-center space-x-2">
                <BsFillTelephoneFill style={{ fontSize: "10px" }} />
                <p className="text-[10px] py-1">7905934905</p>
              </span>
              <span className="flex items-center space-x-2">
                <BsFillHouseFill style={{ fontSize: "10px" }} />
                <p className="text-[10px]">BH1 / 340</p>
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-2 justify-between">
            <Filter />
            <Filter />
            <Filter />
          </div>
        </div>

        <div className="shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
          <Table columns={columns} values={values} />
        </div>

        <hr />

        <img src={logo} className="w-[32px] self-center" />
      </div>
    </div>
  );
};

export default individual;
