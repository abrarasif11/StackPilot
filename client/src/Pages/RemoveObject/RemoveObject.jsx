import React, { useState } from "react";
import { Scissors } from "lucide-react";

const RemoveObject = () => {
  const [previewURL, setPreviewURL] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F6FB] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Scissors className="text-blue-600" size={20} />
            <h2 className="text-[18px] font-semibold text-gray-800">
              Object Removal
            </h2>
          </div>

          {/* File input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full shadow px-3 py-2 rounded-lg text-sm cursor-pointer"
            />
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe object to remove
            </label>
            <textarea
              rows={4}
              placeholder="e.g., car in background, tree from the image"
              className="shadow w-full rounded-lg p-3 text-sm focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Be specific about what you want to remove
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer">
            <Scissors size={18} />
            Remove object
          </button>
        </div>

        {/* RIGHT */}
        <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-center">
          {!previewURL ? (
            <div className="text-center cursor-default">
              <Scissors size={40} className="mx-auto text-gray-400" />
              <p className="text-gray-500 text-sm mt-2">
                Upload an image and describe what to remove
              </p>
            </div>
          ) : (
            <img
              src={previewURL}
              alt="Uploaded Preview"
              className="max-h-[500px] rounded-lg object-contain cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
