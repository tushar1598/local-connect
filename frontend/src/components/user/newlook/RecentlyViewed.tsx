import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Star,
} from "lucide-react";

const recentlyViewed = [
  {
    id: "1",
    name: "Raj Plumbing",
    category: "Plumbing Services",
    city: "Jaipur",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600",
  },
  {
    id: "2",
    name: "Royal Electric",
    category: "Electrical Services",
    city: "Jaipur",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600",
  },
  {
    id: "3",
    name: "Perfect Cleaning",
    category: "Home Cleaning",
    city: "Jaipur",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600",
  },
];

const RecentlyViewed = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            🕒 Recently Viewed
          </h2>

          <p className="mt-1 text-gray-500">
            Continue where you left off.
          </p>
        </div>

        <button className="font-medium text-indigo-600 hover:underline">
          View History
        </button>
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        {recentlyViewed.map((business, index) => (
          <div
            key={business.id}
            className={`group flex items-center justify-between p-5 transition hover:bg-gray-50 ${
              index !== recentlyViewed.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            {/* Left */}

            <div className="flex items-center gap-5">
              <img
                src={business.image}
                alt={business.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {business.name}
                </h3>

                <p className="mt-1 text-gray-500">
                  {business.category}
                </p>

                <div className="mt-3 flex items-center gap-5 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin size={15} />

                    {business.city}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    {business.rating}
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock3 size={15} />

                    Viewed Today
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}

            <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 font-medium transition hover:border-indigo-600 hover:text-indigo-600">
              View Again

              <ArrowUpRight
                size={18}
                className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyViewed;