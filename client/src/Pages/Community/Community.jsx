import React, { useState } from "react";

const Community = () => {
  const [creations, setCreations] = useState([
    {
      id: 1,
      src: "/mnt/data/eeaee0e2-3aee-4fa1-8768-8c8650681a62.png", // your uploaded image
      likes: 2,
    },
    {
      id: 2,
      src: "https://i.ibb.co/k3F9wzR/bike-boy.png", // replace with actual URL
      likes: 2,
    },
    {
      id: 3,
      src: "https://i.ibb.co/0GjV6Qy/flying-car-boy.png", // replace with actual URL
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
