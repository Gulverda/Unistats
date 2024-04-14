import React from "react";
import AnnualStats from "./annualStats.jsx"; 

export default function Home() {
  return (
    <div className="w-full h-screen bg-customGray flex">
      <div className="max-w-screen-lg mx-auto py-16">
        <AnnualStats />
      </div>
    </div>
  );
}
