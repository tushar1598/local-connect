import { UserCheck, Eye, Heart, Phone, TrendingUp } from "lucide-react";

const performance = [
  {
    title: "Profile Completion",
    value: "92%",
    icon: UserCheck,
    color: "bg-indigo-500",
    progress: "w-[92%]",
  },
  {
    title: "Profile Views",
    value: "4,281",
    icon: Eye,
    color: "bg-blue-500",
    progress: "w-[78%]",
  },
  {
    title: "Saved by Customers",
    value: "326",
    icon: Heart,
    color: "bg-pink-500",
    progress: "w-[65%]",
  },
  {
    title: "Calls Received",
    value: "147",
    icon: Phone,
    color: "bg-emerald-500",
    progress: "w-[58%]",
  },
  {
    title: "Monthly Growth",
    value: "+24%",
    icon: TrendingUp,
    color: "bg-orange-500",
    progress: "w-[80%]",
  },
];

const BusinessPerformance = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">
          Business Performance
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monitor your business performance and customer engagement.
        </p>
      </div>

      <div className="space-y-6">
        {performance.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title}>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.color} text-white`}
                  >
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <span className="font-bold text-slate-900">{item.value}</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${item.color} ${item.progress}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BusinessPerformance;
