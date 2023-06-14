import { Link } from "react-router-dom";
import profile from "../../assets/icons/profile.svg";
import logo from "../../assets/icons/logo.svg";
import Dropdown from "../../components/Dropdown";
import Table from "../../components/Table";
import { BiHomeAlt2 } from "react-icons/bi";

type Props = {};

const reports = ({}: Props) => {
  const columns: TableColumn[] = ["Date", "Out Time", "In Time", "Reason"];
  console.log(columns);
  const data: TableRow[] = [
    // Sample data rows
    {
      Date: "28/05/2023",
      "Roll No": "2021BCS012",
      Name: "Aneeka Mangal",
      Hostel: "GH",
      Room: "126",
      "Out Time": "10:00 AM",
      "In Time": "5:00 PM",
      Reason: "Going to Market for fruits",
      Status: "Approved",
    },
  ];

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
          <h1 className="font-lexend text-p18 font-bold text-[#0C4A6E]">Kartikay Tiwari</h1>
          <h2 className="text-p14 font-medium text-[#0C4A6E]">2021BCS035</h2>
        </div>
        <span className="flex space-x-4 items-center">
          <Dropdown title="Today" isHeading={false} />
        </span>
      </div>

      <div className="shadow-lg bg-white border border-slate-200 px-4 py-2 rounded-lg">
        <Table columns={columns} data={data} />
      </div>

      <hr />

      <img src={logo} className="w-[32px] self-center" />
    </div>
  );
};

export default reports;
