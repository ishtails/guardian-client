import Navbar from "../../components/Navbar";
import Table from "../../components/Table";
import logo from "../../assets/icons/logo.svg";
import skygradient from "../../assets/icons/sky-gradient.svg";
import lightbulb from "../../assets/icons/lightbulb.svg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BsFillHouseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useOutingStore, useUserStore } from "../../store/store";
import useFetchProfile from "../../helpers/fetchUserHook";
import useFetchOutings from "../../helpers/fetchOutingHook";
import AvatarModal from "../../components/AvatarModal";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { boysAvatars, girlsAvatars } from "../../helpers/constants";
import DateRange from "../../components/DateRange";
import Dropdown from "../../components/Dropdown";

const dropDownMobile = [
  { href: "/changepass", label: "Change Password" },
  { href: "/logout", label: "Sign Out" },
];

const studentDashboard: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAvatarSubmit = async (avatar: Avatar) => {
    try {
      await toast.promise(
        axios.patch("/update-profile", {
          profilePic: avatar.url,
        }),
        {
          loading: "Updating...",
          success: "Successful",
          error: (error) => error.response?.data || "Server Error",
        }
      );

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const { user } = useUserStore();
  const { outing, isLoading } = useOutingStore();

  useFetchProfile("/profile");
  useFetchOutings("/outings", { isOpen: false });

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
    <div className="h-screen">
      <AvatarModal
        isOpen={isModalOpen}
        onClose={closeModal}
        avatars={user?.hostel === "GH" ? girlsAvatars : boysAvatars}
        onSubmit={handleAvatarSubmit}
      />
      {/* Desktop */}
      <div className="hidden md:flex flex-col px-5 space-y-8 bg-[#FCFFFF]">
        <nav>
          <Navbar role="student" />
        </nav>

        <div className="flex space-x-6">
          <div className="flex flex-col relative lg:w-[500px]">
            <img src={skygradient} />

            <div className=" rounded-full absolute self-center top-[7%] lg:top-[9%] w-[50%]">
              <img
                title="Change avatar"
                onClick={openModal}
                src={user?.profilePic}
                className="border-[0.5rem] border-slate-100 rounded-full transition w-[100%] cursor-pointer hover:brightness-90"
              />
            </div>

            <div className="flex flex-col bg-white rounded-b-xl shadow-card-shadow space-y-4 pt-[25%] px-5 pb-4 items-center">
              <div className="flex flex-col items-center mt-2 xl:mt-0">
                <h2 className="text-h24 font-lexend font-bold">
                  {user?.name || user?.username}
                </h2>
                <h3 className="text-p14 font-medium text-slate-400">
                  {user?.name ? user?.username : user?.email}
                </h3>
              </div>
              <div className="flex w-[95%] justify-between py-1">
                <span className="flex items-center space-x-2">
                  <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                  <p>{user?.mobile || "NA"}</p>
                </span>
                <span className="flex items-center space-x-2">
                  <BsFillHouseFill style={{ fontSize: "18px" }} />
                  <p>{user?.room ? `${user?.hostel} / ${user?.room}` : "NA"}</p>
                </span>
              </div>

              <hr className="h-px w-full bg-gray-200 border-0" />

              {user?.isOutside ? (
                <Link
                  to="/student/success"
                  className="text-white text-p16 py-3 px-10 rounded-full transition-all font-semibold shadow-lg bg-amber-500 hover:bg-amber-400 lg:block shadow-gray-200"
                >
                  Outing Details
                </Link>
              ) : (
                <Link
                  to="/student/reason"
                  className="text-white text-p16 py-3 px-10 rounded-full  transition-all font-semibold shadow-lg lg:hidden bg-[#0EA5E9] hover:bg-sky-400 shadow-sky-200"
                >
                  Request Exit
                </Link>
              )}
              {/* </Link> */}
              <Link
                to={"/student/update"}
                className={`text-white text-p16 bg-[#0EA5E9]  py-3 px-10 rounded-full hover:bg-sky-400 transition-all font-semibold shadow-lg shadow-sky-200 hidden lg:block ${
                  user?.isOutside ? "lg:hidden" : ""
                }`}
              >
                Update Info
              </Link>
            </div>

            <div className="flex justify-center mt-5 bg-amber-50 rounded-xl shadow-card-shadow px-5 py-4 space-x-4 items-center">
              <img src={lightbulb} className="h-[32px]" />
              <p className="hidden lg:block text-amber-dark text-[12px] font-medium">
                {user?.isOutside
                  ? "Back to campus? Ask the gate security to close your entry!"
                  : "Trying to go out of campus? Open this site on your mobile to submit an exit request!"}
              </p>
              <p className="lg:hidden text-amber-dark text-[12px] font-medium">
                {user?.isOutside
                  ? "Back to campus? Ask the gate security to close your entry!"
                  : "Trying to go out of campus? Tap the Request Exit button to open an entry!"}
              </p>
            </div>
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
      <div className="md:hidden flex flex-col h-screen justify-between">
        <div>
          <span className="flex px-4 pb-2 flex-row pt-4 items-center justify-between">
            <span className="flex space-x-3 items-center">
              <Link to={"/student/update"} title="Edit Profile">
                <FiEdit style={{ fontSize: "1.2em", color: "#0EA5E9" }} />
              </Link>
            </span>

            <Dropdown
              options={dropDownMobile}
              title="student"
              isHeading={true}
            />
          </span>
          <hr />
        </div>

        <div className="flex flex-col items-center mx-4 py-4 justify-center text-[#0C4A6E]">
          <div className="flex flex-col items-center w-screen">
            <img
              src={user?.profilePic}
              onClick={openModal}
              title="Change Avatar"
              className="border-[0.5rem] border-slate-100 rounded-full transition w-[50%] max-w-[200px] cursor-pointer hover:brightness-90"
            />

            <div className="mt-4 flex flex-col items-center">
              <h2 className="text-h24 font-lexend font-bold">
                {user?.name || user?.username}
              </h2>
              <h3 className="text-p14 font-medium text-[#0c4a6ea8]">
                {user?.name ? user?.username : user?.email}
              </h3>
            </div>

            <div className="flex space-x-10 py-1 mt-2">
              <span className="flex items-center space-x-2 p14">
                <BsFillTelephoneFill style={{ fontSize: "18px" }} />
                <p>{user?.mobile || "NA"}</p>
              </span>
              <span className="flex items-center space-x-2">
                <BsFillHouseFill style={{ fontSize: "18px" }} />
                <p>{user?.room ? `${user?.hostel} / ${user?.room}` : "NA"}</p>
              </span>
            </div>
            <div className="flex flex-col items-center space-y-2 mt-6">
              <Link
                to={user?.isOutside ? "/student/success" : "/student/reason"}
                className={`text-white text-p16 py-3 px-10 rounded-full  transition-all font-semibold shadow-lg ${
                  user?.isOutside
                    ? "bg-amber-500 hover:bg-amber-400 lg:block shadow-gray-200"
                    : "lg:hidden bg-[#0EA5E9] hover:bg-sky-400 shadow-sky-200"
                }`}
              >
                {user?.isOutside ? "Outing Details" : "Request Exit"}
              </Link>

              <Link to={`/student/report`} className="underline text-p14">
                View Reports
              </Link>
            </div>
          </div>
          <div
            className={`flex justify-center bg-amber-50 rounded-xl shadow-card-shadow px-5 py-4 mt-10 space-x-4 items-center w-fit self-center ${
              user?.isOutside ? "" : "hidden"
            }`}
          >
            <img src={lightbulb} className="h-[32px]" />
            <p className="text-amber-dark text-[12px] font-medium">
              Back to campus? Ask the gate security to close your entry!
            </p>
          </div>
        </div>

        <footer className="mb-4 flex flex-col space-y-4 justify-center items-center">
          <div className="flex space-x-3 self-center">
            <img src={logo} className="w-[32px]" />
            <h1 className="flex flex-row font-lexend text-h28 text-primary">
              Guar <span className="font-lexend font-bold text-h28">dian</span>
            </h1>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default studentDashboard;
