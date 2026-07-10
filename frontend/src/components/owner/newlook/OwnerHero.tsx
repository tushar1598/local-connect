import {
  Star,
  Eye,
  MapPin,
  Plus,
  Pencil,
  ExternalLink,
  Bell,
} from "lucide-react";

const OwnerHero = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h2 className="text-3xl font-bold text-slate-900">
              Good Morning, Tushar 👋
            </h2>

            <div className="relative">
              <button className="rounded-full bg-slate-100 p-2 transition hover:bg-slate-200">
                <Bell size={18} />
              </button>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                3
              </span>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-800">
            Tushar Beauty Salon
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Manage your business, track customer activity, monitor performance,
            and grow your business with Local Connect.
          </p>

          {/* Business Info */}
          <div className="mt-6 flex flex-wrap gap-5">
            <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-2 text-sm font-medium text-yellow-700">
              <Star size={17} fill="currentColor" />
              4.8 Rating
            </div>

            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <Eye size={17} />
              1.2K Profile Views
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <MapPin size={17} />
              Jaipur, Rajasthan
            </div>
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">
            <Plus size={18} />
            Add Service
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
            <Pencil size={18} />
            Edit Business
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
            <ExternalLink size={18} />
            View Public Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default OwnerHero;
