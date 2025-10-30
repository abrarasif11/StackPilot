import React, { useState } from "react";
import { FileText, FileCheck } from "lucide-react";

const ReviewResume = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F6FB] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT CARD */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <FileCheck className="text-green-600" size={20} />
            <h2 className="text-[18px] font-semibold text-gray-800">
              Resume Review
            </h2>
          </div>

          {/* Upload Section */}
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Resume
          </label>

          <div className="mb-6">
            <input
              type="file"
              accept=".pdf,image/png,image/jpeg"
              onChange={handleFileChange}
              className="w-full shadow px-3 py-2 rounded-lg text-sm cursor-pointer"
            />

            {/* Show selected file name */}
            {fileName && (
              <p className="text-sm text-gray-700 mt-1">
                Selected: <span className="font-medium">{fileName}</span>
              </p>
            )}

            <p className="text-xs text-gray-500 mt-1">
              Supports PDF, PNG, JPG formats
            </p>
          </div>

          {/* Review Button */}
          <button
            type="button"
            className="w-full bg-gradient-to-r from-[#00DA83] to-[#009BB3] text-white py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:opacity-90"
            aria-label="Review Resume"
          >
            <FileCheck size={18} />
            Review Resume
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <FileText className="text-green-600" size={20} />
            <h2 className="text-[18px] font-semibold text-gray-800">
              Analysis Results
            </h2>
          </div>

          {/* Placeholder */}
          <div className="flex-1 min-h-[220px] flex items-center justify-center">
            <div className="text-center">
              <FileText size={48} className="mx-auto text-gray-400" />
              <p className="text-gray-500 text-sm mt-3 max-w-[340px] mx-auto">
                Upload your resume and click "Review Resume" to get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
