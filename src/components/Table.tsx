type Props = {};

const Table = (props: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-slate-500">
        <thead className="text-xs text-slate-700 uppercase bg-slate-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Roll No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Hostel
            </th>
            <th scope="col" className="px-6 py-3">
              Room
            </th>
            <th scope="col" className="px-6 py-3">
              Out Time
            </th>
            <th scope="col" className="px-6 py-3">
              In Time
            </th>
            <th scope="col" className="px-6 py-3">
              Reason
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap"
            >
              28/05/2023
            </th>
            <td className="px-6 py-4 whitespace-nowrap">2021BCS-035</td>
            <td className="px-6 py-4 whitespace-nowrap">Kartikay Tiwari</td>
            <td className="px-6 py-4 whitespace-nowrap">BH1</td>
            <td className="px-6 py-4 whitespace-nowrap">340</td>
            <td className="px-6 py-4 whitespace-nowrap">09:00AM</td>
            <td className="px-6 py-4 whitespace-nowrap">06:00PM</td>
            <td className="px-6 py-4 whitespace-nowrap">going to market</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
