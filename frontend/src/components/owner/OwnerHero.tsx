import { Bell, Eye, MapPin, Star, TrendingUp } from "lucide-react";

const OwnerHero = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
        {/* Left */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Good Morning, Tushar 👋
            </h2>

            <div className="relative">
              <button className="rounded-full bg-slate-100 p-2 hover:bg-slate-200 transition">
                <Bell size={18} />
              </button>

              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                3
              </span>
            </div>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Manage your business from one dashboard.
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
              <Star size={14} className="fill-yellow-500 text-yellow-500" />
              4.8
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <Eye size={14} />
              1.2K
            </div>

            <div className="flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
              <MapPin size={14} />
              Jaipur
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-5 rounded-2xl bg-gradient-to-r from-indigo-50 to-sky-50 px-6 py-4">
          <div>
            <p className="text-xs text-slate-500">This Month</p>
            <h3 className="text-2xl font-bold text-slate-900">+24%</h3>
            <p className="text-xs text-green-600">
              Business Growth
            </p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg">
            <TrendingUp size={28} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerHero;