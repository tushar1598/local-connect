import { useEffect, useState } from "react";
import CreateBusinessModal from "./CreateBusiness";
import {
  // deleteBusiness,
  getMyBusinesses,
  toggleBusinessStatus,
} from "../../features/business/businessThunk";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import BusinessCard from "./BusinessCard";
import type { Business } from "../../features/business/businessTypes";
import EditBusinessModal from "./editBusiness";
import toast from "react-hot-toast";
import ViewBusinessModal from "./ViewBusiness";

const OwnerDashboard = () => {
  const { businesses, loading } = useAppSelector((state) => state.business);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null,
  );
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  // const [deletingId, setDeletingId] = useState<string | null>(null);

  const [statusLoadingId, setStatusLoadingId] = useState<string | null>(null);

  const averageRating =
    businesses.length > 0
      ? (
          businesses.reduce(
            (acc, business) => acc + (business.rating || 0),
            0,
          ) / businesses.length
        ).toFixed(1)
      : "0.0";

  const activeListings = businesses.filter(
    (business) => business.isActive,
  ).length;

  useEffect(() => {
    dispatch(getMyBusinesses());
  }, []);

  // const handleDelete = async (id: string) => {
  //   try {
  //     setDeletingId(id);
  //     await dispatch(deleteBusiness(id)).unwrap();
  //     toast.success("Deleted Successfully");
  //   } catch (error) {
  //     toast.error(error as string);
  //   } finally {
  //     setDeletingId(null);
  //   }
  // };

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
    <div className="max-w-7xl mx-auto p-6 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Owner Dashboard</h1>
          <p className="text-gray-500">Manage your businesses</p>
        </div>

        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-indigo-600 cursor-pointer text-white px-5 py-2 rounded-lg"
        >
          + Create Business
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Total Businesses</h3>
          <p className="text-3xl font-bold mt-2">{businesses.length}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Average Rating</h3>
          <p className="text-3xl font-bold mt-2">{averageRating}</p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-gray-500">Active Business</h3>
          <p className="text-3xl font-bold mt-2">{activeListings}</p>
        </div>
      </div>

      {/* Businesses */}
      <h2 className="text-2xl font-semibold mb-4">My Businesses</h2>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : businesses.length === 0 ? (
        <div className="flex justify-center items-center py-20">
          <div className="bg-red-50 border border-red-200 rounded-xl px-8 py-6 text-center">
            <h3 className="text-xl font-semibold text-red-600">
              No Businesses Found
            </h3>

            <p className="text-red-500 mt-2">
              You haven't created any business yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business) => (
            <BusinessCard
              key={business._id}
              business={business}
              onView={() => {
                setSelectedBusiness(business);
                setViewModalOpen(true);
              }}
              onEdit={() => {
                setSelectedBusiness(business);
                setEditModalOpen(true);
              }}
              // onDelete={() => handleDelete(business._id)}
              // deletingId={deletingId}
              statusLoadingId={statusLoadingId}
              onToggleStatus={() => handleToggleStatus(business._id)}
            />
          ))}
        </div>
      )}

      <CreateBusinessModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <EditBusinessModal
        isOpen={editModalOpen}
        business={selectedBusiness}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedBusiness(null);
        }}
      />

      <ViewBusinessModal
        isOpen={viewModalOpen}
        business={selectedBusiness}
        onClose={() => {
          setViewModalOpen(false);
          setSelectedBusiness(null);
        }}
      />
    </div>
  );
};

export default OwnerDashboard;
