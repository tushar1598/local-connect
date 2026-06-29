import { Zap, Droplets, Paintbrush, Wind, Wrench, Car } from "lucide-react";

const categories = [
  {
    title: "Electrician",
    providers: 152,
    icon: Zap,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Plumber",
    providers: 98,
    icon: Droplets,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Painter",
    providers: 75,
    icon: Paintbrush,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Cleaning",
    providers: 131,
    icon: Wrench,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "AC Repair",
    providers: 82,
    icon: Wind,
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "Mechanic",
    providers: 57,
    icon: Car,
    color: "bg-orange-100 text-orange-600",
  },
];

const CategorySection = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Explore Services</h2>

          <p className="mt-1 text-gray-500">
            Choose a category to discover nearby businesses.
          </p>
        </div>

        <button className="font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.title}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} transition group-hover:scale-110`}
              >
                <Icon size={30} />
              </div>

              <h3 className="mt-5 font-semibold">{category.title}</h3>

              <p className="mt-2 text-sm text-gray-500">
                {category.providers} Providers
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategorySection;
