import { ArrowRight, MapPin, Phone, Star, BadgeCheck } from "lucide-react";

const businesses = [
  {
    id: 1,
    name: "Raj Plumbing Services",
    service: "Plumber",
    city: "Jaipur",
    rating: 4.9,
    reviews: 214,
  },
  {
    id: 2,
    name: "Sharma Electric Works",
    service: "Electrician",
    city: "Jaipur",
    rating: 4.8,
    reviews: 186,
  },
  {
    id: 3,
    name: "Perfect Home Cleaning",
    service: "Cleaning",
    city: "Jaipur",
    rating: 4.9,
    reviews: 321,
  },
  {
    id: 4,
    name: "Royal AC Repair",
    service: "AC Repair",
    city: "Jaipur",
    rating: 4.7,
    reviews: 143,
  },
];

const FeaturedBusinesses = () => {
  return (
    <section id="businesses" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Featured Businesses
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Trusted Professionals Near You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Explore some of our top-rated local businesses trusted by thousands
            of customers.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {businesses.map((business) => (
            <div
              key={business.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-48 bg-gradient-to-br from-indigo-500 to-purple-600">
                <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-600">
                  Verified
                </div>

                <div className="flex h-full items-center justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-4xl font-bold text-indigo-600">
                    {business.name.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {business.name}
                  </h3>

                  <BadgeCheck size={18} className="text-blue-500" />
                </div>

                <p className="mt-2 text-gray-500">{business.service}</p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} />
                    {business.city}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    Contact Available
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="font-semibold">{business.rating}</span>

                      <span className="text-sm text-gray-500">
                        ({business.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
                  View Details
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button className="rounded-2xl border border-indigo-600 px-8 py-4 font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white">
            View All Businesses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
