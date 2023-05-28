import search from "../assets/icons/search.svg";

const Searchbar = (props: { isMobile: boolean }) => {
  return (
    <form className={`flex ${props.isMobile ? "bg-white" : "bg-slate-50"} border border-slate-300 text-slate-900 text-sm rounded-lg hover:border-sky-500 px-3 w-auto`}>
      <input
        className={`focus:outline-none ${props.isMobile ? "w-32 h-8 bg-white" : "bg-slate-50"}`}
        placeholder="Search"
      />
      <img
        src={search}
        alt="Search"
        className="cursor-pointer inset-x-44 inset-y-2"
      />
    </form>
  );
};

export default Searchbar;
