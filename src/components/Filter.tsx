import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import filterIcon from "./../assets/icons/filter.svg";
import { useOutingStore } from "../store/store";

const Filter = () => {
  const { filter, setFilter } = useOutingStore();

  const handleGenderFilter = (e: any) => {
    const { name, checked } = e.target;

    if (name === "boys" && checked) {
      setFilter({ ...filter, gender: "male" });
    } else if (name === "girls" && checked) {
      setFilter({ ...filter, gender: "female" });
    } else {
      setFilter({ ...filter, gender: null });
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`${"flex items-center bg-transparent rounded-md text-primary font-lexend font-bold"}`}
        >
          <img src={filterIcon} className="bg-slate-100 p-1.5 rounded-lg w-9" />
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
              <div
                className={`flex flex-col p-5 space-y-2`}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="font-lexend font-bold text-p16 self-center">
                  Filters
                </h2>
                <hr />

                <form
                  className="space-y-3 font-medium text-p14"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="flex space-x-2">
                    <input
                      type="checkbox"
                      id="boys"
                      name="boys"
                      className="cursor-pointer"
                      checked={filter?.gender === "male"}
                      onChange={handleGenderFilter}
                    />
                    <label htmlFor="boys" className="cursor-pointer">
                      Boys
                    </label>
                  </span>
                  <span className="flex space-x-2">
                    <input
                      type="checkbox"
                      id="girls"
                      name="girls"
                      className="cursor-pointer"
                      checked={filter?.gender === "female"}
                      onChange={handleGenderFilter}
                    />
                    <label htmlFor="girls" className="cursor-pointer">
                      Girls{" "}
                    </label>
                  </span>
                  <hr />
                  <span className="flex space-x-2">
                    <input
                      type="checkbox"
                      id="open"
                      name="open"
                      className="cursor-pointer"
                      checked={filter?.isOpen || false}
                      onChange={(e) => {
                        setFilter({ ...filter, isOpen: e.target.checked });
                      }}
                    />
                    <label htmlFor="open" className="cursor-pointer">
                      Open Entries
                    </label>
                  </span>
                  <span className="flex space-x-2">
                    <input
                      type="checkbox"
                      id="deadline"
                      name="deadline"
                      className="cursor-pointer"
                      checked={filter?.isLate || false}
                      onChange={(e) => {
                        e.target.checked
                          ? setFilter({ ...filter, isLate: e.target.checked })
                          : setFilter({ ...filter, isLate: null });
                      }}
                    />
                    <label htmlFor="deadline" className="cursor-pointer">
                      Late Entries
                    </label>
                  </span>
                </form>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Filter;
