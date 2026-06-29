import { useAppSelector } from "../../app/hook";
import UserBusinessCard from "./UserBusinessCard";
import type { Business } from "../../features/business/businessTypes";

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
    <div>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Nearby Businesses</h2>

        <span className="text-gray-500">{nearbyBusinesses.length} Found</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {nearbyBusinesses.map((business: Business) => (
          <UserBusinessCard key={business._id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default NearbyBusinesses;
