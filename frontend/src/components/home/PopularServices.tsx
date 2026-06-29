import {
  Wrench,
  Zap,
  Paintbrush,
  Hammer,
  Sparkles,
  Droplets,
  Refrigerator,
  Laptop,
} from "lucide-react";

const services = [
  {
    title: "Plumber",
    icon: Wrench,
    businesses: "520+ Professionals",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Electrician",
    icon: Zap,
    businesses: "480+ Professionals",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Painter",
    icon: Paintbrush,
    businesses: "310+ Professionals",
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Carpenter",
    icon: Hammer,
    businesses: "270+ Professionals",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Cleaning",
    icon: Sparkles,
    businesses: "420+ Professionals",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "RO Service",
    icon: Droplets,
    businesses: "180+ Professionals",
    color: "bg-cyan-100 text-cyan-600",
  },
  {
    title: "AC Repair",
    icon: Refrigerator,
    businesses: "340+ Professionals",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Laptop Repair",
    icon: Laptop,
    businesses: "210+ Professionals",
    color: "bg-purple-100 text-purple-600",
  },
];

const PopularServices = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Popular Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Explore Services
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Find trusted professionals across multiple service categories.
            Everything you need, right around your location.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl cursor-pointer"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${service.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {service.businesses}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-indigo-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>

                  <div className="h-2 w-2 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
