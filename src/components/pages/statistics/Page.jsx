import React, { useState } from "react";
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
import { faCircleExclamation, faCircleXmark, faCircleCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Page = () => {
    const universities = [
        { id: '01', img: Img1, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"', color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '02', img: Img2, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '03', img: Img3, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Not Available', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '04', img: Img4, name: 'კავკასიის უნივერსიტეტი',color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%', completionRate: '29%' },
        { id: '05', img: Img5, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '06', img: Img6, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Not Available', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '07', img: Img1, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"', color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '08', img: Img2, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '09', img: Img3, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Not Available', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '10', img: Img4, name: 'კავკასიის უნივერსიტეტი',color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '20%', completionRate: '29%' },
        { id: '11', img: Img5, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '12', img: Img6, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Not Available', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '13', img: Img1, name: 'ქართულ-ამერიკული უნივერსიტეტი "GAU"', color:'#05CD99', icon: faCircleCheck, status: 'Approved', location: 'თბილისი', students: 120, completionRate: '45%' },
        { id: '14', img: Img2, name: 'სსიპ ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი',color:'#FFCE20', icon: faCircleExclamation, status: 'Disable', location: 'თბილისი', students: 120, completionRate: '29%' },
        { id: '15', img: Img3, name: 'თბილისის თავისუფალი უნივერსიტეტი',color:'#EE5D50', icon: faCircleXmark, status: 'Not Available', location: 'თბილისი', students: 120, completionRate: '29%' },

      ];
      const students = [
        { id: '01', img: Img1, name: 'გიგი გიორგაძე',  icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '02', img: Img2, name: 'გიორგი ყაზიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '03', img: Img3, name: 'დუდა ელბაქიძე', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '04', img: Img4, name: 'ნიკოლოზ დვალიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3', gpa: '4.3' },
        { id: '05', img: Img5, name: 'ლუკა გულვერდაშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '06', img: Img1, name: 'გიგი გიორგაძე',  icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '07', img: Img2, name: 'გიორგი ყაზიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '08', img: Img3, name: 'დუდა ელბაქიძე', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '09', img: Img4, name: 'ნიკოლოზ დვალიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3', gpa: '4.3' },
        { id: '10', img: Img5, name: 'ლუკა გულვერდაშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '11', img: Img1, name: 'გიგი გიორგაძე',  icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '12', img: Img2, name: 'გიორგი ყაზიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '13', img: Img3, name: 'დუდა ელბაქიძე', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
        { id: '14', img: Img4, name: 'ნიკოლოზ დვალიშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3', gpa: '4.3' },
        { id: '15', img: Img5, name: 'ლუკა გულვერდაშვილი', icon: faEnvelope, university: 'GAU', faculty: 'ინფორმატიკა', students: 120, gpa: '4.3' },
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

      const StudentsCard = ({ students }) => {
        return (
          <div className="student-card">
            <p>{students.id}</p>
            <p className="img-box">
              <img src={students.img} alt="" />
              {students.name}
            </p>
            <p className="status">
              <FontAwesomeIcon icon={students.icon } style={{fontSize:"18px",color:'#4318FF'}}/>
            </p>
            <p className="uni">{students.university}</p>
            <p>{students.faculty}</p>
            <p className="ratingi">{students.gpa}
            </p>
          </div>
        );
      };
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false);

      const [selectedOption, setSelectedOption] = useState('უნივერსიტეტი');
      const [selectedOptionTwo, setSelectedOptionTwo] = useState('ფილტრი');


      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
      const toggleMenuTwo = () => {
        setIsMenuOpenTwo(!isMenuOpenTwo);
      };

      const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsMenuOpen(false);
      };
      const handleOptionSelectTwo = (option) => {
        setSelectedOptionTwo(option);
        setIsMenuOpenTwo(false);
      };
  return (

    <div>
      <div
        className="relative font-tktMedium flex items-center"
        style={{ width: "100%", height: "70px", background: "white", position: "fixed", paddingTop: "3px", zIndex: "2"}}
      >
        <div className="title" style={{position: "relative", marginLeft: "20px"}}>
        <svg
          width="170"
          height="56"
          viewBox="0 0 207 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M91.28 30.63V18.3H94.76V30.6C94.76 33.44 94.09 35.6 92.75 37.08C91.41 38.54 89.5 39.27 87.02 39.27C84.54 39.27 82.63 38.54 81.29 37.08C79.95 35.62 79.28 33.47 79.28 30.63V18.3H82.76V30.63C82.76 32.57 83.1 33.99 83.78 34.89C84.48 35.79 85.56 36.24 87.02 36.24C88.48 36.24 89.55 35.79 90.23 34.89C90.93 33.99 91.28 32.57 91.28 30.63ZM110.839 32.55V18.3H114.199V39H111.109L102.679 24.93V39H99.3191V18.3H102.319L110.839 32.55ZM119.072 18.3H122.552V39H119.072V18.3ZM140.795 21.42L138.155 23.31C137.555 22.49 136.915 21.91 136.235 21.57C135.575 21.23 134.725 21.06 133.685 21.06C132.605 21.06 131.765 21.3 131.165 21.78C130.585 22.24 130.295 22.9 130.295 23.76C130.295 24.66 130.625 25.36 131.285 25.86C131.965 26.36 133.115 26.79 134.735 27.15C136.995 27.65 138.615 28.37 139.595 29.31C140.575 30.25 141.065 31.59 141.065 33.33C141.065 35.09 140.455 36.52 139.235 37.62C138.015 38.72 136.275 39.27 134.015 39.27C130.535 39.27 127.955 38.14 126.275 35.88L129.005 33.99C129.685 34.79 130.385 35.37 131.105 35.73C131.845 36.07 132.755 36.24 133.835 36.24C136.335 36.24 137.585 35.32 137.585 33.48C137.585 32.58 137.245 31.87 136.565 31.35C135.885 30.83 134.715 30.39 133.055 30.03C128.895 29.17 126.815 27.08 126.815 23.76C126.815 22 127.415 20.61 128.615 19.59C129.815 18.55 131.515 18.03 133.715 18.03C136.955 18.03 139.315 19.16 140.795 21.42ZM142.044 21.33V18.3H157.434V21.33H151.494V39H148.014V21.33H142.044ZM161.936 34.71L160.526 39H156.806L164.006 18.3H167.306L174.506 39H170.816L169.406 34.71H161.936ZM168.416 31.71L165.656 23.34L162.896 31.71H168.416ZM173.89 21.33V18.3H189.28V21.33H183.34V39H179.86V21.33H173.89ZM205.19 21.42L202.55 23.31C201.95 22.49 201.31 21.91 200.63 21.57C199.97 21.23 199.12 21.06 198.08 21.06C197 21.06 196.16 21.3 195.56 21.78C194.98 22.24 194.69 22.9 194.69 23.76C194.69 24.66 195.02 25.36 195.68 25.86C196.36 26.36 197.51 26.79 199.13 27.15C201.39 27.65 203.01 28.37 203.99 29.31C204.97 30.25 205.46 31.59 205.46 33.33C205.46 35.09 204.85 36.52 203.63 37.62C202.41 38.72 200.67 39.27 198.41 39.27C194.93 39.27 192.35 38.14 190.67 35.88L193.4 33.99C194.08 34.79 194.78 35.37 195.5 35.73C196.24 36.07 197.15 36.24 198.23 36.24C200.73 36.24 201.98 35.32 201.98 33.48C201.98 32.58 201.64 31.87 200.96 31.35C200.28 30.83 199.11 30.39 197.45 30.03C193.29 29.17 191.21 27.08 191.21 23.76C191.21 22 191.81 20.61 193.01 19.59C194.21 18.55 195.91 18.03 198.11 18.03C201.35 18.03 203.71 19.16 205.19 21.42Z"
            fill="#151D48"
          />
          <rect width="56" height="56" rx="10" fill="#4318FF" />
          <mask
            id="mask0_74_36"
            maskUnits="userSpaceOnUse"
            x="11"
            y="16"
            width="36"
            height="31"
          >
            <path
              d="M31.1094 16.9209C30.341 16.5075 29.5014 16.2931 28.6511 16.2931C27.8008 16.2931 26.9612 16.5075 26.1928 16.9209L11.9288 24.5949C11.6663 24.7355 11.4465 24.9617 11.2974 25.2446C11.1484 25.5274 11.0768 25.8543 11.0918 26.1835V36.2404C11.0918 36.6811 11.246 37.1038 11.5204 37.4154C11.7948 37.727 12.167 37.9021 12.5551 37.9021C12.9432 37.9021 13.3153 37.727 13.5898 37.4154C13.8642 37.1038 14.0183 36.6811 14.0183 36.2404V28.7758L16.9449 30.4243V39.5639C16.9449 39.7825 16.983 39.9989 17.0568 40.2008C17.1306 40.4027 17.2388 40.586 17.3751 40.7404L17.4483 40.8201L17.6239 41.0029C18.5411 41.9312 19.5326 42.7601 20.5855 43.4789C22.5405 44.815 25.3646 46.2108 28.6511 46.2108C31.9376 46.2108 34.7617 44.815 36.7196 43.4789C37.7725 42.7601 38.7641 41.9312 39.6813 41.0029L39.8569 40.8201L39.9242 40.7404H39.93C40.0662 40.5854 40.174 40.4014 40.2473 40.1989C40.3206 39.9964 40.358 39.7795 40.3573 39.5605V30.4209L45.3968 27.5827C45.6432 27.4441 45.8502 27.2296 45.9941 26.9636C46.138 26.6976 46.2131 26.391 46.2106 26.0788C46.2082 25.7666 46.1284 25.4615 45.9803 25.1985C45.8322 24.9354 45.6219 24.7251 45.3734 24.5915L31.1094 16.9209ZM31.203 35.5823L37.4307 32.0727V38.826C36.7365 39.4947 35.9956 40.0983 35.2153 40.6307C33.5179 41.7873 31.2177 42.8874 28.6511 42.8874C26.0845 42.8874 23.7872 41.7906 22.0868 40.6307C21.3066 40.0983 20.5657 39.4947 19.8714 38.826V32.0727L26.0991 35.5823C27.7087 36.4863 29.5934 36.4863 31.203 35.5823ZM29.8568 19.9254L41.3933 26.1303L29.9007 32.6045C29.5123 32.823 29.0846 32.9367 28.6511 32.9367C28.2176 32.9367 27.7899 32.823 27.4015 32.6045L15.9089 26.1303L27.4454 19.9254C27.8222 19.7225 28.234 19.6173 28.6511 19.6173C29.0681 19.6173 29.48 19.7225 29.8568 19.9254Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_74_36)">
            <rect
              x="-4.51953"
              y="9.78918"
              width="33.8201"
              height="42.9255"
              fill="white"
            />
          </g>
          <mask
            id="mask1_74_36"
            maskUnits="userSpaceOnUse"
            x="19"
            y="14"
            width="28"
            height="27"
          >
            <path
              d="M22.4118 14.9727V38.3158H46.9222V40.9095H19.6885V14.9727H22.4118ZM46.8051 22.7537L38.0712 31.0717L32.6245 25.8843L25.8161 32.3685L23.8906 30.5348L32.6245 22.2168L38.0712 27.4042L44.8796 20.92L46.8051 22.7537Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_74_36)">
            <rect
              x="29.2378"
              y="12.4968"
              width="24.0505"
              height="36.7832"
              fill="white"
            />
          </g>
        </svg>
        </div>
        <h1 style={{fontFamily: "tkt", marginLeft: "80px", fontSize: "22px"}}>სტატისტიკა</h1>
      </div>
    <div className="containeri">
      
      <div className="flex">
        <Sidebar />
      </div>
      <div className="box" style={{ boxShadow: "0px 0px 10px rgba(194, 212, 255, 0.7)"}}>
        <div className="head-of-content">
            <div className="burger"  onClick={toggleMenu}>
                <h3 className="select">{selectedOption}</h3>
                <span className="arrow"><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#251D35" />
                </svg>
                </span>
            </div>
            
            <div className="burger b_two" onClick={toggleMenuTwo} style={{textAlign: "right"}}>
                <h3 className="select">{selectedOptionTwo}</h3>
                <span className="arrow"><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.792893C0.683418 0.402369 1.31658 0.402369 1.70711 0.792893L5 4.08579L8.29289 0.792893C8.68342 0.402369 9.31658 0.402369 9.70711 0.792893C10.0976 1.18342 10.0976 1.81658 9.70711 2.20711L5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711L0.292893 2.20711C-0.0976311 1.81658 -0.0976311 1.18342 0.292893 0.792893Z" fill="#251D35" />
                </svg>
                </span>
            </div>
        </div>
        {isMenuOpen && (
        <div className={`menu-content ${isMenuOpen ? 'open' : ''}`}>
          <ul>
          <li onClick={() => handleOptionSelect('უნივერსიტეტი')}>უნივერსიტეტი</li>
          <li onClick={() => handleOptionSelect('სტუდენტი')}>სტუდენტი</li>
        </ul>
        </div>
      )}
       {isMenuOpenTwo && (
        <div className={`menu-content-tow ${isMenuOpen ? 'open' : ''}`}>
          <ul>
          <li onClick={() => handleOptionSelectTwo('ფილტრი')}>ფილტრი...</li>
          <li onClick={() => handleOptionSelectTwo('დასაქმების მაჩვენებელი')}>დასაქმების მაჩვენებელი</li>
          <li onClick={() => handleOptionSelectTwo('სტუდენტთა რაოდენობა')}>სტუდენტთა რაოდენობა</li>
          <li onClick={() => handleOptionSelectTwo('გაცვლით პროგრამები')}>გაცვლით პროგრამები</li>
          <li onClick={() => handleOptionSelectTwo('დამთავრებულთა რაოდენობა')}>დამთავრებულთა რაოდენობა</li>
        </ul>
        </div>
      )}
        {selectedOption === "უნივერსიტეტი" && (
          <div className="box_child">
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
          </div>
        )}

        {selectedOption === "სტუდენტი" && (
                  <div className="box_child">
                    <div className="table-two">
                      <span>#</span>
                      <span>სტუდენტი</span>
                      <span>საკონტაქტო</span>
                      <span>უნივერსიტეტი</span>
                      <span>ფაკულტეტი</span>
                      <span>GPA</span>
                    </div>
                    <div className="contenti">
                      {students.map((students) => (
                        <StudentsCard key={students.id} students={students} />
                      ))}
                    </div>
                  </div>
          )}
      </div>
    </div>
    </div>
  );
};

export default Page;
