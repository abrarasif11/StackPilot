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
        "Artificial Intelligence is revolutionizing the way students learn and teachers teach. Through adaptive learning systems, AI can personalize education by analyzing how each student interacts with lessons and identifying the areas where they struggle most. Intelligent tutoring systems use this data to provide tailored exercises, personalized feedback, and even one-on-one virtual instruction that adapts in real time. Educators benefit from AI-driven analytics that highlight class trends, performance gaps, and opportunities for improvement. Beyond the classroom, AI is also reshaping educational administration — automating grading, managing records, and optimizing resource allocation. However, this transformation requires balancing innovation with ethics, ensuring transparency, privacy, and equitable access. When used responsibly, AI can create a more engaging, inclusive, and efficient learning ecosystem.",
      createdAt: "2025-10-27T09:15:00Z",
    },
    {
      id: 2,
      prompt: "Create an image of a futuristic city skyline",
      type: "Image",
      content:
        "The futuristic city skyline is a breathtaking symphony of architecture, technology, and imagination. Towering skyscrapers stretch into a lavender-tinted sky, their facades shimmering with adaptive LED panels that change color based on time and weather. Floating highways weave between the buildings, carrying sleek autonomous vehicles that glide noiselessly above the surface. Pedestrians move along transparent bridges lined with lush greenery, symbolizing harmony between nature and innovation. Drones buzz softly overhead, monitoring traffic and delivering goods with precision. Below, the streets pulse with holographic advertisements and AI-guided streetlights that respond to real-time crowd movement. The skyline reflects perfectly on a glassy river illuminated by bioluminescent algae, painting a vision of a future where humanity and technology coexist beautifully.",
      createdAt: "2025-10-26T15:20:00Z",
    },
    {
      id: 3,
      prompt: "Summarize the latest AI trends report",
      type: "Text",
      content:
        "The 2025 Global AI Trends Report highlights the explosive growth of multimodal AI — systems capable of understanding and generating text, images, and audio simultaneously. This year, the focus has shifted toward practical applications of generative agents, AI companions, and workflow automation tools that are transforming industries from healthcare to finance. Ethical AI remains a core theme, as developers and organizations adopt stronger governance frameworks to ensure transparency, fairness, and accountability. The report also emphasizes the importance of sustainable AI — models trained using low-energy architectures to minimize environmental impact. Open-source contributions have democratized access to cutting-edge models, enabling smaller teams to innovate faster. As AI becomes more embedded in daily life, human-AI collaboration is evolving from a novelty to a necessity.",
      createdAt: "2025-10-25T18:30:00Z",
    },
    {
      id: 4,
      prompt: "Generate a social media caption for a tech startup",
      type: "Text",
      content:
        "Innovation doesn’t just happen — it’s built, tested, and scaled by bold thinkers who see beyond limits. 🚀 Our mission at StackPilot is to help startups leverage AI to accelerate growth, automate processes, and make smarter business decisions. Whether it’s crafting viral marketing content, analyzing customer insights, or designing intelligent tools, we empower teams to work faster and smarter. 🌟 The future belongs to creators who dare to imagine more, and with StackPilot’s AI solutions, your startup can lead that change. Let’s shape tomorrow’s technology, today. #AIStartup #Innovation #TechForGood #AutomationRevolution",
      createdAt: "2025-10-24T11:00:00Z",
    },
    {
      id: 5,
      prompt: "Design an AI-powered logo for a SaaS company",
      type: "Image",
      content:
        "This AI-generated logo concept embodies simplicity, intelligence, and modern innovation. At the center lies a minimal geometric mark — a stylized letter 'S' formed by interlocking lines symbolizing data flow and connection. The design uses a gradient that transitions from deep indigo to soft violet, representing creativity, trust, and cutting-edge technology. Subtle symmetry and spacing give the logo a futuristic yet approachable aesthetic, ideal for a SaaS brand that values clarity and performance. The entire visual identity feels dynamic, scalable, and versatile across both digital and print formats — a true reflection of how artificial intelligence and design precision can merge to create timeless brand identity.",
      createdAt: "2025-10-23T13:40:00Z",
    },
    {
      id: 6,
      prompt: "Write a product description for StackPilot AI tools",
      type: "Text",
      content:
        "StackPilot is an all-in-one AI productivity platform designed to supercharge content creators, developers, and entrepreneurs. With an elegant interface and powerful tools under one roof, StackPilot allows users to generate blog posts, design visuals, and automate workflows effortlessly. From writing SEO-optimized articles to creating eye-catching social media posts, every feature is powered by next-generation AI models tuned for accuracy and creativity. The platform integrates seamlessly with popular services like Notion, Figma, and Google Drive, ensuring that users can collaborate without friction. Whether you’re a freelancer managing projects or a business scaling your brand, StackPilot gives you the tools to work smarter, not harder. Welcome to the new era of intelligent productivity.",
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
