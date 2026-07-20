
import { useAppSelector } from "../../app/hook";
import type { Business } from "../../features/business/businessTypes";
import NearbyBusinessCard from "./NearbyBusinessCard";

const NearbyBusinesses = () => {
  const { nearbyBusinesses, loading } = useAppSelector(
    (state) => state.business,
  );

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
      </div>
    );
  }

  if (!loading && nearbyBusinesses.length === 0) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">
          No Nearby Businesses Found
        </h2>

        <p className="mt-2 text-red-500">
          Try changing your location or search another service.
        </p>
      </div>
    );
  }

  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Nearby Businesses</h2>

          <p className="mt-1 text-gray-500">
            Trusted professionals near your location
          </p>
        </div>

        <div className="flex items-center gap-5">
          <span className="text-sm text-gray-500">
            {nearbyBusinesses.length} Found
          </span>

          <button className="font-medium text-indigo-600 transition hover:underline">
            View All
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {nearbyBusinesses.map((business: Business) => (
          <NearbyBusinessCard key={business._id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default NearbyBusinesses;
