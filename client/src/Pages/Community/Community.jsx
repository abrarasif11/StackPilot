import React, { useState } from "react";
import img1 from "../../assets/banner/ai_gen_img_1.png";
import img2 from "../../assets/banner/ai_gen_img_2.png";
import img3 from "../../assets/banner/ai_gen_img_3.png";

const Community = () => {
  const [creations, setCreations] = useState([
    {
      id: 1,
      src: img1,
      likes: 2,
    },
    {
      id: 2,
      src: img2,
      likes: 2,
    },
    {
      id: 3,
      src: img3,
      likes: 1,
    },
  ]);

  const handleLike = (id) => {
    setCreations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6 bg-gray-50">
      <h2 className="text-xl font-semibold mb-4">Creations</h2>
      <div className="bg-white h-full rounded-xl overflow-y-scroll p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {creations.map((creation) => (
            <div
              key={creation.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={creation.src}
                alt={`creation-${creation.id}`}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => handleLike(creation.id)}
                className="absolute bottom-2 right-2 bg-white bg-opacity-70 rounded-full px-3 py-1 flex items-center gap-1 hover:bg-opacity-90 transition"
              >
                ❤️ {creation.likes}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
