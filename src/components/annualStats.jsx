import React from "react";
import icon from "../assets/Icon.png";
import icon1 from "../assets/Icon (1).png";
import icon2 from "../assets/Icon (2).png";
import icon3 from "../assets/Icon (3).png";
import CountUp from "react-countup";

export default function AnnualStats() {
  return (
    <div className="w-auto max-w-full h-auto py-5 px-5 bg-white rounded-2xl flex flex-col gap-5">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-tktMedium text-xl">2024 წლის მონაცემები</h1>
        <h4 className="font-tkt text-gray-700">სტატისტიკა</h4>
      </div>

      <div className="for-grid flex gap-9">
        <div className="child-for-grid w-36 h-34 px-4 py-3 bg-customPink rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon} alt="" srcSet="" />
          <div className="flex flex-col gap-2">
            <div className="font-PoppinsRegular font-semibold text-xl">
              <CountUp start={0} end={250} duration={2}></CountUp>
              K+
            </div>
            <h4 className="font-tktMedium  text-xs text-gray-500">სტუდენტი</h4>
            <h4 className="font-tktMedium text-xs text-customBlue">
              +8% მეტი ვიდრე 2023 წელს
            </h4>
          </div>
        </div>

        <div className="child-for-grid w-36 h-34 px-4 py-3 bg-customOrange rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon1} alt="" srcSet="" />
          <div className="flex flex-col gap-2">
            <div className="font-PoppinsRegular font-semibold text-xl">
              <CountUp start={0} end={42} duration={2}></CountUp>
              K+
            </div>

            <h4 className="font-tktMedium  text-xs text-gray-500">
              აბიტურიენტი
            </h4>
            <h4 className="font-tktMedium text-xs text-customBlue">
              +15% მეტი ვიდრე 2023 წელს
            </h4>
          </div>
        </div>

        <div className="child-for-grid w-36 h-34 px-4 py-3 bg-customGreen rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon2} alt="" srcSet="" />
          <div className="flex flex-col gap-2">
            <CountUp
              start={0}
              end={61}
              duration={2}
              className="font-PoppinsRegular font-semibold text-xl"
            >
              {/* <h2 className="font-PoppinsRegular font-semibold text-xl">61</h2> */}
            </CountUp>
            <h4 className="font-tktMedium  text-xs text-gray-500">
              უნივერსიტეტი
            </h4>
            <h4 className="font-tktMedium text-xs text-customBlue">
              +0% მეტი ვიდრე 2023 წელს
            </h4>
          </div>
        </div>

        <div className="child-for-grid w-36 h-34 px-4 py-3 bg-customPurple rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon3} alt="" srcSet="" />
          <div className="flex flex-col gap-0.5">
            <div className="font-PoppinsRegular font-semibold text-xl">
              <CountUp start={0} end={12} duration={2}></CountUp>
              K+
            </div>
            <h4 className="font-tktMedium  text-xs text-gray-500">
              საერთაშორისო სტუდენტი
            </h4>
            <h4 className="font-tktMedium text-xs text-customBlue">
              +4% მეტი ვიდრე 2023 წელს
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
