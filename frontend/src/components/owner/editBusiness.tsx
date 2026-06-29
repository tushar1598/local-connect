import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { updateBusiness } from "../../features/business/businessThunk";
import type { Business } from "../../features/business/businessTypes";

interface Props {
  isOpen: boolean;
  business: Business | null;
  onClose: () => void;
}

const EditBusinessModal = ({ isOpen, business, onClose }: Props) => {
  const [form, setForm] = useState({
    businessName: "",
    serviceType: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    description: "",
  });

  const dispatch = useAppDispatch();
  const { loading } = useAppSelector((state) => state.business);

  const [location, setLocation] = useState<{
    type: "Point";
    coordinates: number[];
  } | null>(null);

  useEffect(() => {
    if (!business) return;

    setForm({
      businessName: business.businessName,
      serviceType: business.serviceType,
      address: business.address,
      city: business.city,
      state: business.state,
      phone: business.phone,
      description: business.description,
    });

    setLocation(business.location);
  }, [business]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      return toast.error("Geolocation not supported");
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude],
        });

        toast.success("Location Updated");
      },

      () => {
        toast.error("Unable to fetch location");
      },
    );
  };

  const resetForm = () => {
    setForm({
      businessName: "",
      serviceType: "",
      address: "",
      city: "",
      state: "",
      phone: "",
      description: "",
    });

    setLocation(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!business) {
      return toast.error("Business not found");
    }

    if (!location) {
      return toast.error("Please set business location");
    }

    try {
      await dispatch(
        updateBusiness({
          id: business._id,
          data: {
            businessName: form.businessName,
            serviceType: form.serviceType,
            address: form.address,
            city: form.city,
            state: form.state,
            phone: form.phone,
            description: form.description,
            location,
          },
        }),
      ).unwrap();

      toast.success("Business Updated Successfully");

      handleClose();
    } catch (error) {
      toast.error(error as string);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold">Edit Your Business</h2>

            <p className="text-sm text-gray-500 mt-1">
              Update your business information.
            </p>
          </div>

          <button onClick={handleClose} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid md:grid-cols-2 gap-5">
            {/* Business Name */}
            <div>
              <label className="block mb-2 font-medium">Business Name</label>

              <input
                name="businessName"
                value={form.businessName}
                type="text"
                placeholder="Tushar Plumbing Services"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block mb-2 font-medium">Service Type</label>

              <input
                name="serviceType"
                value={form.serviceType}
                type="text"
                placeholder="Plumber"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Address</label>

              <input
                name="address"
                value={form.address}
                type="text"
                placeholder="Vaishali Nagar, Jaipur"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* City */}
            <div>
              <label className="block mb-2 font-medium">City</label>

              <input
                name="city"
                value={form.city}
                type="text"
                placeholder="Jaipur"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* State */}
            <div>
              <label className="block mb-2 font-medium">State</label>

              <input
                name="state"
                value={form.state}
                type="text"
                placeholder="Rajasthan"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-2 font-medium">Phone Number</label>

              <input
                name="phone"
                value={form.phone}
                type="text"
                placeholder="9876543210"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>

            {/* Detect Location */}
            <div>
              <label className="block mb-2 font-medium">
                Business Location
              </label>

              <button
                type="button"
                onClick={getCurrentLocation}
                className={`w-full rounded-xl px-4 py-3 transition cursor-pointer ${
                  location
                    ? "bg-green-100 text-green-700 border border-green-500"
                    : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                }`}
              >
                {location
                  ? "✅ Location Added Successfully"
                  : "📍 Use Current Shop Location"}
              </button>
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Description</label>

              <textarea
                name="description"
                value={form.description}
                rows={4}
                placeholder="Describe your services..."
                className="w-full border rounded-xl px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-indigo-500"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-3 mt-8 border-t pt-5">
            <button
              onClick={handleClose}
              type="button"
              className="px-5 py-2 cursor-pointer border rounded-xl"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 cursor-pointer text-white rounded-xl"
            >
              {loading ? "Updating..." : "Update Business"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBusinessModal;
