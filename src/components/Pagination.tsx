import { useState } from "react";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";
import { useOutingStore } from "../store/store";

type Props = {};

const Pagination = ({}: Props) => {
  const { outing, filter, setFilter } = useOutingStore();
  console.log(outing);

  const [page, setPage] = useState(1);
  return (
    <div className="mt-4 mb-2 flex items-center space-x-4 self-center">
      <button
        onClick={() => {
          if (page > 1) {
            setPage((prev) => prev - 1);
            setFilter({ ...filter, page: page - 1 });
          }
        }}
      >
        <GoTriangleLeft style={{ fontSize: "1.5rem", color: "#0EA5E9" }} />
      </button>
      <p className="font-lexend text-sky-500 font-semibold">{page}</p>
      <button
        onClick={() => {
          if (outing && outing?.length > 0) {
            setPage((prev) => prev + 1);
            setFilter({ ...filter, page: page + 1 });
          }
        }}
      >
        <GoTriangleRight style={{ fontSize: "1.5rem", color: "#0EA5E9" }} />
      </button>
    </div>
  );
};

export default Pagination;
