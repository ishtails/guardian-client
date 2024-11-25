import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Table from "../../components/Table";
import { BiHomeAlt2 } from "react-icons/bi";
import useFetchProfile from "../../helpers/fetchUserHook";
import useFetchOutings from "../../helpers/fetchOutingHook";
import { useOutingStore, useUserStore } from "../../store/store";
import DateRange from "../../components/DateRange";
import Pagination from "../../components/Pagination";

const reports = () => {
  useFetchProfile("/profile");
  useFetchOutings("/outings", { isOpen: false });

  const { user } = useUserStore();
  const { outing, isLoading } = useOutingStore();

  const columns: TableColumn[] = ["Out Time", "In Time", "Late By", "Reason"];
  const values: TableRow[] = [];

  if (!isLoading) {
    outing?.map((unit) => {
      const newObj = {
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
    <div className="flex flex-col space-y-4 px-4 pb-3 relative">
      <nav className="flex flex-row pt-4 items-center justify-between ">
        <Link to={"/"}>
          <BiHomeAlt2 style={{ color: "#0C4A6E", fontSize: "24px" }} />
        </Link>
        <Link to={"/logout"} className="font-bold text-p14 text-[#0C4A6E]">
            Sign Out
          </Link>
      </nav>

      <hr />

      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-lexend text-p18 font-bold text-[#0C4A6E]">
            {user?.name}
          </h1>
          <p className="text-p14 font-medium text-[#0c4a6e7a]">
            {user?.username}
          </p>
        </div>
        <span className="flex space-x-4 items-center">
          <DateRange />
        </span>
      </div>

      <div className="shadow-lg flex flex-col bg-white border border-slate-200 px-4 py-2 rounded-lg">
        <Table columns={columns} values={values} />
        <Pagination />
      </div>

      <hr />

      <img src={logo} className="w-[32px] self-center" />
    </div>
  );
};

export default reports;
