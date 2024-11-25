import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import React from "react";
import useFetchOutings from "../../helpers/fetchOutingHook";
import { LuClipboardCheck } from "react-icons/lu";
import { useOutingStore } from "../../store/store";
import moment from "moment";
import { Link } from "react-router-dom";
import SearchBar from "../../components/Searchbar";

const dropDownNavSecurity = [
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];

const closedEntries: React.FC = () => {
  useFetchOutings("/outings", { isOpen: false });

  const { outing, isLoading } = useOutingStore();

  const columns: TableColumn[] = [
    "Roll No",
    "Name",
    "Hostel",
    "Room",
    "Out Time",
    "In Time",
    "Reason",
  ];
  const values: TableRow[] = [];

  if (!isLoading) {
    outing?.map((unit) => {
      const newObj = {
        Name: unit.name,
        "Roll No": unit.username,
        Hostel: unit.hostel,
        Room: unit.room,
        "Out Time": unit.outTime,
        "In Time": unit.inTime,
        "Late By": unit.lateBy,
        Reason: unit.reason,
      };
      values.push(newObj);
      values.sort((a, b) => {
        if (a["Out Time"] > b["Out Time"]) {
          return -1;
        }

        if (a["Out Time"] < b["Out Time"]) {
          return 1;
        }
        return 0;
      });
    });
  }
  return (
    <div className="bg-[#FCFFFF] h-screen">
      <div className="hidden md:flex flex-col px-5 space-y-8">
        <nav>
          <Navbar role="security" />
        </nav>
        <div className="flex space-x-6">
          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between mx-4">
              <h1 className="font-lexend font-bold text-h24">Closed Entries</h1>
              <div className=" px-2 py-1 rounded-lg text-sm font-medium">
                {moment().format("YYYY-MM-DD")}
              </div>
            </span>
            <Table columns={columns} values={values} />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <SearchBar />
          <Dropdown options={dropDownNavSecurity} title="security" isHeading={true} />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-lexend text-p18 font-bold">Closed Entries</h1>
          <Link
            to={`/`}
            className="bg-slate-100 p-2 rounded-lg mx-1"
          >
            <LuClipboardCheck style={{ fontSize: "24px" }} />
          </Link>
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

export default closedEntries;
