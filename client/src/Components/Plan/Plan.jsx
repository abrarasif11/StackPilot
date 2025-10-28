import { PricingTable } from "@clerk/clerk-react";
import React from "react";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center">
        <h2 className="text-slate-700 font-semibold text-[42px]">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 font max-w-lg mx-auto">
          Start free and scale effortlessly as you grow choose the perfect plan
          to power your content creation.
        </p>
      </div>
      <div className="mt-14 max-sm:mx-8">
        <PricingTable />
      </div>
    </div>
  );
};

export default Plan;
