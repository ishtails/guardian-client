import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import React from "react";
import useFetchOutings from "../../helpers/fetchOutingHook";
import { LuClipboardCheck } from "react-icons/lu";
import { useOutingStore } from "../../store/store";
import moment from "moment";
import SearchBar from "../../components/Searchbar";
import Pagination from "../../components/Pagination";

const securityDashboard: React.FC = () => {
  const { outing, isLoading, filter, setFilter } = useOutingStore();
  if (!filter?.isOpen == null) {
    useFetchOutings("/outings", { isOpen: true });
  }

  if (!filter?.isOpen == true) {
    useFetchOutings("/outings", { isOpen: true });
  }

  if (!filter?.isOpen == false) {
    useFetchOutings("/outings", { isOpen: false });
  }

  const columns: TableColumn[] = [
    "Roll No",
    "Name",
    "Hostel",
    "Room",
    "Out Time",
    "In Time",
    "Reason",
    `${filter?.isOpen ? "Late By" : "Close Entry"}`,
  ];
  const values: TableRow[] = [];

  if (!isLoading) {
    outing?.map((unit) => {
      const newObj = {
        Name: unit.name,
        "Roll No": unit.username,
        Hostel: unit.hostel,
        Room: unit.room,
        "Out Time": moment(unit.outTime, "DD-MM-YYYY HH:mm:ss").format(
          "DD-MM-YYYY HH:mm"
        ),
        "In Time": unit.inTime,
        "Late By": unit.lateBy,
        Reason: unit.reason,
        "Close Entry": unit.username,
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
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8">
        <nav>
          <Navbar role="security" />
        </nav>
        <div className="flex space-x-6">
          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5 h-[82vh]">
            <span className="flex items-center justify-between ">
              <h1 className="font-lexend font-bold text-h24 mx-4">
                {filter?.isOpen ? "Closed Entries" : "Open Entries"}
              </h1>
              <div className="font-lexend px-2 py-1 lg:mr-2 rounded-lg text-sm font-semibold">
                {moment().format("dddd: YYYY-MM-DD")}
              </div>
            </span>
            <Table columns={columns} values={values} />
            <Pagination />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <SearchBar />
          <Dropdown
            options={[
              { href: "/changepass", label: "Change Password" },
              { href: "/logout", label: "Sign Out" },
            ]}
            title="security"
            isHeading={true}
          />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-lexend text-p18 font-bold">
            {!filter?.isOpen ? "Open Entries" : "Closed Entries"}
          </h1>
          <label
            htmlFor="toggleOpen"
            className="bg-slate-100 p-2 rounded-lg mx-1 cursor-pointer "
          >
            <LuClipboardCheck style={{ fontSize: "24px" }} />
          </label>
          <input
            type="checkbox"
            id="toggleOpen"
            name="toggleOpen"
            className="hidden"
            checked={filter?.isOpen || false}
            onChange={(e) => {
              setFilter({ ...filter, isOpen: e.target.checked });
            }}
          />
        </div>

        <div className="flex flex-col shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
          <Table columns={columns} values={values} />
          <Pagination />
        </div>

        <hr />

        <img src={logo} className="w-[32px] self-center" />
      </div>
    </div>
  );
};

export default securityDashboard;
