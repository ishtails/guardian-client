import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import React from "react";
import skygradient from "../../assets/icons/sky-gradient.svg";
import Searchbar from "../../components/Searchbar";
import avatar from "../../assets/icons/avatar.svg";
import profile from "../../assets/icons/profile.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import blurcyan from "../../assets/blur-cyan.svg";
import blurindigo from "../../assets/blur-indigo.svg";
import DatePicker from "../../components/DatePicker";
import Filter from "../../components/Filter";

const individual: React.FC = () => {
  const columns: TableColumn[] = ["Date", "Out Time", "In Time", "Reason"];
  console.log(columns);
  const data: TableRow[] = [
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
      <div className="hidden lg:flex flex-col px-5 space-y-8 bg-[#FCFFFF]">
        <nav>
          <Navbar role="admin" />
        </nav>

        <div className="flex space-x-6 ">
            <div className="flex flex-col relative lg:w-[500px]">
                <img src={skygradient} />
                <img
                  src={avatar}
                  className="absolute self-center top-[7%] lg:top-[9%] w-[50%]"
                />

                <div className="h-[450px] bg-white rounded-b-xl shadow-card-shadow space-y-4 pt-[25%] px-5 pb-4 items-center">
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
                    <div className="flex flex-col w-[328px] space-y-4 p-5 pb-6 items-center h-full">
                        <span className="font-lexend font-bold text-h24">Filters</span>
                        <Dropdown title="Deadline" isHeading={false} />
                    </div>
                </div>
            </div>

          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between">
              <h1 className="font-lexend font-bold text-h24 mx-4">Kartikay Tiwari</h1>
              <Dropdown title="Today" isHeading={false} />
            </span>
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <Searchbar isMobile={true} />
          <Dropdown title="admin" isHeading={true} />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
            <div className="flex items-center">
                <div className="h-[100px] w-[300px] bg-white rounded-b-xl shadow-card-shadow space-y-4 items-center">
                    <div className="px-4">
                        <img src={avatar} className="absolute self-center h-[80px] w-[80px]"/>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-[11px] font-lexend font-bold">
                        Kartikay Tiwari
                        </h2>
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
                    <hr className="h-px w-full bg-gray-200 border-0" />
                </div>
                <div className="flex flex-col space-y-4">
                    {/* <DatePicker/> */}
                    <Dropdown title="Today" isHeading={false}/>
                    <Dropdown title="Today" isHeading={false}/>
                </div>
                

            </div>
        </div>

        <div className="shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
          <Table columns={columns} data={data} />
        </div>

        <hr />

        <img src={logo} className="w-[32px] self-center" />
      </div>
    </div>
  );
};

export default individual;
