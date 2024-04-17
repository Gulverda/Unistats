import React from "react";
import icon from '../assets/Icon.png'
import icon1 from '../assets/Icon (1).png'
import icon2 from '../assets/Icon (2).png'
import icon3 from '../assets/Icon (3).png'

export default function AnnualStats() {
  return (
    <div className="w-auto max-w-full h-auto py-8 px-8 bg-white rounded-2xl flex flex-col gap-8">
      <div className="flex flex-col gap-0.5">
        <h1 className="font-tktMedium">2024 წლის მონაცემები</h1>
        <h4 className="font-tkt text-gray-700">სტატისტიკა</h4>
      </div>

      <div className="flex gap-6">
        <div className="w-36 h-34 px-4 py-3 bg-customPink rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon} alt="" srcSet="" />
          <div className="flex flex-col gap-2">
            <h2 className="font-PoppinsRegular font-semibold text-xl">250k+</h2>
            <h4 className="font-tktMedium  text-xs text-gray-500">სტუდენტი</h4>
            <h4 className="font-tktMedium text-xs text-customBlue">+8% მეტი ვიდრე 2023 წელს</h4>
          </div>
        </div>
          
        <div className="w-36 h-34 px-4 py-3 bg-customOrange rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon1} alt="" srcSet="" />
            <div className="flex flex-col gap-2">
              <h2 className="font-PoppinsRegular font-semibold text-xl">42k+</h2>
              <h4 className="font-tktMedium  text-xs text-gray-500">აბიტურიენტი</h4>
              <h4 className="font-tktMedium text-xs text-customBlue">+15% მეტი ვიდრე 2023 წელს</h4>
            </div>
        </div>


        <div className="w-36 h-34 px-4 py-3 bg-customGreen rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon2} alt="" srcSet="" />
            <div className="flex flex-col gap-2">
              <h2 className="font-PoppinsRegular font-semibold text-xl">61</h2>
              <h4 className="font-tktMedium  text-xs text-gray-500">უნივერსიტეტი</h4>
              <h4 className="font-tktMedium text-xs text-customBlue">+0% მეტი ვიდრე 2023 წელს</h4>
            </div>
        </div>

        <div className="w-36 h-34 px-4 py-3 bg-customPurple rounded-xl flex flex-col gap-3">
          <img className="w-9 h-9 " src={icon3} alt="" srcSet="" />
            <div className="flex flex-col gap-0.5">
              <h2 className="font-PoppinsRegular font-semibold text-xl">12k+</h2>
              <h4 className="font-tktMedium  text-xs text-gray-500">საერთაშორისო სტუდენტი</h4>
              <h4 className="font-tktMedium text-xs text-customBlue">+4% მეტი ვიდრე 2023 წელს</h4>
            </div>
        </div>
      </div>
    </div>
  );
}
