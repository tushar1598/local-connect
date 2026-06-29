import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Jaipur",
    review:
      "I found a plumber within minutes. The experience was smooth and the service quality exceeded my expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    city: "Delhi",
    review:
      "Very easy to use. I hired an electrician the same day and everything was handled professionally.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Singh",
    city: "Mumbai",
    review:
      "The nearby business feature is amazing. It helped me connect with trusted professionals around my location instantly.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Thousands of customers trust our platform to discover reliable local
            service providers every day.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
                <Quote size={28} />
              </div>

              {/* Review */}
              <p className="mt-8 leading-8 text-gray-600">"{item.review}"</p>

              {/* Rating */}
              <div className="mt-8 flex gap-1">
                {Array.from({ length: item.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-xl font-bold text-white">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>

                  <p className="text-sm text-gray-500">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
