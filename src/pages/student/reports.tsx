import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";
import { BiHomeAlt2 } from "react-icons/bi";
import useFetchProfile from "../../helpers/fetchUserHook";
import useFetchOutings from "../../helpers/fetchOutingHook";
import { useOutingStore, useUserStore } from "../../store/store";

type TableColumn = any;
type TableRow = any;

const reports = () => {
  useFetchProfile("/profile");
  useFetchOutings("/outings");

  const { user } = useUserStore();
  const { outing, isLoading, filter, setFilter } = useOutingStore();

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
        <Link to={"/student/home"}>
            <BiHomeAlt2 style={{ color: "#0C4A6E", fontSize: "24px" }} />
        </Link>
        <button className="font-bold text-p14 text-[#0C4A6E]">Sign Out</button>
      </nav>

      <hr />

      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="font-lexend text-p18 font-bold text-[#0C4A6E]">{user?.name}</h1>
          <p className="text-p14 font-medium text-[#0c4a6e7a]">{user?.username}</p>
        </div>
        <span className="flex space-x-4 items-center">
          <Dropdown options={[]} title="Today" isHeading={false} />
        </span>
      </div>

      <div className="shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
        <Table columns={columns} values={values} />
      </div>

      <hr />

      <img src={logo} className="w-[32px] self-center" />
    </div>
  );
};

export default reports;
