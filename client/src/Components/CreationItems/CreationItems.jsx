import React from "react";

const CreationItems = ({ item }) => {
  return (
    <div className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2>{item.prompt}</h2>
          <p>
            {item.type} - {new Date(item.createdAt).toLocaleDateString()}
          </p>
        </div>
        <button className="bg-[#BFDBFE] border border-[#EFF6FF] text-[#1E40AF] px-4 py-1 rounded-full">
          {item.type}
        </button>
      </div>
    </div>
  );
};

export default CreationItems;
