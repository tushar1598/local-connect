import {
  Bell,
  Star,
  MessageCircle,
  BadgePercent,
  TriangleAlert,
} from "lucide-react";

const notifications = [
  {
    title: "New Review",
    message: "Priya Sharma gave you a 5-star review.",
    time: "5 min ago",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "New Message",
    message: "Rahul Verma sent you a message.",
    time: "18 min ago",
    icon: MessageCircle,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Offer Expiring",
    message: "Weekend Offer expires tomorrow.",
    time: "1 hour ago",
    icon: BadgePercent,
    color: "bg-pink-100 text-pink-600",
  },
  {
    title: "Business Tip",
    message: "Add more images to improve visibility.",
    time: "2 hours ago",
    icon: TriangleAlert,
    color: "bg-orange-100 text-orange-600",
  },
];

const Notifications = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
          <Bell size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">Notifications</h2>

          <p className="text-sm text-slate-500">
            Latest updates from your business.
          </p>
        </div>
      </div>

      <div className="space-y-5">
        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color}`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>

                <p className="mt-1 text-sm text-slate-500">{item.message}</p>

                <span className="mt-2 block text-xs text-slate-400">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Notifications;
