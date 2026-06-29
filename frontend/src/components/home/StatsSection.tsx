import { Building2, Users, MapPinned, Star } from "lucide-react";

const stats = [
  {
    title: "Verified Businesses",
    value: "10,000+",
    icon: Building2,
  },
  {
    title: "Happy Customers",
    value: "100,000+",
    icon: Users,
  },
  {
    title: "Cities Covered",
    value: "500+",
    icon: MapPinned,
  },
  {
    title: "Average Rating",
    value: "4.9★",
    icon: Star,
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center text-white">
          <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            Our Impact
          </span>

          <h2 className="mt-5 text-4xl font-bold">Trusted Across India</h2>

          <p className="mt-4 max-w-2xl mx-auto text-indigo-100 text-lg">
            Connecting customers with reliable local professionals every single
            day.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 text-center transition duration-300 hover:-translate-y-2 hover:bg-white/15"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-indigo-100 font-medium">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
