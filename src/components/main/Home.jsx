import React from "react";
import AnnualStats from "../annualStats.jsx";
import VideoPlayer from "../videoPlayer.jsx";
import Map from "../Map.jsx";
import Sidebar from "../nav/nav.jsx";
import Ratings_uni from "../ratings/ratings_for_uni.jsx";
import Ratings_for_student from "../ratings/ratings_for_student.jsx";
import Calendar from "../calendar/Calendar.jsx";
import "../main/style_for_home.css";

export default function Home() {
  return (
    <div className=" h-screen bg-customGray flex flex-row">
      <div
        className="absolute font-tktMedium flex items-center"
        style={{ width: "100%", height: "70px", background: "white" }}
      >
        <h1 className="mx-72 text-customFontSize">მთავარი</h1>
      </div>
      <div className=" flex">
        <Sidebar />
      </div>
      <div style={{display: "flex", justifyContent: "center", width: "100%", height: "1150px"}}>
      <div className="div1">
        <div className="grid-for-mains">
          <div className="grid-for-mains-child1">
            <AnnualStats />
            <VideoPlayer />
            <Ratings_uni />
          </div>
          <div className="grid-for-mains-child2">
            <Calendar/>
            <Ratings_for_student/>
            <Map/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
