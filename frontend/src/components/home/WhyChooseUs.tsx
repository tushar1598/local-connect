import { BadgeCheck, Clock3, MapPinned, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Verified Businesses",
    description:
      "Every listed business goes through verification before becoming visible to customers.",
    icon: BadgeCheck,
    color: "bg-green-100 text-green-600",
  },

  {
    title: "Nearby Results",
    description:
      "Find professionals around your current location using smart location-based search.",
    icon: MapPinned,
    color: "bg-indigo-100 text-indigo-600",
  },

  {
    title: "Quick Response",
    description:
      "Contact businesses instantly without waiting for approvals or complicated booking flows.",
    icon: Clock3,
    color: "bg-yellow-100 text-yellow-600",
  },

  {
    title: "Trusted Platform",
    description:
      "Built to connect customers with reliable local professionals safely and transparently.",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Everything You Need
            <br />
            To Find Trusted Local Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
            We help customers discover verified businesses nearby while giving
            local service providers an easy way to grow their business.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl"
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-indigo-600 to-purple-600 px-10 py-12 text-white">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="text-3xl font-bold">
                Thousands of Customers Trust Us
              </h2>

              <p className="mt-3 max-w-2xl text-indigo-100">
                From plumbers to electricians, discover reliable professionals
                near you in just a few clicks.
              </p>
            </div>

            <button className="rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:scale-105 cursor-pointer">
              Explore Businesses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
