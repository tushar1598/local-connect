import {
  Plus,
  BriefcaseBusiness,
  CalendarCheck2,
  MessageCircle,
  Image,
  TicketPercent,
  BarChart3,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Add Service",
    subtitle: "Create a new service",
    icon: Plus,
    color: "bg-indigo-500",
  },
  {
    title: "Manage Services",
    subtitle: "Edit & organize services",
    icon: BriefcaseBusiness,
    color: "bg-blue-500",
  },
  {
    title: "Bookings",
    subtitle: "View upcoming bookings",
    icon: CalendarCheck2,
    color: "bg-emerald-500",
  },
  {
    title: "Messages",
    subtitle: "Customer conversations",
    icon: MessageCircle,
    color: "bg-orange-500",
  },
  {
    title: "Gallery",
    subtitle: "Manage business photos",
    icon: Image,
    color: "bg-pink-500",
  },
  {
    title: "Offers",
    subtitle: "Discounts & coupons",
    icon: TicketPercent,
    color: "bg-red-500",
  },
  {
    title: "Analytics",
    subtitle: "Business insights",
    icon: BarChart3,
    color: "bg-violet-500",
  },
  {
    title: "Settings",
    subtitle: "Business preferences",
    icon: Settings,
    color: "bg-slate-700",
  },
];

const QuickActions = () => {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Frequently used tools to manage your business.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white transition-transform duration-300 group-hover:scale-110`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;