import RecommendedBusinessCard from "./RecommendedBusinessCard";

const recommendedBusinesses = [
  {
    _id: "1",
    businessName: "Raj Plumbing",
    serviceType: "Plumbing Services",
    city: "Jaipur",
    rating: 4.9,
    isVerified: true,
    reason: "Highly rated by customers near your location.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
  },
  {
    _id: "2",
    businessName: "Royal Electric",
    serviceType: "Electrical Services",
    city: "Jaipur",
    rating: 4.8,
    isVerified: true,
    reason: "Trending electrical service this week.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
  },
  {
    _id: "3",
    businessName: "Perfect Cleaning",
    serviceType: "Home Cleaning",
    city: "Jaipur",
    rating: 4.7,
    isVerified: false,
    reason: "Frequently booked by users nearby.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
  },
];

const RecommendedBusinesses = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">⭐ Recommended For You</h2>

          <p className="mt-1 text-gray-500">
            Businesses picked based on ratings and popularity.
          </p>
        </div>

        <button className="font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-2">
        {recommendedBusinesses.map((business) => (
          <RecommendedBusinessCard key={business._id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedBusinesses;
