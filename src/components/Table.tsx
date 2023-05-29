type Props = {};

const Table = (props: Props) => {
  return (
    <div className="relative overflow-x-auto h-[72vh]">
      <table className="w-full text-sm text-left text-slate-500 ">
        <thead className="text-xs text-slate-700 uppercase border-b-2">
          <tr>
            <th scope="col" className="pr-6 py-3">
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
            <th scope="col" className="pl-6 py-3">
              Reason
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <th
              scope="row"
              className="pr-6 py-4 font-medium whitespace-nowrap"
            >
              28/05/2023
            </th>
            <td className="px-6 py-4 whitespace-nowrap">2021BCS-035</td>
            <td className="px-6 py-4 whitespace-nowrap">Kartikay Tiwari</td>
            <td className="px-6 py-4 whitespace-nowrap">BH1</td>
            <td className="px-6 py-4 whitespace-nowrap">340</td>
            <td className="px-6 py-4 whitespace-nowrap">09:00AM</td>
            <td className="px-6 py-4 whitespace-nowrap">06:00PM</td>
            <td className="pl-6 py-4 whitespace-nowrap">Going to market</td>
          </tr>          
        </tbody>
      </table>
    </div>
  );
};

export default Table;
