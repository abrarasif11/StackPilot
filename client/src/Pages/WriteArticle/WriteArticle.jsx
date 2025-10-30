import React, { useState } from "react";
import { Sparkles, Edit } from "lucide-react";

const WriteArticle = () => {
  const [length, setLength] = useState("short");
  const [topic, setTopic] = useState("");
  const [output, setOutput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!topic.trim()) {
      setOutput("⚠️ Please enter a topic first.");
      return;
    }

    // Simulate AI generation with dummy content
    const dummyText =
      length === "short"
        ? `The future of ${topic} looks promising. As technology evolves, ${topic} continues to play a key role in shaping industries, improving efficiency, and enhancing creativity. With emerging trends and innovations, ${topic} will likely redefine how we interact with digital systems, offering new ways to connect, create, and collaborate.`
        : `The future of ${topic} holds immense potential for innovation and transformation. As we move toward an era defined by automation, data-driven intelligence, and global connectivity, ${topic} is poised to revolutionize both personal and professional spaces. Businesses across sectors are leveraging ${topic} to optimize workflows, enhance decision-making, and create personalized user experiences. Furthermore, ongoing research continues to push the boundaries of what’s possible, ensuring that ${topic} remains a catalyst for sustainable development and technological growth in the coming decades.`;

    setOutput(dummyText);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex justify-center items-start md:items-center px-4 py-6 md:p-10 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Left: Form Section */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-[#A594F9]" size={20} />
              <h2 className="font-semibold text-gray-800 text-lg">
                AI Article Writer
              </h2>
            </div>

            {/* Topic Input */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Article Topic
            </label>
            <input
              type="text"
              placeholder="The future of artificial intelligence"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#A594F9] outline-none mb-5 cursor-pointer text-sm sm:text-base"
            />

            {/* Article Length Buttons */}
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Article Length
            </label>
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                type="button"
                onClick={() => setLength("short")}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition ${
                  length === "short"
                    ? "bg-[#EDE9FE] border-[#C4B5FD] text-[#5B21B6]"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Short (200–400 words)
              </button>
              <button
                type="button"
                onClick={() => setLength("long")}
                className={`px-4 py-2 rounded-full border text-sm cursor-pointer transition ${
                  length === "long"
                    ? "bg-[#EDE9FE] border-[#C4B5FD] text-[#5B21B6]"
                    : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Long (400–800 words)
              </button>
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#A594F9] to-[#3C81F6] hover:opacity-90 text-white font-medium py-2.5 rounded-lg flex justify-center items-center gap-2 cursor-pointer transition-all duration-200"
          >
            <Edit size={18} />
            Generate Article
          </button>
        </form>

        {/* Right: Output Section */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-start items-start text-left">
          <div className="flex items-center gap-2 mb-4">
            <Edit className="text-[#3C81F6]" size={20} />
            <h2 className="font-semibold text-gray-800 text-lg">
              Generated Article
            </h2>
          </div>
          <div className="text-gray-600 text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[500px]">
            {output ? (
              <p>{output}</p>
            ) : (
              <div className="text-center w-full">
                <Edit
                  className="mx-auto mb-3 text-gray-400"
                  size={36}
                  strokeWidth={1.5}
                />
                <p>
                  Enter a topic and click{" "}
                  <span className="font-medium">“Generate Article”</span> to get
                  started.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
