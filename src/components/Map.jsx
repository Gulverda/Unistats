import React from 'react'
import Map_img from "../assets/Map_img.svg";

const Map = () => {
    return (
      <div style={{ width: '520px', height: '351px' }} className="bg-white rounded-2xl box-border p-2 mx-auto mt-10 mb-10">
          <p className="text-xl font-medium text-black mt-5 ml-5 font-tktMedium">უნივერსიტეტები საქართველოში</p>
          <div className="w-full, h-full flex justify-center mt-5">
            <img className='w-5/6 h-5/6' src={Map_img} alt="" />
          </div>
      </div>
    )
}

export default Map