const WelcomeSection = () => (
  <section className="grid grid-cols-1 gap-6 p-6 text-white lg:grid-cols-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
    <div>
      <h2 className="text-2xl font-bold">Welcome back, Admin 👋</h2>
      <p className="mt-2 text-indigo-100">
        Here’s what’s happening with your store today.
      </p>
      <button className="px-5 py-2 mt-4 font-medium text-indigo-600 transition bg-white rounded-lg hover:bg-indigo-50">
        Add Product
      </button>
    </div>
    <div className="items-center justify-end hidden lg:flex">
      <div className="w-64 h-32 bg-white/20 rounded-xl" />
    </div>
  </section>
);

export default WelcomeSection;
