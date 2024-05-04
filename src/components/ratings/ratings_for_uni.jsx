import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/style_for_uniR.css";
import { CChart } from '@coreui/react-chartjs'


const Ratings_uni = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div
  className="rating">
    <div className="rating-title">
      <span style={{fontSize: "1.25rem", fontFamily: "tktMedium"}}>უნივერსიტეტების სტატისტიკა</span>
      <div style={{display:'flex', gap: "10px", alignItems:'center'}}>
        <button>
          <NavLink
            to="/Statistic"
            activeclassname="active"
            onClick={() => handleNavLinkClick("Page")}
            >
              ვრცლად
          </NavLink>
        </button>
        <div className="tooltip-box">
          <div style={{position: 'absolute', width: '450px', textAlign: "center"}}>
            <span id="tooltip">სქემა წარმოადგენს უნივერსიტეტების დასაქმების მაჩვენებლებს წლების მიხედვით</span>
          </div>
          <div className="circle">i</div>
        </div>
      </div>
    </div>
  <CChart
    type='bar'
    data={{
      labels: ['2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: 'GAU',
          backgroundColor: '#0c205D',
          borderColor: '#0c2015',
          data: [90, 99,86,79],
        },
        {
          label: 'TSU',
          backgroundColor: '#0b60b7',
          borderColor: '#0b60b7',
          data: [87, 65,78,85],
        },
        {
          label: 'EU',
          backgroundColor: '#4e18ff',
          borderColor: '#4e18ff',
          data: [25, 45,67,89],
        },
        {
          label: 'KIU',
          backgroundColor: '#3c10ea',
          borderColor: '#3c10ea',
          data: [46, 23,23,23],
        }
      ],
    }}
    options={{
      aspectRatio: 2.6
    }}
    height={200}
    width={'100%'}
    style={{ borderRadius: '16px' }} 
  />
</div>

  );
};

export default Ratings_uni;


