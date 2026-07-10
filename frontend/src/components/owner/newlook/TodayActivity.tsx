import {
  CalendarCheck2,
  IndianRupee,
  Star,
  UserPlus,
  CircleX,
} from "lucide-react";

const activities = [
  {
    title: "New Booking",
    description: "Priya Sharma booked Hair Spa.",
    time: "5 min ago",
    icon: CalendarCheck2,
    color: "bg-blue-500",
  },
  {
    title: "Payment Received",
    description: "₹1,200 received from Rahul Verma.",
    time: "18 min ago",
    icon: IndianRupee,
    color: "bg-emerald-500",
  },
  {
    title: "New Review",
    description: "Sneha left a ⭐⭐⭐⭐⭐ review.",
    time: "35 min ago",
    icon: Star,
    color: "bg-yellow-500",
  },
  {
    title: "New Customer",
    description: "Akash Gupta joined your business.",
    time: "1 hour ago",
    icon: UserPlus,
    color: "bg-violet-500",
  },
  {
    title: "Booking Cancelled",
    description: "One appointment was cancelled.",
    time: "2 hours ago",
    icon: CircleX,
    color: "bg-red-500",
  },
];

const TodayActivity = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Today's Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Recent updates from your business today.
          </p>
        </div>

        <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="group flex items-start gap-5 rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${activity.color} text-white`}
              >
                <Icon size={22} />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.description}
                </p>
              </div>

              <span className="text-xs font-medium text-slate-400">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TodayActivity;
