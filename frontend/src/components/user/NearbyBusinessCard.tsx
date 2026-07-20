import { BadgeCheck, Clock3, MapPin, Phone, Star } from "lucide-react";

interface Props {
  business: any;
}

const NearbyBusinessCard = ({ business }: Props) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}

      <div className="relative h-52 overflow-hidden">
        <img
          src={
            // business.businessAvatar ??
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800"
          }
          alt={business.businessName}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Status */}

        <div className="absolute left-4 top-4 flex gap-2">
          {business.isActive && (
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
              Open Now
            </span>
          )}

          {business.isActive && (
            <span className="flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
              <BadgeCheck size={14} className="text-indigo-600" />
              Verified
            </span>
          )}
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">
          {business.businessName}
        </h2>

        <p className="mt-2 text-gray-500">
          Professional {business.serviceType} Services
        </p>

        {/* Rating */}

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">{business.rating}</span>
          </div>

          <div className="text-sm font-medium text-indigo-600">
            {business.distance ?? "1.4 km Away"}
          </div>
        </div>

        {/* Location */}

        <div className="mt-5 flex items-center gap-2 text-gray-500">
          <MapPin size={17} />

          <span>
            {business.city}, {business.state}
          </span>
        </div>

        {/* Timing */}

        <div className="mt-3 flex items-center gap-2 text-gray-500">
          <Clock3 size={17} />

          <span>Mon - Sat • 9:00 AM - 8:00 PM</span>
        </div>

        {/* Buttons */}

        <div className="mt-7 flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 font-medium transition hover:bg-gray-100">
            <Phone size={18} />
            Call
          </button>

          <button className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-medium text-white shadow-lg transition hover:scale-[1.02]">
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default NearbyBusinessCard;
