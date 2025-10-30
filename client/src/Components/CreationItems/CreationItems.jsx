import React, { useState } from "react";
import Markdown from "react-markdown";
const CreationItems = ({ item }) => {
  const [expended, setExpended] = useState(false);
  return (
    <div
      onClick={() => setExpended(!expended)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
    >
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
      {expended && (
        <div>
          {item.type === "image" ? (
            <div>
              <img
                src={item.content}
                alt="image"
                className="mt-3 w-full max-w-md"
              />
            </div>
          ) : (
            <div className="mt-3 h-full overflow-y-scroll text-sm text-slate-700">
              <div>
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItems;
