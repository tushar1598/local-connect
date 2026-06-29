import { MapPin, Phone, Star } from "lucide-react";

interface Props {
  business: any;
}

const UserBusinessCard = ({ business }: Props) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border overflow-hidden">
      {/* Top */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-5 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{business.businessName}</h3>

            <p className="text-indigo-100 mt-1">{business.serviceType}</p>
          </div>

          <span className="bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star size={14} fill="currentColor" />
            {business.rating}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          <span>
            {business.city}, {business.state}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={18} />
          <span>{business.phone}</span>
        </div>

        <div className="inline-flex bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          📍 {business.distance} km away
        </div>

        <div className="flex gap-3 pt-4">
          <button className="flex-1 border rounded-xl py-2 hover:bg-gray-50 cursor-pointer">
            View
          </button>

          <button className="flex-1 bg-green-600 text-white rounded-xl py-2 hover:bg-green-700 cursor-pointer">
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserBusinessCard;
