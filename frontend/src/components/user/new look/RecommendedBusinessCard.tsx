import {
  ArrowRight,
  Heart,
  MapPin,
  Star,
  BadgeCheck,
} from "lucide-react";

interface Props {
  business: {
    _id: string;
    businessName: string;
    serviceType: string;
    city: string;
    rating: number;
    image: string;
    isVerified: boolean;
  };
}

const RecommendedBusinessCard = ({ business }: Props) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}

      <div className="relative h-56 overflow-hidden">

        <img
          src={business.image}
          alt={business.businessName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Rating */}

        <div className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold shadow">
          <Star
            size={15}
            className="fill-yellow-400 text-yellow-400"
          />

          {business.rating}
        </div>

        {/* Wishlist */}

        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition hover:bg-red-50">
          <Heart
            size={18}
            className="text-gray-600 transition hover:text-red-500"
          />
        </button>
      </div>

      {/* CONTENT */}

      <div className="space-y-5 p-6">

        <div>

          <div className="flex items-center gap-2">

            <h2 className="text-xl font-bold text-gray-900">
              {business.businessName}
            </h2>

            {business.isVerified && (
              <BadgeCheck
                size={18}
                className="text-indigo-600"
              />
            )}

          </div>

          <p className="mt-2 text-gray-500">
            {business.serviceType}
          </p>

        </div>

        {/* Location */}

        <div className="flex items-center gap-2 text-sm text-gray-500">

          <MapPin size={16} />

          {business.city}

        </div>

        {/* Recommendation */}

        <div className="rounded-2xl bg-indigo-50 p-4">

          <p className="text-sm font-medium text-indigo-700">
            ⭐ Highly Recommended
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-600">
            One of the highest rated businesses near your location.
          </p>

        </div>

        {/* CTA */}

        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white transition-all hover:gap-3">

          View Details

          <ArrowRight size={18} />

        </button>

      </div>
    </div>
  );
};

export default RecommendedBusinessCard;