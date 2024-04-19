import React from "react";
import AnnualStats from "./annualStats.jsx";
import VideoPlayer from "./videoPlayer.jsx";
import Map from "./Map.jsx";
import Sidebar from "./nav/nav.jsx";
import Ratings_uni from "./ratings/ratings_for_uni.jsx";

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
      <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // paddingRight: "180px",
          paddingTop: "120px",
          maxWidth: "1440px",
          width: "100%"
        }}
      >
        <div className="grid-for-mains"
          style={{
            // maxWidth: "1440px",
            width: "100%",
            display: "flex",
            gap: "20px",
            padding: "0 20px",
            justifyContent: "space-around"
          }}
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: "column",
              gap: "25px",
              // marginTop: "100px"
            }}
          >
            <AnnualStats />
            <VideoPlayer />
            <Ratings_uni />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Map/>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
