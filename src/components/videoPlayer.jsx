import React from 'react';
import photo from '../assets/BannerPhoto.png';
import player from '../assets/Play_Button.svg'

export default function VideoPlayer() {
    return (
        <div className="relative">
            <img
                src={photo}
                alt="Banner Photo"
                className="w-default h-auto bg-cover rounded-xl z-0"
            />
            <h1 className="font-tkt text-white absolute top-0 left-0 z-10 py-12 px-7 text-2xl">
                რა შეუძლია ჩვენს <br /> პლატფორმას?
            </h1>
            <h1 className="font-tkt text-customGray absolute top-20 left-0 z-11 py-12 px-7 text-sm leading-relaxed">
                აღმოჩინე ახალი სტატისტიკები და <br /> გაიმარტივე სტუდენტური არჩევანი
            </h1>
            <button className='font-tktMedium absolute top-52 bg-white py-3 px-6 rounded-xl left-7 z-11 text-sm h-auto'>
                შეიტყვე მეტი
            </button>
            <img src={player} alt="" className='absolute top-52 py-1 left-48 cursor-pointer' />
        </div>
    );
}
