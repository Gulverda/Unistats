import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../../src/App.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div
        className="burger-menu"
        onClick={toggleSidebar}
        style={{ position: "absolute", right: "0" }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
      <h1>
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
      </h1>
      <ul>
        <li>
          <NavLink
            to="/home"
            activeclassname="active"
            onClick={() => handleNavLinkClick("home")}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_1_3227"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect width="32" height="32" fill="white" />
              </mask>
              <g mask="url(#mask0_1_3227)">
                <path
                  d="M13.6702 7.84582L14.0414 13.3658L14.2257 16.1402C14.2277 16.4255 14.2723 16.709 14.3586 16.9814C14.5811 17.5102 15.1166 17.8462 15.6991 17.8227L24.5754 17.242C24.9598 17.2358 25.331 17.3795 25.6073 17.6418C25.8375 17.8603 25.9862 18.1462 26.0331 18.4536L26.0489 18.6403C25.6815 23.7266 21.9459 27.969 16.8702 29.064C11.7944 30.1591 6.58947 27.8458 4.08127 23.3799C3.35818 22.0824 2.90652 20.6564 2.75283 19.1854C2.68863 18.7499 2.66036 18.31 2.6683 17.87C2.66036 12.417 6.54362 7.70265 11.9794 6.56613C12.6337 6.46425 13.275 6.8106 13.5374 7.40741C13.6053 7.54562 13.6501 7.69365 13.6702 7.84582Z"
                  fill="#737791"
                />
                <path
                  opacity="0.4"
                  d="M29.3337 13.083L29.3244 13.1265L29.2975 13.1897L29.3012 13.3632C29.2873 13.5929 29.1985 13.814 29.0457 13.9926C28.8864 14.1786 28.6688 14.3053 28.4292 14.3545L28.2831 14.3745L18.042 15.0381C17.7013 15.0717 17.3621 14.9618 17.1089 14.736C16.8977 14.5476 16.7628 14.2934 16.7247 14.0196L16.0373 3.79337C16.0253 3.7588 16.0253 3.72132 16.0373 3.68673C16.0467 3.40485 16.1708 3.13841 16.3819 2.94693C16.5928 2.75545 16.8733 2.65489 17.1604 2.66772C23.2403 2.8224 28.3501 7.19435 29.3337 13.083Z"
                  fill="#737791"
                />
              </g>
            </svg>{" "}
            მთავარი
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Statistic"
            activeclassname="active"
            onClick={() => handleNavLinkClick("Page")}
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 13.3333H5.66667V25.3333H3V13.3333ZM24.3333 8H27V25.3333H24.3333V8ZM13.6667 0H16.3333V25.3333H13.6667V0Z"
                fill="#737791"
              />
            </svg>{" "}
            სტატისტიკა
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/calendar"
            activeclassname="active"
            onClick={() => handleNavLinkClick("services")}
          >
            <svg
              width="23"
              height="25"
              viewBox="0 0 23 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.25 1.13636C17.25 0.508767 16.7351 0 16.1 0C15.4649 0 14.95 0.508767 14.95 1.13636V2.27273H8.05V1.13636C8.05 0.508767 7.53513 0 6.9 0C6.26487 0 5.75 0.508767 5.75 1.13636V2.27273H3.45C1.54462 2.27273 0 3.79903 0 5.68182V21.5909C0 23.4737 1.54462 25 3.45 25H19.55C21.4554 25 23 23.4737 23 21.5909V5.68182C23 3.79903 21.4554 2.27273 19.55 2.27273H17.25V1.13636ZM20.7 9.09091V5.68182C20.7 5.05422 20.1851 4.54545 19.55 4.54545H17.25V5.68182C17.25 6.30941 16.7351 6.81818 16.1 6.81818C15.4649 6.81818 14.95 6.30941 14.95 5.68182V4.54545H8.05V5.68182C8.05 6.30941 7.53513 6.81818 6.9 6.81818C6.26487 6.81818 5.75 6.30941 5.75 5.68182V4.54545H3.45C2.81487 4.54545 2.3 5.05422 2.3 5.68182V9.09091H20.7ZM2.3 11.3636H20.7V21.5909C20.7 22.2185 20.1851 22.7273 19.55 22.7273H3.45C2.81487 22.7273 2.3 22.2185 2.3 21.5909V11.3636Z"
                fill="#737791"
              />
            </svg>{" "}
            კალენდარი
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeclassame="active"
            onClick={() => handleNavLinkClick("contact")}
          >
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1C6.96243 1 4.5 3.46243 4.5 6.5C4.5 9.53757 6.96243 12 10 12C13.0376 12 15.5 9.53757 15.5 6.5C15.5 3.46243 13.0376 1 10 1ZM6.5 6.5C6.5 4.567 8.067 3 10 3C11.933 3 13.5 4.567 13.5 6.5C13.5 8.433 11.933 10 10 10C8.067 10 6.5 8.433 6.5 6.5Z"
                fill="#737791"
              />
              <path
                d="M16.5 1C15.9477 1 15.5 1.44772 15.5 2C15.5 2.55228 15.9477 3 16.5 3C18.433 3 20 4.567 20 6.5C20 8.433 18.433 10 16.5 10C15.9477 10 15.5 10.4477 15.5 11C15.5 11.5523 15.9477 12 16.5 12C19.5376 12 22 9.53757 22 6.5C22 3.46243 19.5376 1 16.5 1Z"
                fill="#737791"
              />
              <path
                d="M20.0837 15.0157C20.3048 14.5096 20.8943 14.2786 21.4004 14.4997C23.5174 15.4246 25 17.538 25 20V22C25 22.5523 24.5523 23 24 23C23.4477 23 23 22.5523 23 22V20C23 18.3613 22.0145 16.9505 20.5996 16.3324C20.0935 16.1113 19.8625 15.5217 20.0837 15.0157Z"
                fill="#737791"
              />
              <path
                d="M7 14C3.68629 14 1 16.6863 1 20V22C1 22.5523 1.44772 23 2 23C2.55228 23 3 22.5523 3 22V20C3 17.7909 4.79086 16 7 16H13C15.2091 16 17 17.7909 17 20V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V20C19 16.6863 16.3137 14 13 14H7Z"
                fill="#737791"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1C6.96243 1 4.5 3.46243 4.5 6.5C4.5 9.53757 6.96243 12 10 12C13.0376 12 15.5 9.53757 15.5 6.5C15.5 3.46243 13.0376 1 10 1ZM6.5 6.5C6.5 4.567 8.067 3 10 3C11.933 3 13.5 4.567 13.5 6.5C13.5 8.433 11.933 10 10 10C8.067 10 6.5 8.433 6.5 6.5Z"
                stroke="#737791"
                strokeLinecap="round"
              />
              <path
                d="M16.5 1C15.9477 1 15.5 1.44772 15.5 2C15.5 2.55228 15.9477 3 16.5 3C18.433 3 20 4.567 20 6.5C20 8.433 18.433 10 16.5 10C15.9477 10 15.5 10.4477 15.5 11C15.5 11.5523 15.9477 12 16.5 12C19.5376 12 22 9.53757 22 6.5C22 3.46243 19.5376 1 16.5 1Z"
                stroke="#737791"
                strokeLinecap="round"
              />
              <path
                d="M20.0837 15.0157C20.3048 14.5096 20.8943 14.2786 21.4004 14.4997C23.5174 15.4246 25 17.538 25 20V22C25 22.5523 24.5523 23 24 23C23.4477 23 23 22.5523 23 22V20C23 18.3613 22.0145 16.9505 20.5996 16.3324C20.0935 16.1113 19.8625 15.5217 20.0837 15.0157Z"
                stroke="#737791"
                strokeLinecap="round"
              />
              <path
                d="M7 14C3.68629 14 1 16.6863 1 20V22C1 22.5523 1.44772 23 2 23C2.55228 23 3 22.5523 3 22V20C3 17.7909 4.79086 16 7 16H13C15.2091 16 17 17.7909 17 20V22C17 22.5523 17.4477 23 18 23C18.5523 23 19 22.5523 19 22V20C19 16.6863 16.3137 14 13 14H7Z"
                stroke="#737791"
                strokeLinecap="round"
              />
            </svg>{" "}
            ჩვენს შესახებ
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/FAQ"
            activeclassname="active"
            onClick={() => handleNavLinkClick("FAQ")}
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0H2.66667C1.2 0 0 1.2 0 2.66667V26.6667L5.33333 21.3333H24C25.4667 21.3333 26.6667 20.1333 26.6667 18.6667V2.66667C26.6667 1.2 25.4667 0 24 0ZM24 18.6667H4.26667L2.66667 20.2667V2.66667H24V18.6667ZM20 12H17.3333V9.33333H20V12ZM14.6667 12H12V9.33333H14.6667V12ZM9.33333 12H6.66667V9.33333H9.33333"
                fill="#737791"
              />
            </svg>{" "}
            FAQ
          </NavLink>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Sidebar;
