import React from "react";
import logo from "../../assets/banner/favicon.svg";
const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <img src={logo} alt="Quickai Logo" className="w-6 h-6" />
            <h2 className="text-xl font-semibold text-primary">StackPilot</h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Experience the power of AI with QuickAi. Transform your content
            creation with our suite of premium AI tools. Write articles,
            generate images, and enhance your workflow.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 rounded-r-md hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t text-center py-4 text-sm text-gray-500">
        Copyright 2025 © StackPilot. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
