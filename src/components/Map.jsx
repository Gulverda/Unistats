import React from 'react'
import Map_img from "../assets/Map_img.svg";

const Map = () => {
    return (
      <div style={{ width: '100%', height: '351px', boxShadow: "0px 4px 10px 0px #E1EAFF", paddingBottom:"3 0px" }} className="bg-white rounded-2xl box-border p-2 mx-auto mb-10">
          <p className="text-xl font-medium text-black mt-5 ml-5 font-tktMedium">უნივერსიტეტები საქართველოში</p>
          <div className="w-full, h-full flex justify-center mt-5">
            <img className='w-5/6 h-5/6' src={Map_img} alt="" />
          </div>
      </div>
    )
}

export default Map
