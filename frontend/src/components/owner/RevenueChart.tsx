import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", revenue: 4200 },
  { day: "Tue", revenue: 5800 },
  { day: "Wed", revenue: 4800 },
  { day: "Thu", revenue: 7100 },
  { day: "Fri", revenue: 8600 },
  { day: "Sat", revenue: 10400 },
  { day: "Sun", revenue: 8900 },
];

const RevenueChart = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Weekly business revenue performance.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">
            Weekly
          </button>

          <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Monthly
          </button>

          <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Yearly
          </button>
        </div>
      </div>

      <div className="mb-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-indigo-50 p-5">
          <p className="text-sm text-slate-500">Total Revenue</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">₹52,800</h3>
        </div>

        <div className="rounded-2xl bg-emerald-50 p-5">
          <p className="text-sm text-slate-500">Growth</p>

          <h3 className="mt-2 text-3xl font-bold text-emerald-600">+18%</h3>
        </div>

        <div className="rounded-2xl bg-orange-50 p-5">
          <p className="text-sm text-slate-500">Bookings</p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">147</h3>
        </div>
      </div>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4f46e5"
              strokeWidth={4}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueChart;
