import { Fragment, useState } from "react";
import search from "../assets/icons/search.svg";
import axios from "axios";
import { useOutingStore } from "../store/store";
import { Transition, Menu } from "@headlessui/react";

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
    <Menu as="div" className="relative inline-block text-left">
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
          }`}
          placeholder="Search"
          value={searchTerm}
          onChange={filterDropdown}
        />
        <Menu.Button>
          <img
            src={search}
            alt="Search"
            className="cursor-pointer inset-x-44 inset-y-2"
          />
        </Menu.Button>
      </form>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {dropdownItems && (
          <Menu.Items className="absolute w-full bg-white border border-gray-300 rounded-b-lg">
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
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  );
};

export default Searchbar;
