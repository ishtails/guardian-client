import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import Filter from "../../components/Filter";
import React from "react";
import { useOutingStore } from "../../store/store";
import useFetchOutings from "../../helpers/fetchOutingHook";
import SearchBar from "../../components/Searchbar";
import DateRange from "../../components/DateRange";
import moment from "moment";

const dropDownNavAdmin = [
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];

const adminDashboard: React.FC = () => {
  const { outing, isLoading, filter, setFilter } = useOutingStore();

  if (filter?.isOpen == true) {
    useFetchOutings("/outings", { isOpen: true });
  } else{
    useFetchOutings("/outings", { isOpen: false });
  }

  const columns: TableColumn[] = [
    "Roll No",
    "Name",
    "Out Time",
    "In Time",
    "Reason",
    "Late By",
    "Hostel",
    "Room",
  ];
  const values: TableRow[] = [];

  if (!isLoading) {
    outing?.map((unit) => {
      const newObj = {
        Name: unit.name,
        "Roll No": unit.username,
        Hostel: unit.hostel,
        Room: unit.room,
        "Out Time": moment(unit.outTime, "YYYY-MM-DD HH:mm:ss").format('YYYY-MM-DD HH:mm'),
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

  const handleGenderFilter = (e: any) => {
    const { name, checked } = e.target;

    if (name === "boys" && checked) {
      setFilter({ ...filter, gender: "male" });
    } else if (name === "girls" && checked) {
      setFilter({ ...filter, gender: "female" });
    } else {
      setFilter({ ...filter, gender: null });
    }
  };

  return (
    <div className="bg-[#FCFFFF] h-screen">
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8">
        <nav>
          <Navbar role="admin" />
        </nav>
        <div className="flex space-x-6">
          <div className="flex flex-col bg-white rounded-xl shadow-card-shadow w-[230px] space-y-4 p-5 pb-6 h-full">
            <span className="self-center font-lexend font-bold text-h24">
              Filters
            </span>
            <hr />
            <form
              className="space-y-3 font-medium text-p14"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="flex space-x-2">
                <input
                  type="checkbox"
                  id="boys"
                  name="boys"
                  className="cursor-pointer"
                  checked={filter?.gender === "male"}
                  onChange={handleGenderFilter}
                />
                <label htmlFor="boys" className="cursor-pointer">
                  Boys
                </label>
              </span>
              <span className="flex space-x-2">
                <input
                  type="checkbox"
                  id="girls"
                  name="girls"
                  className="cursor-pointer"
                  checked={filter?.gender === "female"}
                  onChange={handleGenderFilter}
                />
                <label htmlFor="girls" className="cursor-pointer">
                  Girls{" "}
                </label>
              </span>
              <hr />
              <span className="flex space-x-2">
                <input
                  type="checkbox"
                  id="open"
                  name="open"
                  className="cursor-pointer"
                  checked={filter?.isOpen || false}
                  onChange={(e) => {
                    setFilter({ ...filter, isOpen: e.target.checked });
                  }}
                />
                <label htmlFor="open" className="cursor-pointer">
                  Open Entries
                </label>
              </span>
              <span className="flex space-x-2">
                <input
                  type="checkbox"
                  id="deadline"
                  name="deadline"
                  className="cursor-pointer"
                  checked={filter?.isLate || false}
                  onChange={(e) => {
                    e.target.checked
                      ? setFilter({ ...filter, isLate: e.target.checked })
                      : setFilter({ ...filter, isLate: null });
                  }}
                />
                <label htmlFor="deadline" className="cursor-pointer">
                  Late Entries
                </label>
              </span>
            </form>
          </div>

          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between">
              <h1 className="font-lexend font-bold text-h24 mx-4">Overview</h1>
              <DateRange />
            </span>
            <Table columns={columns} values={values} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3">
        <nav className="flex flex-row pt-4 items-center justify-between ">
          <SearchBar />
          <Dropdown options={dropDownNavAdmin} title="admin" isHeading={true} />
        </nav>

        <hr />

        <div className="flex flex-row justify-between items-center">
          <h1 className="font-lexend text-p18 font-bold">Overview</h1>
          <span className="flex space-x-4 items-center">
            <Filter />
            <DateRange />
          </span>
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

export default adminDashboard;
