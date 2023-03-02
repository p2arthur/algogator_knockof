import { VscSearch } from "react-icons/vsc";

function SearchBar() {
  return (
    <div className="group hidden md:flex">
      <div className="bg-gray-800 text-white px-3 py-1 rounded-3xl flex gap-3 items-center">
        <div className="bg-slate-900 p-2 rounded-full">
          <VscSearch />
        </div>
        <div className="h-5 w-px bg-white " />
        <input
          className="opacity-70 w-1 md:w-16 focus:w-24 group-active:w-24 transition-all text-center bg-transparent outline-none align-baseline placeholder:opacity-0 md:placeholder:opacity-100 placeholder:focus:opacity-100"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
