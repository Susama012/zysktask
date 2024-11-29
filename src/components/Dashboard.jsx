import React from "react";

const Dashboard = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-violet-500 rounded-full"></div>
            <span className="text-lg font-bold">Untitled UI</span>
          </div>
          {/* Navigation Links */}
          <ul className="flex gap-4 text-sm sm:text-base md:text-lg">
            <li className="text-gray-700 hover:text-violet-500 cursor-pointer">Home</li>
            <li className="text-gray-700 hover:text-violet-500 cursor-pointer">Products</li>
            <li className="text-gray-700 hover:text-violet-500 cursor-pointer">Resources</li>
            <li className="text-gray-700 hover:text-violet-500 cursor-pointer">Pricing</li>
          </ul>
        </div>
        {/* User Profile Section */}
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
      </nav>

      {/* Grow Smarter Section */}
      <section className="text-center py-12 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 sm:text-3xl md:text-4xl">
          Beautiful Analytics to Grow Smarter
        </h1>

        {/* Buttons after the heading */}
        <div className="flex gap-4 justify-center mb-6 flex-col sm:flex-row">
          <button className="px-4 py-1 bg-violet-500 text-white rounded-lg shadow-md hover:bg-violet-600">
            New Feature
          </button>
          <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
            Check Out the Team Dashboard
          </button>
        </div>

        <p className="text-gray-600 mb-6 max-w-lg mx-auto sm:text-base md:text-lg">
          Discover how our powerful features can accelerate your growth and help you make data-driven decisions effortlessly.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <button className="px-6 py-2 bg-violet-500 text-white rounded-lg shadow-md hover:bg-violet-600">
            Sign Up
          </button>
          <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow-md hover:bg-gray-300">
            Demo
          </button>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="p-8 bg-white shadow rounded-lg">
        <div className="flex justify-between items-center mb-6 flex-col sm:flex-row">
          <div>
            <h2 className="text-xl font-bold">User Status</h2>
            <p className="text-gray-600">Active User</p>
          </div>
          <button className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600">
            Edit
          </button>
        </div>

        {/* Graphical Representation of Active User */}
        <div className="flex justify-center mb-6">
          <div className="relative w-24 h-24 bg-gray-100 rounded-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-violet-500 rounded-full flex items-center justify-center">
                <p className="text-violet-500 font-semibold">80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="p-8 bg-gray-50 rounded-lg mt-6">
        {/* Centered "Join 4000+ Companies" text */}
        <div className="text-center mb-6">
          <p className="mt-6 text-sm text-gray-500">
            Join 4000+ companies already growing.
          </p>
        </div>

        <div className="flex gap-6 justify-center flex-wrap">
          {[{
            name: "Boltshift",
            logo: "https://via.placeholder.com/40/ff5733/ffffff?text=G"
          }, {
            name: "Lightbox",
            logo: "https://via.placeholder.com/40/3b5998/ffffff?text=F"
          }, {
            name: "FeatherDev",
            logo: "https://via.placeholder.com/40/00a4e4/ffffff?text=M"
          }, {
            name: "Spherule",
            logo: "https://via.placeholder.com/40/ff9900/ffffff?text=A"
          }].map((company, index) => (
            <div key={index} className="flex items-center gap-2 mb-4 sm:mb-0">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-12 h-12 rounded-full"
              />
              <span className="text-gray-700">{company.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
