const ServiceCategories = () => {
  const services = [
    "Plumber",
    "Electrician",
    "Carpenter",
    "Painter",
    "AC Repair",
    "Cleaning",
    "Mechanic",
    "RO Service",
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Popular Services</h2>

        <button className="text-indigo-600 font-medium cursor-pointer hover:underline">
          View All
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {services.map((service) => (
          <button
            key={service}
            className="rounded-full cursor-pointer border border-indigo-200 bg-indigo-50 px-5 py-3 font-medium text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
          >
            {service}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
