// type Props = {};
import React from 'react';

type TableColumn = 'Date' | 'Roll No' | 'Name' | 'Hostel' | 'Room' | 'Out Time' | 'In Time' | 'Reason' | 'Status';

type TableRow = Record<TableColumn, string>;

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="relative overflow-x-auto h-[72vh]">
      <table className="w-full text-sm text-left text-slate-500 ">
        <thead className="text-xs text-slate-700 uppercase border-b-2">
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Table;
