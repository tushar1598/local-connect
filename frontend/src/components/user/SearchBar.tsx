import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-4">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search plumber, electrician, carpenter..."
          className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>
    </div>
  );
};

export default SearchBar;
