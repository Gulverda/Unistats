import React, { useState, useEffect } from "react";
import photo from "../assets/BannerPhoto.png";
import player from "../assets/samkutxedi.svg";
import video from "../assets/video.mp4";
import { NavLink } from "react-router-dom";

export default function VideoPlayer() {
  const [isClicked, setIsClicked] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(true);

  useEffect(() => {
    let timer;
    if (isClicked) {
      timer = setTimeout(() => {
        setShowCloseButton(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  const handlePlayerClick = () => {
    setIsClicked(true);
  };

  const handleCloseClick = () => {
    setIsClicked(false);
    setShowCloseButton(true);
  };

  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="relative" style={{ width: "100%", height: "auto", minHeight: "285px" }}>
      {isClicked ? (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
          <div className="relative z-30 w-full h-full max-h-screen max-w-screen flex justify-center items-center">
            <video
              src={video}
              controls
              autoPlay
              className="w-full h-full object-cover rounded-xl"
              style={{ maxHeight: "90vh", maxWidth: "90vw" }}
            />
            <button
              onClick={handleCloseClick}
              className={`absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center z-40 transition-opacity duration-300 ${
                showCloseButton ? "opacity-100" : "opacity-0 hover:opacity-100"
              }`}
            >
              &times;
            </button>
          </div>
        </div>
      ) : (
        <>
          <img
            src={photo}
            alt="Banner Photo"
            className="w-full h-auto bg-cover rounded-xl z-10"
            style={{ minHeight: "285px" }}
          />

          <button
            onClick={handlePlayerClick}
            className="w-9 h-9 border-2 rounded-full border-white flex justify-center items-center absolute left-48 cursor-pointer heartbeat"
            style={{ bottom: "41px" }}
          >
            <img src={player} alt="play" />
          </button>

          <h1 className="font-tkt text-white absolute top-0 left-0 z-10 py-12 px-7 text-2xl">
            რა შეუძლია ჩვენს <br /> პლატფორმას?
          </h1>
          <h1 className="font-tkt text-customGray absolute top-20 left-0 z-11 py-12 px-7 text-sm leading-relaxed">
            აღმოჩინე ახალი სტატისტიკები და <br /> გაიმარტივე სტუდენტური არჩევანი
          </h1>
          <NavLink
            to="/aboutUs"
            activeclassname="active"
            onClick={() => handleNavLinkClick("AboutUs")}
          >
            <button className="font-tktMedium absolute top-52 bg-white py-3 px-6 rounded-xl left-7 z-11 text-sm h-auto">
              შეიტყვე მეტი
            </button>
          </NavLink>
        </>
      )}
    </div>
  );
}
