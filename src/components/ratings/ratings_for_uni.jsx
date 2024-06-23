import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "../ratings/css/style_for_uniR.css";
import { NavLink } from "react-router-dom";

export default function Recharts() {
  const data = [
    { year: "2021", GAU: 90, TSU: 87, EU: 25, KIU: 46, STU: 44 },
    { year: "2022", GAU: 99, TSU: 65, EU: 45, KIU: 23, STU: 44 },
    { year: "2023", GAU: 86, TSU: 78, EU: 67, KIU: 23, STU: 44 },
    { year: "2024", GAU: 79, TSU: 85, EU: 89, KIU: 23, STU: 44 },
    { year: "2025", GAU: 79, TSU: 85, EU: 89, KIU: 33, STU: 44 },
    { year: "2026", GAU: 79, TSU: 85, EU: 89, KIU: 53, STU: 44 },
    { year: "2027", GAU: 79, TSU: 85, EU: 89, KIU: 73, STU: 44 },
  ];

  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="row">
      <div className="rating-title" style={{position: "relative"}}>
        <span style={{ fontSize: "1.25rem", fontFamily: "tktMedium" }}>
          უნივერსიტეტების სტატისტიკა
        </span>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", position: "absolute", right: "0"}}>
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
            <div
              style={{
                position: "absolute",
                width: "450px",
                textAlign: "center",
              }}
            >
              <span id="tooltip">
                სქემა წარმოადგენს უნივერსიტეტების დასაქმების მაჩვენებლებს წლების
                მიხედვით
              </span>
            </div>
            <div className="circle">i</div>
          </div>
        </div>
      </div>

      <div className="section col-md-6">
        <div className="section-content">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={data}
              margin={{ top: 15, right: 0, bottom: 15, left: 0 }}
            >
              <Tooltip />
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend />
              <Line type="monotone" dataKey="GAU" stroke="#0c2015" name="GAU" />
              <Line type="monotone" dataKey="TSU" stroke="#0b60b7" name="TSU" />
              <Line type="monotone" dataKey="EU" stroke="#4e18ff" name="EU" />
              <Line type="monotone" dataKey="KIU" stroke="#3c10ea" name="KIU" />
              <Line type="monotone" dataKey="STU" stroke="#4f5eae" name="STU" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div className="section col-md-6">
        <h3 className="section-title">Bar Chart</h3>
        <div className="section-content">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Tooltip />
              <Legend />
              <Bar dataKey="GAU" fill="#0c205D" name="GAU" />
              <Bar dataKey="TSU" fill="#0b60b7" name="TSU" />
              <Bar dataKey="EU" fill="#4e18ff" name="EU" />
              <Bar dataKey="KIU" fill="#3c10ea" name="KIU" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}
      {/* </div> */}
    </div>
  );
}
