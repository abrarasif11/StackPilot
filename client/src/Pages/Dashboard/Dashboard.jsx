import React, { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Creations",
      value: 12,
      icon: <Sparkles size={22} className="sm:size-6" />,
      gradient: "from-[#3C81F6] to-[#A594F9]",
      protected: false,
    },
    {
      id: 2,
      title: "Active Plan",
      value: "Premium",
      icon: <Gem size={22} className="sm:size-6" />,
      gradient: "from-[#A594F9] to-[#C084FC]",
      protected: true,
    },
  ];

  const [creations, setCreations] = useState([]);

  const getDashboardData = async () => {
    setCreations(stats);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-auto p-6 bg-[#f8fafc] min-h-screen">
      {/* Stats Section */}
      <div className="flex flex-wrap justify-start gap-4">
        {creations.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center w-full sm:w-72 p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            {/* Left content */}
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-xl font-semibold text-gray-900">
                {item.protected ? (
                  <Protect plan="premium" fallback="Free">
                    {item.value}
                  </Protect>
                ) : (
                  item.value
                )}
              </h2>
            </div>

            {/* Right icon */}
            <div
              className={`bg-gradient-to-br ${item.gradient} p-3 rounded-lg text-white flex items-center justify-center`}
            >
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Creations Section */}
      <div className="mt-8 space-y-3">
        <p className="text-lg font-semibold text-gray-800">Recent Creations</p>
      </div>
    </div>
  );
};

export default Dashboard;
