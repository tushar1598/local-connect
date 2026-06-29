const Home = () => {
  const categories = [
    "DJ Service",
    "Tent House",
    "Halwai",
    "Electrician",
    "Plumber",
    "RO Repair",
    "E-Mitra",
    "Coaching",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Find Trusted Local Services</h1>

        <p className="text-gray-600 text-lg mb-8">
          DJs, Tent Houses, Halwai, Electricians, Plumbers and more.
        </p>

        <div className="max-w-2xl mx-auto flex gap-3">
          <input
            type="text"
            placeholder="Search DJ, Halwai, Electrician..."
            className="flex-1 p-4 rounded-xl border outline-none"
          />

          <button className="px-8 bg-indigo-600 text-white rounded-xl">
            Search
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>

        <div className="grid md:grid-cols-4 gap-5">
          {categories.map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Business CTA */}
      <section className="bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Own a Local Business?</h2>

          <p className="mb-8 text-lg">
            Register your business and connect with customers nearby.
          </p>

          <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold">
            List Your Business
          </button>

          <div className="pt-10 max-w-6xl mx-auto px-6 text-center">
            © 2026 LocalConnect. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
