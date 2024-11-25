import { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import { useOutingStore } from "../store/store";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debounced, setDebounced] = useState(searchTerm);
  const [suggestions, setSuggestions] = useState<searchObj[]>([]);
  const searchInputRef = useRef<HTMLUListElement>(null);
  const { filter, setFilter } = useOutingStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(debounced);
    }, 500);

    return () => clearTimeout(timer);
  }, [debounced]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setDebounced("");
        setSuggestions([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Fetch Data
  useEffect(() => {
    if (searchTerm) {
      axios
        .get("/search", {
          params: {
            key: searchTerm,
          },
        })
        .then((response) => setSuggestions(response.data));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div className="relative">
      <label
        htmlFor="search"
        className="flex items-center rounded-lg px-1 border border-gray-300  focus:ring-blue-500"
      >
        <input
          id="search"
          name="search"
          type="text"
          placeholder={filter?.username || "Search..."}
          value={debounced}
          className="px-4 py-2 focus:outline-none max-w-[12rem]"
          onChange={(e) => setDebounced(e.target.value)}
          autoComplete="off"
        />
        <button
          onClick={() => {
            setFilter({ ...filter, username: null });
          }}
          className={`rounded-full px-2 py-2 ${
            filter?.username ? "" : "hidden"
          }`}
        >
          <MdOutlineCancel style={{ color: "#676767", fontSize: "1.2em" }} />
        </button>
        <button
          onClick={() => {
            setFilter({ ...filter, username: null });
          }}
          className={`rounded-full px-2 py-2 ${
            filter?.username ? "hidden" : ""
          }`}
        >
          <FiSearch style={{ color: "#676767", fontSize: "1.2em" }} />
        </button>
      </label>
      <Transition
        show={suggestions.length > 0}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(transitionProps) => (
          <ul
            ref={searchInputRef}
            className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-card-shadow border"
            {...transitionProps}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.username}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setFilter({ ...filter, username: suggestion.username });
                }}
              >
                <div className="flex flex-col text-p14">
                  <span className="text-p16 text-slate-800">
                    {suggestion.name}
                  </span>
                  <span className="text-slate-400">{suggestion.username}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Transition>
    </div>
  );
};

export default SearchBar;
