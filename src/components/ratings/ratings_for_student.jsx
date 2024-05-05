import React, { useState } from "react";
import "./css/style_SRating.css";
import img1 from "../../assets/profile_imgs/image.svg";
import img2 from "../../assets/profile_imgs/Image1.svg";
import img3 from "../../assets/profile_imgs/Rectangle 346-1.svg";
import img4 from "../../assets/profile_imgs/Rectangle 346-2.svg";
import img5 from "../../assets/profile_imgs/Rectangle 346-3.svg";
import img6 from "../../assets/profile_imgs/Rectangle 346-4.svg";
import img7 from "../../assets/profile_imgs/Rectangle 346-5.svg";

const Ratings_for_student = () => {


  return (
    <div className="rating_div">
      {/* top */}
      <div className="forshadow">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div className="top">
            <p>რეიტინგი</p>
              
              <button>ვრცლად</button>
          </div>
        </div>
        <table>
          <thead>
            <tr className="theads">
              <th style={{ width: "45%" }}>სტუდენტი</th>
              <th style={{ width: "35%" }}>უნივერსიტეტი</th>
              <th>GPA</th>
            </tr>
          </thead>
        </table>
      </div>
      {/* content */}

      <table>
        <tbody>
          <tr className="contents">
            <td className="name">
              <img src={img7} />
              Iuraa.TopG
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">13.00</td>
          </tr>
          <tr className="contents">
            <td className="name">
              <img src={img1} />
              jaba.aggggni
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">4.3</td>
          </tr>
          <tr className="contents">
            <td className="name">
              <img src={img2} />
              jaba.aggggni
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">4.3</td>
          </tr>
          <tr className="contents">
            <td className="name">
              <img src={img3} />
              jaba.aggggni
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">4.3</td>
          </tr>
          <tr className="contents">
            <td className="name">
              <img src={img4} />
              jaba.aggggni
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">4.3</td>
          </tr>
          <tr className="contents">
            <td className="name">
              <img src={img6} />
              jaba.aggggni
            </td>
            <td className="uni">GAU</td>
            <td className="gpa">4.3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ratings_for_student;
