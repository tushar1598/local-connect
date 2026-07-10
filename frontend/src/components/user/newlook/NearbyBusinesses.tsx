import NearbyBusinessCard from "./NearbyBusinessCard";

const businesses = [
  {
    _id: "1",
    businessName: "Raj Plumbing",
    serviceType: "Plumbing",
    city: "Jaipur",
    state: "Rajasthan",
    rating: 4.9,
    isVerified: true,
    isOpen: true,
  },
  {
    _id: "2",
    businessName: "Royal Electric",
    serviceType: "Electrical",
    city: "Jaipur",
    state: "Rajasthan",
    rating: 4.8,
    isVerified: true,
    isOpen: true,
  },
  {
    _id: "3",
    businessName: "Perfect Cleaning",
    serviceType: "Cleaning",
    city: "Jaipur",
    state: "Rajasthan",
    rating: 4.7,
    isVerified: false,
    isOpen: false,
  },
];

const NearbyBusinesses = () => {
  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Nearby Businesses</h2>

          <p className="mt-1 text-gray-500">
            Trusted professionals near your location
          </p>
        </div>

        <button className="font-medium text-indigo-600 hover:underline">
          View All
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <NearbyBusinessCard key={business._id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default NearbyBusinesses;
