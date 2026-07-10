import {
  Search,
  Zap,
  Wrench,
  Paintbrush,
  Droplets,
  Wind,
  Car,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Electrician",
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Plumber",
    icon: Droplets,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Painter",
    icon: Paintbrush,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Cleaning",
    icon: Wrench,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "AC Repair",
    icon: Wind,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Mechanic",
    icon: Car,
    color: "bg-orange-100 text-orange-600",
  },
];

const SearchDiscovery = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
      {/* Search */}

      <div className="relative">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          size={22}
        />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search plumber, electrician, painter..."
          className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-14 pr-4 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        />
      </div>

      {/* Popular */}

      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Popular Categories
        </h3>

        <button className="text-sm font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      {/* Categories */}

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-lg"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${category.color} transition group-hover:scale-110`}
              >
                <Icon size={28} />
              </div>

              <h4 className="mt-4 text-sm font-semibold text-gray-800">
                {category.title}
              </h4>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SearchDiscovery;
