import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import skygradient from "../../assets/icons/sky-gradient.svg";
import lightbulb from "../../assets/icons/lightbulb.svg";
import avatar from "../../assets/icons/avatar.svg";
import profile from "../../assets/icons/profile.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useOutingStore, useUserStore } from "../../store/store";
import useFetchProfile from "../../helpers/fetchUserHook";
import useFetchOutings from "../../helpers/fetchOutingHook";

type TableColumn = any;
type TableRow = any;

const studentDashboard = () => {
  useFetchProfile("/profile");
  useFetchOutings("/outings", {isOpen:false});

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

  const dropDownDate = [
    { href: "/Today", label: "Today" },
    { href: "/Yesterday", label: "Yesterday" },
    { href: "/Past-Week", label: "Past Week" },
    { href: "/Past-Month", label: "Past Month" },
  ];

  return (
    <div className="h-screen ">
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8 bg-[#FCFFFF]">
        <nav>
          <Navbar role="student" />
        </nav>

        <div className="flex space-x-6">
          <div className="flex flex-col relative lg:w-[500px]">
            <img src={skygradient} />

            <img
              src={avatar}
              className="absolute self-center top-[7%] lg:top-[9%] w-[50%]"
            />

            <div className="flex flex-col bg-white rounded-b-xl shadow-card-shadow space-y-4 pt-[25%] px-5 pb-4 items-center">
              <div className="flex flex-col items-center mt-2 xl:mt-0">
                <h2 className="text-h24 font-lexend font-bold">{user?.name}</h2>
                <h3 className="text-p14 font-medium text-slate-400">
                  {user?.username}
                </h3>
              </div>
              <div className="flex w-full justify-between py-1">
                <span className="flex items-center space-x-2">
                  <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                  <p>{user?.mobile}</p>
                </span>
                <span className="flex items-center space-x-2">
                  <BsFillHouseFill style={{ fontSize: "18px" }} />
                  <p>
                    {user?.hostel} / {user?.room}
                  </p>
                </span>
              </div>
              <hr className="h-px w-full bg-gray-200 border-0" />
              <Link
                to={user?.isOutside ? '/student/success' : '/student/reason'}
                className={`text-white text-p16 py-3 px-10 rounded-full  transition-all font-semibold shadow-lg ${user?.isOutside ? 'bg-amber-500 hover:bg-amber-400 lg:block shadow-gray-200' : 'lg:hidden bg-[#0EA5E9] hover:bg-sky-400 shadow-sky-200'}`}
              >
                {user?.isOutside ? 'Outing Details' : 'Request Exit'}
              </Link>
              <Link
                to={"/student/update"}
                className={`text-white text-p16 bg-[#0EA5E9]  py-3 px-10 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg shadow-sky-200 hidden lg:block ${user?.isOutside ? 'lg:hidden' : ''}`}
              >
                Update Info
              </Link>
            </div>

            <div className="flex justify-center mt-5 bg-amber-50 rounded-xl shadow-card-shadow px-5 py-4 space-x-4 items-center">
              <img src={lightbulb} className="h-[32px]" />
              <p className="text-amber-dark text-[12px] font-medium">
                Trying to go out of campus? Open this site on your mobile to
                submit an exit request!
              </p>
            </div>
          </div>

          <div className="overflow-auto mb-5 flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5">
            <span className="flex items-center justify-between">
              <h1 className="font-lexend font-bold text-h24 mx-4">Overview</h1>
              <Dropdown
                options={dropDownDate}
                title="Today"
                isHeading={false}
              />
            </span>
            <Table columns={columns} values={values} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col space-y-4 px-4 pb-3 relative">
        <nav className="flex flex-row pt-4 items-center justify-between">
          <Link to={"/student/update"}>
            <img src={profile} className="" />
          </Link>
          <Link to={"/logout"} className="font-bold text-p14 text-[#0C4A6E]">
            Sign Out
          </Link>
        </nav>

        <hr />

        <div className="h-[72vh] overflow-x-hidden flex flex-col items-center justify-center space-y-10 text-[#0C4A6E]">
          <div className="flex flex-col items-center w-screen space-y-4">
            <img src={avatar} className="w-[50%] max-w-[200px]" />

            <div className="flex flex-col items-center">
              <h2 className="text-h24 font-lexend font-bold">{user?.name}</h2>
              <h3 className="text-p14 font-medium text-[#0c4a6ea8]">
                {user?.username}
              </h3>
            </div>

            <div className="flex space-x-10 py-1">
              <span className="flex items-center space-x-2">
                <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                <p>{user?.mobile}</p>
              </span>
              <span className="flex items-center space-x-2">
                <BsFillHouseFill style={{ fontSize: "18px" }} />
                <p>
                  {user?.hostel} / {user?.room}
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <Link
              to={"/student/reason"}
              className="text-white text-p16 bg-[#0EA5E9]  py-4 px-16 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg shadow-sky-200 "
            >
              Request Exit
            </Link>

            <Link to={`/student/report`} className="underline text-p14">
              View Reports
            </Link>
          </div>
        </div>

        <div className="flex space-x-3 self-center -z-10">
          <img src={logo} className="w-[32px]" />
          <h1 className="flex flex-row font-lexend text-h28 text-primary">
            Guar <span className="font-lexend font-bold text-h28">dian</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default studentDashboard;
