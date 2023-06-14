import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import filter from "./../assets/icons/filter.svg";
import Dropdown from "./Dropdown";

type Props = {};

const Filter = ({}: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${"flex items-center bg-transparent rounded-md text-primary font-lexend font-bold"}`}
        >
          <img src={filter} className="bg-slate-100 p-1.5 rounded-lg w-9" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0 md:left-0 bg-white z-10 mt-2 w-44 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          <Menu.Item as={Fragment}>
            {() => (
              <div className={`flex flex-col items-center p-5 space-y-4`}>
                <h2 className="font-lexend font-bold text-p20">Filters</h2>
                <Dropdown title="Hostel" isHeading={false} />
                <Dropdown title="Deadline" isHeading={false} />
                
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Filter;
