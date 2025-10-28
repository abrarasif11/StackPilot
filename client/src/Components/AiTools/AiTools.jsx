import React from "react";
import { Link } from "react-router-dom";
import {
  PenLine,
  Type,
  Image as ImageIcon,
  Eraser,
  FileText,
  Users,
  Scissors,
} from "lucide-react";

const tools = [
  {
    icon: <PenLine className="w-6 h-6 text-blue-500" />,
    title: "AI Article Writer",
    desc: "Generate high-quality, engaging articles on any topic with our AI writing technology.",
    route: "/ai/writeArticle",
  },
  {
    icon: <Type className="w-6 h-6 text-purple-500" />,
    title: "Blog Title Generator",
    desc: "Generate catchy, SEO-friendly blog titles with the power of AI.",
    route: "/ai/blogTitle",
  },
  {
    icon: <ImageIcon className="w-6 h-6 text-green-500" />,
    title: "AI Image Generation",
    desc: "Create stunning visuals in seconds using advanced AI image generation.",
    route: "/ai/generateImage",
  },
  {
    icon: <Eraser className="w-6 h-6 text-orange-500" />,
    title: "Background Removal",
    desc: "Easily remove image backgrounds with precision using AI tools.",
    route: "/ai/removeBackground",
  },
  {
    icon: <Scissors className="w-6 h-6 text-indigo-500" />,
    title: "Object Removal",
    desc: "Erase unwanted objects from your photos seamlessly with AI.",
    route: "/ai/removeObject",
  },
  {
    icon: <FileText className="w-6 h-6 text-teal-500" />,
    title: "Resume Review",
    desc: "Optimize your resume with AI-powered review and improvement suggestions.",
    route: "/ai/reviewResume",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-500" />,
    title: "AI Community",
    desc: "Join a growing community of creators using StackPilot to power their ideas.",
    route: "/ai/community",
  },
];

const AiTools = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Powerful AI Tools
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>

        {/* Tools Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={tool.route}
              className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 flex flex-col items-start text-left border border-gray-100 hover:-translate-y-1 duration-200"
            >
              <div className="p-3 rounded-lg bg-gray-50 mb-5 group-hover:bg-gray-100 transition">
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary">
                {tool.title}
              </h3>
              <p className="text-gray-500 text-sm">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTools;
