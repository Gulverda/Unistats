import React from "react";
import Sidebar from "../../nav/nav";
import Img1 from "./img/caucasus_Logo-1.png";
import Img2 from "./img/caucasus_Logo-2.png";
import Img3 from "./img/caucasus_Logo.png";
import Img4 from "./img/Gau_Logo-1.png";
import Img5 from "./img/Gau_Logo-2.png";
import Img6 from "./img/Gau_Logo-3.png";
import Img7 from "./img/Gau_Logo.png";
import Img9 from "./img/Iiliauni_Logo-2.png";
import Img10 from "./img/Tsu_Logo-3.png";

import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation, faCircleXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    const universities = [
        { id: '01', img: Img1, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"', color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '02', img: Img2, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '03', img: Img3, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Error', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '04', img: Img4, name: 'კავკასიის უნივერსიტეტი',color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%', completionRate: '29%' },
        { id: '05', img: Img5, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"',color:'#FFCE20', icon: faCircleExclamation, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '06', img: Img6, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '07', img: Img7, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#05CD99', icon: faCircleCheck, status: 'Error', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '08', img: Img7, name: 'კავკასიის უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%' },
        { id: '09', img: Img9, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: 10, img: Img10, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#05CD99', icon: faCircleCheck, status: 'Error', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: 11, img: Img9, name: 'კავკასიის უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%', completionRate: '29%' },
        { id: 12, img: Img7, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"',color:'#FFCE20', icon: faCircleExclamation, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: 13, img: Img7, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: 14, img: Img6, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Error', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: 15, img: Img4, name: 'კავკასიის უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%' },
      ];

      const UniversityCard = ({ university }) => {
        return (
          <div className="university-card">
            <p>{university.id}</p>
            <p className="img-box">
              <img src={university.img} alt="" />
              {university.name}
            </p>
            <p className="status">
              <FontAwesomeIcon icon={university.icon } style={{fontSize:"28px", color: university.color}}/>
              {university.status}
              </p>
            <p>{university.location}</p>
            <p>{university.students}</p>
            <p className="ratingi">{university.completionRate}
            </p>
          </div>
        );
      };
  return (
    <div className="containeri">
      <div
        className="absolute font-tktMedium flex items-center header">
        <h1 className="mx-72 title">სტატისტიკა</h1>
      </div>
      <div className="flex">
        <Sidebar />
      </div>
      <div className="box">
        <div className="head-of-content">
            <div className="burger">
                <h3>უნივერსიტეტი</h3>
                <span className="arrow"><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#251D35" />
                </svg>
                </span>
            </div>
            <div className="burger b_two" style={{textAlign: "right"}}>
                <h3>ფილტრი</h3>
                <span className="arrow"><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#251D35" />
                </svg>
                </span>
            </div>
        </div>
        <dir className="box_child">
            <div className="table">
                <span>#</span>
                <span>უნივერსიტეტი</span>
                <span>მდებარეობა</span>
                <span>უ.ს.დ კოდი</span>
                <span className="text">დასაქმების მაჩვენებელი</span>
            </div>
            <div className="contenti">
              {universities.map((university) => (
                  <UniversityCard key={university.id} university={university} />
              ))}
            </div>
        </dir>
      </div>
    </div>
  );
};

export default Page;
