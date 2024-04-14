import React from "react";

export default function AnnualStats() {
  return (
    <div className="w-auto max-w-full h-auto py-8 px-8 bg-white rounded-lg flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="font-tktMedium">2024 წლის მონაცემები</h1>
        <h2 className="font-tkt text-gray-700">სტატისტიკა</h2>
      </div>

      <div className="flex gap-6">
        <div className="w-32 h-32 bg-customPink rounded-xl"></div>
        <div className="w-32 h-32 bg-customOrange rounded-xl"></div>
        <div className="w-32 h-32 bg-customGreen rounded-xl"></div>
        <div className="w-32 h-32 bg-customPurple rounded-xl"></div>
      </div>
    </div>
  );
}
