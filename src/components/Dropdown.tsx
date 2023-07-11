import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import dropdown from "../assets/icons/dropdown.svg";
import dropdown_blue from "../assets/icons/dropdown_blue.svg";
import { Link } from "react-router-dom";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = { title: string; isHeading: boolean; options: any };

const Dropdown = ({ title, isHeading, options }: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${
            isHeading
              ? "inline-flex items-center gap-x-1.5 bg-transparent px-3 py-1 rounded-md text-primary font-lexend font-bold"
              : "inline-flex w-32 md:w-44 justify-between gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
          }`}
        >
          {title}
          <img
            src={isHeading ? dropdown_blue : dropdown}
            className="w-[12px] 
                -mr-1 h-5"
          />
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
          className={`absolute ${
            isHeading ? "right-1 bg-[#FCFFFF] md:top-7 top-6" : "right-0 md:left-0 bg-white"
          } z-10 mt-3 w-44 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        >
          {options.map((option: any) => (
            <Menu.Item key={option.href} as={Fragment}>
              {({ active }) => (
                <Link
                  to={option.href}
                  className={classNames(
                    active ? "bg-slate-100 text-slate-900" : "text-slate-700",
                    "block w-full px-4 py-2 text-left text-sm"
                  )}
                >
                  {option.label}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
