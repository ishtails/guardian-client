import axios from "axios";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

type TableColumn =
  | "Date"
  | "Roll No"
  | "Name"
  | "Hostel"
  | "Room"
  | "Out Time"
  | "In Time"
  | "Reason"
  | "Status";

type TableRow = Record<TableColumn, string>;

interface TableProps {
  columns: TableColumn[];
  values: TableRow[];
}

const Table: React.FC<TableProps> = ({ columns, values }) => {
  return (
    <div className="overflow-x-auto h-[72vh]">
      <table className="w-full text-sm text-left text-slate-500">
        <thead className="text-xs text-slate-700 uppercase border-b-2">
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-6 py-3">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {values.map((row, index) => (
            <tr key={index} className="border-b">
              {columns.map((column) => (
                <td
                  scope="row"
                  key={column}
                  className="px-6 py-4 whitespace-nowrap"
                >
                  {column === "Status" ? (
                    <div className="flex justify-center">
                      <button
                        className=""
                        onClick={async () => {
                          try {
                            await axios.get(
                              `/security/close-entry/${row[column]}`
                            );
                            window.location.reload();
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        <AiFillCheckCircle style={{ color: "#0ea5e9", fontSize: "1.6em" }}/>
                      </button>
                    </div>
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
