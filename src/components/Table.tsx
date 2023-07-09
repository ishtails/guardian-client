import axios from "axios";
import React from "react";
import Close from "../assets/icons/close-entry.svg";

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
                  {column === "Close Entry" ? (
                    <button
                      className="w-full max-w-[5.2rem] flex justify-center"
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
                      <img src={Close} className="w-[1.6rem]" />
                    </button>
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
