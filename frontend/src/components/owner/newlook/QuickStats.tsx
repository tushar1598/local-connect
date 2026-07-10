import {
  IndianRupee,
  CalendarCheck2,
  Users,
  Star,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Today's Revenue",
    value: "₹12,540",
    change: "+18%",
    icon: IndianRupee,
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-500",
    text: "text-emerald-600",
  },
  {
    title: "Today's Bookings",
    value: "26",
    change: "+6",
    icon: CalendarCheck2,
    bg: "bg-blue-50",
    iconBg: "bg-blue-500",
    text: "text-blue-600",
  },
  {
    title: "Customers",
    value: "1,248",
    change: "+42",
    icon: Users,
    bg: "bg-orange-50",
    iconBg: "bg-orange-500",
    text: "text-orange-600",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.2",
    icon: Star,
    bg: "bg-violet-50",
    iconBg: "bg-violet-500",
    text: "text-violet-600",
  },
];

const QuickStats = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`group rounded-3xl border border-slate-200 ${item.bg} p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <div
                  className={`mt-4 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold ${item.text}`}
                >
                  <TrendingUp size={15} />
                  {item.change}
                </div>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} text-white transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default QuickStats;