import type { Business } from "../../features/business/businessTypes";

interface BusinessCardProps {
  business: Business;
  onEdit: () => void;
  // onDelete: () => void;
  onView: () => void;
  // deletingId: string | null;
  statusLoadingId: string | null;
  onToggleStatus: () => void;
}

const BusinessCard = ({
  business,
  onView,
  // onDelete,
  onEdit,
  statusLoadingId,
  onToggleStatus,
  // deletingId,
}: BusinessCardProps) => {
  return (
    <div
      className={`relative shadow rounded-xl p-5 transition-all duration-300 ${
        business.isActive
          ? "bg-white border border-gray-200"
          : "bg-gray-100 border border-gray-300 opacity-80"
      }`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold">{business.businessName}</h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            business.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {business.isActive ? "🟢 Active" : "🔴 Inactive"}
        </span>
      </div>

      <p className="text-gray-500 mt-2">
        Professional {business.serviceType} services
      </p>

      <div className="mt-3 space-y-1 text-sm">
        <p>
          📍 {business.city}, {business.state}
        </p>
        <p>📞 {business.phone}</p>
        <p>⭐ {business.rating}</p>
      </div>

      <div className="flex gap-2 mt-5">
        <button
          onClick={onView}
          className="flex-1 border cursor-pointer rounded-lg py-2"
        >
          View
        </button>

        <button
          onClick={onEdit}
          className="flex-1 bg-yellow-500 cursor-pointer text-white rounded-lg py-2"
        >
          Edit
        </button>

        <button
          onClick={onToggleStatus}
          disabled={statusLoadingId === business._id}
          className={`flex-1 text-white rounded-lg py-2 cursor-pointer disabled:opacity-50 ${
            business.isActive ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {statusLoadingId === business._id
            ? "Updating..."
            : business.isActive
              ? "Deactivate"
              : "Activate"}
        </button>
      </div>
    </div>
  );
};

export default BusinessCard;
