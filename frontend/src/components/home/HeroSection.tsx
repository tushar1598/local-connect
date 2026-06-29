import { ArrowRight, Search, ShieldCheck, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              <ShieldCheck size={18} />
              Trusted Local Service Marketplace
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
              Find Trusted
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Local Professionals
              </span>
              Near You
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover verified plumbers, electricians, carpenters, cleaners and
              hundreds of trusted professionals in your area within seconds.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex cursor-pointer items-center gap-2 rounded-2xl bg-indigo-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-indigo-700">
                Explore Services
                <ArrowRight size={18} />
              </button>

              <button className="rounded-2xl border border-gray-300 px-7 py-4 font-semibold transition hover:bg-gray-100 cursor-pointer">
                Become a Partner
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10">
              <div>
                <h2 className="text-3xl font-bold text-indigo-600">10K+</h2>

                <p className="text-gray-500">Verified Businesses</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-indigo-600">100K+</h2>

                <p className="text-gray-500">Happy Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-indigo-600">500+</h2>

                <p className="text-gray-500">Cities Covered</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <div className="rounded-[32px] bg-white p-8 shadow-2xl">
              {/* Fake Search */}
              <div className="flex items-center gap-3 rounded-2xl border px-4 py-4">
                <Search className="text-gray-400" />

                <input
                  disabled
                  placeholder="Search Plumber, Electrician..."
                  className="w-full bg-transparent outline-none text-gray-500"
                />
              </div>

              {/* Location */}
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-green-50 px-4 py-4">
                <MapPin className="text-green-600" />

                <div>
                  <p className="font-semibold text-green-700">
                    Current Location
                  </p>

                  <p className="text-sm text-green-600">
                    Detect nearby professionals instantly
                  </p>
                </div>
              </div>

              {/* Cards */}
              <div className="mt-8 space-y-4">
                {[
                  {
                    name: "Raj Plumbing Services",
                    service: "Plumber",
                    rating: "4.9",
                  },
                  {
                    name: "Amit Electric Works",
                    service: "Electrician",
                    rating: "4.8",
                  },
                  {
                    name: "Clean Home Experts",
                    service: "Cleaning",
                    rating: "4.7",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl border p-4 transition hover:shadow-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>

                      <p className="text-sm text-gray-500">{item.service}</p>
                    </div>

                    <div className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      ⭐ {item.rating}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -left-6 top-12 animate-float rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-sm text-gray-500">Nearby Businesses</p>

              <h3 className="text-2xl font-bold text-indigo-600">250+</h3>
            </div>

            <div className="absolute -right-6 bottom-10 animate-float-slow rounded-2xl bg-indigo-600 px-5 py-4 text-white shadow-xl">
              <p className="text-sm opacity-80">Average Rating</p>

              <h3 className="text-2xl font-bold">⭐ 4.9</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
