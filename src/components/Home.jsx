import React from "react";
import AnnualStats from "./annualStats.jsx";
import VideoPlayer from "./videoPlayer.jsx";
import Map from "./Map.jsx";
import Sidebar from "./nav/nav.jsx";

export default function Home() {
  return (
    <div className="w-full h-screen bg-customGray flex flex-row items-center">
        <div className="absolute">
        <Sidebar />
        </div>
    </div>
    <div className="w-full h-screen bg-customGray flex flex-col items-center">
      <div className="max-w-screen-lg mx-auto py-16">
        <AnnualStats />
      </div>
      <div>
        <VideoPlayer />
      </div>

      <div>
        <Map />
      </div>
    </div>
   </div>
  );
}
