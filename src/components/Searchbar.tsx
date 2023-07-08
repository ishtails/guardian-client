import { Fragment, useState } from "react";
import search from "../assets/icons/search.svg";
import axios from "axios";
import { useOutingStore } from "../store/store";
import { Transition } from "@headlessui/react";

type item = {
  hostel: string;
  mobile: number;
  name: string;
  room: number;
  username: string;
};

const Searchbar = (props: { isMobile: boolean }) => {
  const { filter, setFilter } = useOutingStore();

  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownItems, setDropdownItems] = useState<item[] | null>(null);

  const filterDropdown = async (e: any) => {
    console.log(e.target.value);
    e.preventDefault;
    setSearchTerm(e.target.value);
    const result = await axios.get("/search", { params: { key: searchTerm } });
    console.log(result.data);
    setDropdownItems(result.data);
  };

  console.log(dropdownItems);

  return (
    <div className="relative">
      <form
        className={`flex ${
          props.isMobile ? "bg-white" : "bg-slate-50"
        } border border-slate-300 text-slate-900 text-sm ${
          dropdownItems ? "rounded-t-lg" : "rounded-lg"
        }  hover:border-sky-500 px-3 w-auto`}
      >
        <input
          className={`focus:outline-none ${
            props.isMobile ? "w-32 h-8 bg-white" : "bg-slate-50"
          } py-2`}
          placeholder="Search"
          value={searchTerm}
          onChange={filterDropdown}
        />
        <img
          src={search}
          alt="Search"
          className="cursor-pointer mt-2 w-4 h-4"
        />
      </form>
      {/* <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={true}
      > */}
      {dropdownItems && (
        <div className="absolute w-full bg-white border border-gray-300 rounded-b-lg">
          {dropdownItems.map((item) => {
            return (
              <div className="w-full hover:bg-gray-100">
                <button
                  key={item.username}
                  onClick={() => {
                    setFilter({ ...filter, username: item.username });
                  }}
                  className="block px-4 py-2 text-[14px]"
                >
                  {item.name}
                </button>
              </div>
            );
          })}
        </div>
      )}
      {/* </Transition> */}
    </div>
  );
};

export default Searchbar;
