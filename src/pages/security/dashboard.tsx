import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Searchbar from "../../components/Searchbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import React from "react";
import Toggle from "../../components/Toggle";
import { Link } from "react-router-dom";
import { LuClipboardCheck } from "react-icons/lu";

const securityDashboard: React.FC = () => {
  const columns: TableColumn[] = [
    "Date",
    "Roll No",
    "Name",
    "Hostel",
    "Room",
    "Out Time",
    "In Time",
    "Reason",
    "Status",
  ];
  const data: TableRow[] = [
    // Sample data rows abhi ke liye, baadme we'll fetch from data.json
    {
      Date: "13/06/2023",
      "Roll No": "2021BCS012",
      Name: "Aneeka Mangal",
      Hostel: "GH",
      Room: "126",
      "Out Time": "10:00 AM",
      "In Time": "5:00 PM",
      Reason: "Market",
      Status: <Toggle />,
    },
    {
      Date: "13/06/2023",
      "Roll No": "2021BCS035",
      Name: "Kartikay Tiwari",
      Hostel: "BH1",
      Room: "340",
      "Out Time": "11:00 AM",
      "In Time": "9:00 PM",
      Reason: "Medical Shop",
      Status: <Toggle />,
    },
  ];

  return (
    <div className="bg-[#FCFFFF] h-screen">
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8">
        <nav>
          <Navbar role="security" />
        </nav>
        <div className="flex space-x-6">
          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between ">
              <h1 className="font-lexend font-bold text-h24 mx-4">
                Open Entries
              </h1>
              <div className=" px-2 py-1 rounded-lg text-sm font-medium">
                13/06/2023
              </div>
            </span>
            <Table columns={columns} data={data} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <Searchbar isMobile={true} />
          <Dropdown options={[]} title="security" isHeading={true} />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-lexend text-p18 font-bold">Open Entries</h1>
          <Link
            to={`/security/closed`}
            className="bg-slate-100 p-2 rounded-lg mx-1"
          >
            <LuClipboardCheck style={{ fontSize: "24px" }} />
          </Link>
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

export default securityDashboard;
