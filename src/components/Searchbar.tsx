import search from "../assets/icons/search.svg";

const Searchbar = () => {
  return (
    <form className="flex bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg hover:border-sky-500 px-3 w-auto">
      <input className="focus:outline-none bg-slate-50" placeholder="Enter Roll Number"/>
      <img src={search} alt="Search" className="cursor-pointer inset-x-44 inset-y-2" />
    </form>
  );
};

export default Searchbar;
