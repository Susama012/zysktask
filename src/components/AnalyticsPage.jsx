import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="font-sans">
      {/* Feature Section */}
      <div className="text-center py-12 bg-gray-50 mb-1"> {/* Reduced the margin-bottom */}
        <h1 className="text-3xl font-bold text-violet-500">Feature</h1>
      </div>

      {/* Analytics Section */}
      <section className="text-center py-12 mt-1"> {/* Reduced the margin-top */}
        <h2 className="text-3xl font-bold mb-4">Analytics that Feels Like its From the Future</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          Unlock insights in a way that’s intuitive and engaging, helping you understand key metrics with ease and confidence.
        </p>
      </section>

      {/*  Content Sections */}
      <section className="p-8 bg-white shadow rounded-lg">
        {/* First Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center gap-4 h-full">
            <div>
            <div className="text-center h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold">Real-Time Insights</h3>
              <p className="text-gray-600">Get live data on your key metrics, helping you make decisions instantly.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 h-full">
            <div>
            <div className="text-center h-full flex flex-col justify-between">
              <h3 className="text-xl font-semibold">User-Centric Dashboards</h3>
              <p className="text-gray-600">Tailor your dashboard to focus on what matters most to you and your team.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 h-full">
            <div>
            <div className="text-center h-full flex flex-col justify-between">
              <h4 className="text-xl font-semibold mb-2">Advanced Reporting</h4>
              <p className="text-gray-600">Generate detailed reports for deeper insights and better decision-making.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center h-full flex flex-col justify-between">
            <h4 className="text-xl font-semibold mb-2">Customizable Features</h4>
            <p className="text-gray-600">Adjust settings to fit your workflow, ensuring the platform meets your needs perfectly.</p>
          </div>
          <div className="text-center h-full flex flex-col justify-between">
            <h4 className="text-xl font-semibold mb-2">Data Visualization</h4>
            <p className="text-gray-600">Easily visualize trends with interactive graphs and charts, making data easier to understand.</p>
          </div>
          <div className="text-center h-full flex flex-col justify-between">
            <h4 className="text-xl font-semibold mb-2">User Behavior Tracking</h4>
            <p className="text-gray-600">Track user actions to better understand engagement and optimize user experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;
