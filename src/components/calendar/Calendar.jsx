import React, { useState } from "react";
import "./style_for_cal.css";
import icon from "../../assets/calendar.svg";
import { NavLink } from "react-router-dom";

const Calendar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="bg-white shadow-md justify-start md:justify-center rounded-3xl p-5 px-2 calendari">
      <NavLink
        to="/Calendar"
        activeclassname="active"
        onClick={() => handleNavLinkClick("Calendar")}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
            position: "relative",
            top: "-7px",
          }}
        >
          <img
            className="w-6 h-6 "
            src={icon}
            alt=""
            style={{ position: "absolute" }}
          />
        </div>
      </NavLink>
      <div style={{ display: "flex" }}>
        <div className="flex group  rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> ორშ </p>
              <p className="text-gray-900  mt-3 transition-all"> 27 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> სამ </p>
              <p className="text-gray-900  mt-3 transition-all"> 28 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> ოთხ </p>
              <p className="text-gray-900  mt-3 transition-all"> 29 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-3xl mx-1 cursor-pointer justify-center relative w-16 color active_text">
          <span className="flex h-2 w-2 absolute bottom-1.5">
            <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-blue-400"></span>
            <span className="relative inline-flex rounded-full h-full w-3 bg-blue-100"></span>
          </span>
          <div className="flex items-center px-4 my-2 py-4">
            <div className="text-center">
              <p className="text-gray-100"> ხუთ </p>
              <p className="text-gray-100 mt-3"> 30 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> პარ </p>
              <p className="text-gray-900  mt-3 transition-all"> 31 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> შაბ </p>
              <p className="text-gray-900  mt-3 transition-all"> 01 </p>
            </div>
          </div>
        </div>

        <div className="flex group rounded-full mx-1 transition-all cursor-pointer justify-center w-16">
          <div className="flex items-center px-4 py-4">
            <div className="text-center">
              <p className="text-gray-900  transition-all dge"> კვი </p>
              <p className="text-gray-900  mt-3 transition-all"> 02 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
