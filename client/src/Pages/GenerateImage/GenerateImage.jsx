import React, { useState } from "react";
import { Image, Sparkles } from "lucide-react";

const stylesList = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "Realistic style",
  "3D style",
  "Portrait style",
];

const GenerateImage = () => {
  const [description, setDescription] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Anime style");
  const [isPublic, setIsPublic] = useState(true);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedImage(
        "https://via.placeholder.com/400x250?text=Generated+Image"
      );
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* LEFT SIDE */}
        <div className="p-8 space-y-6 border-r border-gray-100">
          {/* Header */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-semibold text-gray-800">
              AI Image Generator
            </h2>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Describe Your Image
            </label>
            <textarea
              placeholder="Describe what you want to see in the image.."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Style Buttons */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Style
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stylesList.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
                    selectedStyle === style
                      ? "border-green-500 text-green-600 bg-green-50"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={() => setIsPublic(!isPublic)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                isPublic ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isPublic ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className="text-sm font-medium text-gray-700">
              Make this image Public
            </span>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-4 w-full py-3 bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Image className="w-5 h-5" />
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 flex flex-col items-center justify-center text-center bg-gray-50">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <Image className="w-5 h-5 text-green-500" /> Generated image
          </h2>

          {loading ? (
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-400 border-solid"></div>
          ) : generatedImage ? (
            <img
              src={generatedImage}
              alt="Generated"
              className="rounded-lg shadow-md max-h-64 object-contain"
            />
          ) : (
            <p className="text-gray-500 max-w-xs">
              Enter a topic and click{" "}
              <span className="text-gray-700 font-medium">
                "Generate image"
              </span>{" "}
              to get started
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;
