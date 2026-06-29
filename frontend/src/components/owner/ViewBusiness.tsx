import { X, MapPin, Phone, Star, Briefcase } from "lucide-react";
import type { Business } from "../../features/business/businessTypes";

interface Props {
  isOpen: boolean;
  business: Business | null;
  onClose: () => void;
}

const ViewBusinessModal = ({ isOpen, business, onClose }: Props) => {
  if (!isOpen || !business) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full h-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 hover:bg-white/20 p-2 rounded-full transition cursor-pointer"
          >
            <X size={22} />
          </button>

          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-2xl bg-white/20 flex items-center justify-center text-3xl font-bold">
              {business.businessName.charAt(0)}
            </div>

            <div>
              <h2 className="text-3xl font-bold">{business.businessName}</h2>

              <div className="flex items-center gap-2 mt-2 text-indigo-100">
                <Briefcase size={16} />
                <span>{business.serviceType}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-2xl p-5 border">
              <div className="flex items-center gap-2 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="font-medium">Rating</span>
              </div>

              <h3 className="text-2xl font-bold mt-2">
                {business.rating || 0}
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border">
              <div className="flex items-center gap-2 text-green-600">
                <Phone size={18} />
                <span className="font-medium">Contact</span>
              </div>

              <h3 className="text-lg font-semibold mt-2">{business.phone}</h3>
            </div>

            <div className="bg-gray-50 rounded-2xl p-5 border">
              <div className="flex items-center gap-2 text-red-500">
                <MapPin size={18} />
                <span className="font-medium">Location</span>
              </div>

              <h3 className="text-lg font-semibold mt-2">{business.city}</h3>
            </div>
          </div>

          {/* Business Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">Business Details</h3>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm">Service Type</p>
                  <p className="font-medium">{business.serviceType}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Phone Number</p>
                  <p className="font-medium">{business.phone}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">State</p>
                  <p className="font-medium">{business.state}</p>
                </div>
              </div>
            </div>

            <div className="border rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                Address Information
              </h3>

              <div className="space-y-3">
                <div>
                  <p className="text-gray-500 text-sm">Address</p>

                  <p className="font-medium">{business.address}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">City</p>

                  <p className="font-medium">{business.city}</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">State</p>

                  <p className="font-medium">{business.state}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6 border rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4">About Business</h3>

            <p className="text-gray-600 leading-relaxed">
              {business.description || "No description available."}
            </p>
          </div>

          {/* Location Status */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                ✓
              </div>

              <div>
                <h4 className="font-semibold text-green-700">
                  Location Verified
                </h4>

                <p className="text-green-600 text-sm">
                  Business location has been successfully added and can be
                  discovered by nearby users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBusinessModal;
