import React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/banner/user_group.png";

const Banner = () => {
  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center text-center bg-[url('/gradientBackground.png')] bg-cover bg-no-repeat min-h-screen">
      {/* Main heading */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
        StackPilot: <br className="hidden sm:block" />{" "}
        <span className="text-primary">
          AI tools to create amazing content.
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-gray-600 max-w-2xl mb-10 text-base sm:text-lg">
        Empower your content creation with StackPilot — a premium suite of AI
        tools to write, design, and streamline your workflow.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        <Link to="/ai">
          <button className="bg-primary text-white px-8 py-3 rounded-md text-base font-medium hover:bg-indigo-700 transition">
            Start creating now
          </button>
        </Link>
        <button className="bg-white border border-gray-300 text-gray-800 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition">
          Watch demo
        </button>
      </div>

      <div className="flex items-center gap-4 mx-auto  mt-8">
        <img className="h-10" src={user} alt="user1" />

        {/* Text */}
        <span className="text-gray-600 text-sm sm:text-base">
          Trusted by <span className="font-semibold text-gray-900">10k+</span>{" "}
          people
        </span>
      </div>
    </div>
  );
};

export default Banner;
