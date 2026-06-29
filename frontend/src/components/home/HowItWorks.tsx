import { MapPinned, Search, PhoneCall } from "lucide-react";

const steps = [
  {
    icon: MapPinned,
    title: "Share Your Location",
    description:
      "Allow location access so we can find verified professionals around you instantly.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Search,
    title: "Discover Nearby Services",
    description:
      "Browse trusted plumbers, electricians, painters and many more near your location.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: PhoneCall,
    title: "Connect Instantly",
    description:
      "Call or contact the business directly without any middleman or hidden charges.",
    color: "bg-yellow-100 text-yellow-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Finding trusted local professionals takes less than a minute.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Step Number */}
                <div className="absolute right-6 top-6 text-5xl font-bold text-gray-100">
                  0{index + 1}
                </div>

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.color}`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
