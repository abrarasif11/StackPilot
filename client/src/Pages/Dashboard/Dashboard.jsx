import React, { useEffect, useState } from "react";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItems from "../../Components/CreationItems/CreationItems";

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

  const items = [
    {
      id: 1,
      prompt: "Generate a blog post about AI in education",
      type: "Text",
      content:
        "Artificial Intelligence is transforming education by enabling personalized learning experiences. AI-driven systems analyze student behavior to adapt content delivery, providing tailored recommendations and real-time feedback that enhance both engagement and performance.",
      createdAt: "2025-10-27T09:15:00Z",
    },
    {
      id: 2,
      prompt: "Create an image of a futuristic city skyline",
      type: "Image",
      content:
        "An ultra-modern city skyline at sunset, featuring flying cars, glass skyscrapers with neon lights, and drones hovering between buildings — all rendered in a cyberpunk aesthetic.",
      createdAt: "2025-10-26T15:20:00Z",
    },
    {
      id: 3,
      prompt: "Summarize the latest AI trends report",
      type: "Text",
      content:
        "The 2025 AI Trends Report highlights rapid growth in multimodal AI, generative agents, and ethical governance frameworks. Key industries adopting AI include healthcare, finance, and education, with a focus on transparent and responsible model deployment.",
      createdAt: "2025-10-25T18:30:00Z",
    },
    {
      id: 4,
      prompt: "Generate a social media caption for a tech startup",
      type: "Text",
      content:
        "🚀 Empower your business with cutting-edge innovation. We build tech that scales — because your ideas deserve to go global. #StartupLife #Innovation #TechForGood",
      createdAt: "2025-10-24T11:00:00Z",
    },
    {
      id: 5,
      prompt: "Design an AI-powered logo for a SaaS company",
      type: "Image",
      content:
        "A minimalist AI-generated logo concept with abstract geometric shapes forming the letter 'S', using gradient tones of violet and blue to symbolize intelligence and innovation.",
      createdAt: "2025-10-23T13:40:00Z",
    },
    {
      id: 6,
      prompt: "Write a product description for StackPilot AI tools",
      type: "Text",
      content:
        "StackPilot is an all-in-one AI productivity suite that helps creators, developers, and marketers streamline their workflows. From AI writing and image generation to analytics and automation — everything happens in one smart dashboard.",
      createdAt: "2025-10-22T10:05:00Z",
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
        {items.length > 0 ? (
          items.map((item) => <CreationItems key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500 text-sm">No recent creations found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
