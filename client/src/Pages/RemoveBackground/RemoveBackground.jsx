import React, { useState } from "react";
import { Eraser, Sparkles } from "lucide-react";

const RemoveBackground = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
    else setFileName("No file chosen");
  };

  return (
    <div className="min-h-screen bg-[#F7FAFC] flex items-center justify-center p-6">
      <div className="grid lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* === LEFT SIDE === */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Background Removal
            </h2>
          </div>

          {/* Upload Section */}
          <label className="block text-sm text-gray-700 mb-2">
            Upload image
          </label>
          <div className="border border-gray-300 rounded-lg flex items-center justify-between overflow-hidden">
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 border-r border-gray-300 hover:bg-gray-100 transition"
            >
              Choose File
            </label>
            <span className="px-4 py-2 text-sm text-gray-500 truncate">
              {fileName}
            </span>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            Supports JPG, PNG, and other image formats
          </p>

          {/* Remove Button */}
          <button
            type="button"
            className="cursor-pointer mt-5 w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium py-2.5 hover:opacity-90 transition"
          >
            <Eraser className="w-4 h-4" />
            Remove background
          </button>
        </div>

        {/* === RIGHT SIDE === */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Eraser className="w-5 h-5 text-red-500" />
            <h2 className="text-lg font-semibold text-gray-800">
              Processed Image
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center text-gray-400 mt-2">
            <Eraser className="w-10 h-10 mb-3" />
            <p className="text-sm max-w-xs">
              Upload an image and click{" "}
              <span className="font-medium text-gray-600">
                "Remove Background"
              </span>{" "}
              to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
