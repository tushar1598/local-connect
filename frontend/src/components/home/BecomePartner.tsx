import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: Users,
    title: "Reach More Customers",
    description: "Get discovered by customers searching for nearby services.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Increase visibility and receive more service inquiries.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Listing",
    description: "Build trust with a verified business profile.",
  },
];

const BecomePartner = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[36px] bg-gradient-to-r from-indigo-600 to-purple-700">
          <div className="grid items-center gap-12 px-10 py-16 lg:grid-cols-2 lg:px-16">
            {/* Left Side */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                <BriefcaseBusiness size={18} />
                Business Owners
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                Own a Local Business?
                <br />
                Start Growing Today.
              </h2>

              <p className="mt-6 text-lg leading-8 text-indigo-100">
                Join thousands of verified professionals already growing their
                business through our platform. Create your listing, reach more
                nearby customers and manage everything from one dashboard.
              </p>

              <Link to="/register">
                <button className="mt-10 flex items-center gap-2 cursor-pointer rounded-2xl bg-white px-8 py-4 font-semibold text-indigo-700 transition hover:scale-105">
                  Register Your Business
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-indigo-600">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-indigo-100">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomePartner;
