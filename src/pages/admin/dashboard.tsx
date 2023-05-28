import Dropdown from "../../components/Dropdown";
import Navbar from "../../components/Navbar";
import Table from "../../components/Table";

const adminDashboard = () => {
  return (
    <div className="bg-[#FCFFFF] h-screen mx-5 space-y-8">
      <Navbar />
      <div className="flex space-x-6">
        <div className="flex flex-col bg-white rounded-xl shadow-card-shadow w-[229px] space-y-4 p-5 items-center h-[700px]">
          <span className="font-lexend font-bold text-h24">Filters</span>
          <Dropdown title="Hostel" />
          <Dropdown title="Deadline" />
        </div>

        <div className="flex flex-col bg-white rounded-xl shadow-card-shadow w-full space-y-4 p-5 h-[700px]">
          <span className="flex items-center justify-between">
            <h1 className="font-lexend font-bold text-h24">Overview</h1>
            <Dropdown title="Today" />
          </span>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default adminDashboard;
