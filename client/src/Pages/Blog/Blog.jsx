import React, { useState } from "react";

const categories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "Lifestyle",
  "Education",
  "Travel",
  "Food",
];

const Blog = () => {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [titles, setTitles] = useState([]);

  const handleGenerate = () => {
    if (!keyword) return;
    setTitles([
      `Exploring ${keyword} in Modern ${selectedCategory}`,
      `The Ultimate Guide to ${keyword}`,
      `Why ${keyword} is Changing ${selectedCategory} Forever`,
      `${keyword}: Trends and Insights for 2025`,
    ]);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] p-6 flex flex-col md:flex-row gap-6">
      {/* Left Card */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <span className="text-[#A594F9]">✦</span> AI Title Generator
        </h2>

        {/* Keyword Input */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Keyword
        </label>
        <input
          type="text"
          placeholder="The future of artificial intelligence"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border border-gray-200 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#A594F9] focus:outline-none mb-5"
        />

        {/* Category Section */}
        <label className="block text-sm font-medium text-gray-600 mb-2">
          Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md border text-sm transition ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#A594F9] to-[#8E7CFA] text-white border-transparent"
                  : "border-gray-200 text-gray-700 hover:border-[#A594F9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-[#A594F9] to-[#8E7CFA] text-white font-medium py-3 rounded-md flex justify-center items-center gap-2 hover:opacity-90 transition"
        >
          <span className="text-lg">#</span> Generate title
        </button>
      </div>

      {/* Right Card */}
      <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
          <span className="text-[#A594F9]">#</span> Generated titles
        </h2>

        {titles.length === 0 ? (
          <div className="text-center mt-16 text-gray-500">
            <div className="text-5xl mb-4">#</div>
            <p>
              Enter keywords and click <b>"Generate Titles"</b> to get started
            </p>
          </div>
        ) : (
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {titles.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Blog;
