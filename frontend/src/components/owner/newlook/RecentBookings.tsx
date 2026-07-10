import { CalendarClock, Phone, ArrowRight } from "lucide-react";

const bookings = [
  {
    customer: "Priya Sharma",
    service: "Hair Spa",
    time: "10:30 AM",
    amount: "₹1,200",
    status: "Confirmed",
  },
  {
    customer: "Rahul Verma",
    service: "Beard Styling",
    time: "11:45 AM",
    amount: "₹450",
    status: "In Progress",
  },
  {
    customer: "Sneha Gupta",
    service: "Facial",
    time: "01:00 PM",
    amount: "₹950",
    status: "Completed",
  },
  {
    customer: "Aman Singh",
    service: "Hair Cut",
    time: "03:30 PM",
    amount: "₹300",
    status: "Pending",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Confirmed":
      return "bg-blue-100 text-blue-700";

    case "Completed":
      return "bg-emerald-100 text-emerald-700";

    case "In Progress":
      return "bg-orange-100 text-orange-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};

const RecentBookings = () => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Recent Bookings</h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest appointments scheduled today.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.customer}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 transition hover:bg-slate-50 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-lg font-bold text-indigo-600">
                {booking.customer.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {booking.customer}
                </h3>

                <p className="text-sm text-slate-500">{booking.service}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CalendarClock size={16} />
                {booking.time}
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Phone size={16} />
                +91 XXXXX XXXXX
              </div>

              <div className="font-semibold text-slate-900">
                {booking.amount}
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                  booking.status,
                )}`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentBookings;
