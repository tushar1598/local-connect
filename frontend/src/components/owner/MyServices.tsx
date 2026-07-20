import {
  Star,
  MapPin,
  CalendarDays,
  Pencil,
  Eye,
  Plus,
} from "lucide-react";
import { useEffect, useState } from "react";
import CreateBusinessModal from "./CreateBusiness";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {
  getMyBusinesses,
  toggleBusinessStatus,
} from "../../features/business/businessThunk";
import ViewBusinessModal from "./ViewBusiness";
import type { Business } from "../../features/business/businessTypes";
import EditBusinessModal from "./editBusiness";
import toast from "react-hot-toast";

const MyServices = () => {
  const dispatch = useAppDispatch();
  const { businesses } = useAppSelector((state) => state.business);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null,
  );
  const [statusLoadingId, setStatusLoadingId] = useState<string | null>(null);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getMyBusinesses());
  }, []);

  const handleToggleStatus = async (id: string) => {
    try {
      setStatusLoadingId(id);
      await dispatch(toggleBusinessStatus(id)).unwrap();
      toast.success("Status Updated Successfully");
    } catch (error) {
      toast.error(error as string);
    } finally {
      setStatusLoadingId(null);
    }
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">My Services</h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage all services from one place.
          </p>
        </div>

        <button
          className="flex items-center justify-center gap-2 rounded-xl cursor-pointer bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <Plus size={18} />
          Add New Service
        </button>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((service) => (
          <div
            key={service._id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600"
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">
                  {service.businessName}
                </h3>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    service.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {service.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              <p className="text-sm text-slate-500">{service.serviceType}</p>

              {/* Details */}

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} />
                  {service.city}
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  {service.rating} Rating
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <CalendarDays size={16} />
                  100 Bookings
                </div>
              </div>

              {/* Actions */}

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                {/* View */}
                <button
                  onClick={() => {
                    setSelectedBusiness(service);
                    setViewModalOpen(true);
                  }}
                  className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-xl text-blue-600 transition hover:bg-blue-50"
                >
                  <Eye size={18} />
                </button>

                {/* Edit */}
                <button
                  onClick={() => {
                    setSelectedBusiness(service);
                    setEditModalOpen(true);
                  }}
                  className="flex h-10 w-10 items-center justify-center cursor-pointer rounded-xl text-amber-600 transition hover:bg-amber-50"
                >
                  <Pencil size={18} />
                </button>

                {/* Toggle */}
                <button
                  onClick={() => handleToggleStatus(service._id)}
                  disabled={statusLoadingId === service._id}
                  className={`relative flex h-10 w-10 items-center cursor-pointer justify-center rounded-xl transition ${
                    statusLoadingId === service._id
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <div
                    className={`relative h-5 w-9 rounded-full transition ${
                      service.isActive ? "bg-green-500" : "bg-slate-300"
                    }`}
                  >
                    <div
                      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-all ${
                        service.isActive ? "left-4.5" : "left-0.5"
                      }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateBusinessModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <ViewBusinessModal
        isOpen={viewModalOpen}
        business={selectedBusiness}
        onClose={() => {
          setViewModalOpen(false);
          setSelectedBusiness(null);
        }}
      />

      <EditBusinessModal
        isOpen={editModalOpen}
        business={selectedBusiness}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedBusiness(null);
        }}
      />
    </section>
  );
};

export default MyServices;
