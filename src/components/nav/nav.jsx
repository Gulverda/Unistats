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
    <div>
      <div
        className="burger-menu"
        onClick={toggleSidebar}
        style={{ position: "fixed", right: "0", zIndex: "3" }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        style={{ position: "fixed" }}
      >
        <ul style={{ marginTop: "80px", zIndex: "2" }}>
          <ul />
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
              to="/aboutUs"
              activeclassame="active"
              onClick={() => handleNavLinkClick("aboutUs")}
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
              ჩვენ შესახებ
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

        <div className="sidebar_footer">
          <div
            className="socials"
            style={{
              position: "absolute",
              bottom: "60px",
              left: "0",
              right: "0",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              gap: "14px",
            }}
          >
            <a
              href="
https://www.facebook.com/profile.php?id=61559932766757&mibextid=ZbWKwL"
            >
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9997 0.917603C6.71567 0.917603 0 7.65807 0 15.9727C0 23.0329 4.8431 28.9574 11.3764 30.5846V20.5735H8.28343V15.9727H11.3764V13.9902C11.3764 8.86609 13.6869 6.491 18.6992 6.491C19.6496 6.491 21.2894 6.67829 21.9602 6.86497V11.0352C21.6062 10.9979 20.9912 10.9792 20.2274 10.9792C17.768 10.9792 16.8177 11.9145 16.8177 14.3455V15.9727H21.7172L20.8754 20.5735H16.8177V30.9176C24.2449 30.0173 30 23.6701 30 15.9727C29.9994 7.65807 23.2837 0.917603 14.9997 0.917603Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/_gargari/">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0088 3.6193C19.019 3.6193 19.4938 3.63688 21.0709 3.70721C22.5366 3.77168 23.3281 4.01782 23.8558 4.22294C24.5534 4.49252 25.0576 4.82071 25.5794 5.3423C26.1071 5.86974 26.4295 6.36789 26.6992 7.06529C26.9044 7.59273 27.1507 8.38977 27.2152 9.84903C27.2855 11.4314 27.3031 11.9061 27.3031 15.9088C27.3031 19.9174 27.2855 20.3921 27.2152 21.9686C27.1507 23.4337 26.9044 24.2249 26.6992 24.7523C26.4295 25.4497 26.1012 25.9537 25.5794 26.4753C25.0518 27.0028 24.5534 27.3251 23.8558 27.5947C23.3281 27.7998 22.5308 28.0459 21.0709 28.1104C19.488 28.1807 19.0131 28.1983 15.0088 28.1983C10.9986 28.1983 10.5237 28.1807 8.94665 28.1104C7.48095 28.0459 6.68947 27.7998 6.16181 27.5947C5.46414 27.3251 4.95994 26.9969 4.43815 26.4753C3.91049 25.9479 3.58804 25.4497 3.31835 24.7523C3.11315 24.2249 2.86691 23.4279 2.80242 21.9686C2.73207 20.3863 2.71448 19.9115 2.71448 15.9088C2.71448 11.9002 2.73207 11.4255 2.80242 9.84903C2.86691 8.3839 3.11315 7.59273 3.31835 7.06529C3.58804 6.36789 3.91636 5.86388 4.43815 5.3423C4.9658 4.81485 5.46414 4.49252 6.16181 4.22294C6.68947 4.01782 7.48681 3.77168 8.94665 3.70721C10.5237 3.63688 10.9986 3.6193 15.0088 3.6193ZM15.0088 0.917603C10.9341 0.917603 10.4241 0.935184 8.82353 1.00551C7.22885 1.07584 6.1325 1.3337 5.18272 1.70291C4.19191 2.08971 3.35353 2.59957 2.52101 3.43763C1.68263 4.26982 1.17256 5.10787 0.785617 6.09244C0.416259 7.04771 0.158296 8.13776 0.0879422 9.73182C0.0175884 11.3376 0 11.8475 0 15.9205C0 19.9936 0.0175884 20.5035 0.0879422 22.1034C0.158296 23.6974 0.416259 24.7934 0.785617 25.7428C1.17256 26.7332 1.68263 27.5712 2.52101 28.4034C3.35353 29.2356 4.19191 29.7514 5.17686 30.1323C6.1325 30.5015 7.22298 30.7594 8.81767 30.8297C10.4182 30.9 10.9283 30.9176 15.0029 30.9176C19.0776 30.9176 19.5876 30.9 21.1882 30.8297C22.7829 30.7594 23.8792 30.5015 24.829 30.1323C25.814 29.7514 26.6523 29.2356 27.4849 28.4034C28.3174 27.5712 28.8333 26.7332 29.2144 25.7486C29.5837 24.7934 29.8417 23.7033 29.9121 22.1092C29.9824 20.5093 30 19.9995 30 15.9264C30 11.8533 29.9824 11.3435 29.9121 9.74355C29.8417 8.14948 29.5837 7.05357 29.2144 6.10416C28.845 5.10787 28.335 4.26982 27.4966 3.43763C26.6641 2.60543 25.8257 2.08971 24.8407 1.70877C23.8851 1.33956 22.7946 1.0817 21.1999 1.01137C19.5935 0.935184 19.0834 0.917603 15.0088 0.917603Z"
                  fill="white"
                />
                <path
                  d="M15 7.9176C10.5833 7.9176 7 11.5009 7 15.9176C7 20.3343 10.5833 23.9176 15 23.9176C19.4167 23.9176 23 20.3343 23 15.9176C23 11.5009 19.4167 7.9176 15 7.9176ZM15 21.107C12.1346 21.107 9.81065 18.783 9.81065 15.9176C9.81065 13.0522 12.1346 10.7282 15 10.7282C17.8654 10.7282 20.1894 13.0522 20.1894 15.9176C20.1894 18.783 17.8654 21.107 15 21.107Z"
                  fill="white"
                />
                <path
                  d="M25 7.9176C25 9.02509 24.101 9.9176 23 9.9176C21.8925 9.9176 21 9.01858 21 7.9176C21 6.81011 21.899 5.9176 23 5.9176C24.101 5.9176 25 6.81663 25 7.9176Z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="">
              <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.501 12.3569V18.2059H23.6291C23.2722 20.0869 22.2011 21.6796 20.5947 22.7505L25.4963 26.5537C28.3521 23.9177 29.9997 20.0458 29.9997 15.4463C29.9997 14.3754 29.9036 13.3455 29.7251 12.3571L15.501 12.3569Z"
                  fill="white"
                />
                <path
                  d="M7.03714 17.9776L5.93165 18.8238L2.01855 21.8718C4.50367 26.8008 9.5971 30.2059 15.5009 30.2059C19.5786 30.2059 22.9973 28.8603 25.4962 26.5538L20.5947 22.7505C19.2491 23.6567 17.5329 24.206 15.5009 24.206C11.5742 24.206 8.23791 21.5561 7.04332 17.9863L7.03714 17.9776Z"
                  fill="white"
                />
                <path
                  d="M2.01845 8.33408C0.988763 10.366 0.398438 12.659 0.398438 15.1028C0.398438 17.5467 0.988763 19.8397 2.01845 21.8716C2.01845 21.8853 7.0437 17.9723 7.0437 17.9723C6.74164 17.0661 6.5631 16.1051 6.5631 15.1027C6.5631 14.1003 6.74164 13.1392 7.0437 12.2331L2.01845 8.33408Z"
                  fill="white"
                />
                <path
                  d="M15.5012 6.01371C17.7255 6.01371 19.7026 6.78257 21.2815 8.26542L25.6064 3.94054C22.984 1.49666 19.5791 0 15.5012 0C9.59741 0 4.50367 3.39129 2.01855 8.33409L7.04365 12.2334C8.23808 8.66357 11.5745 6.01371 15.5012 6.01371Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div
            className="stroke"
            style={{
              position: "absolute",
              bottom: "40px",
              width: "100%",
              height: "1px",
              backgroundColor: "#ffffff",
            }}
          ></div>
          <div
            className="copyright"
            style={{
              position: "absolute",
              bottom: "10px",
              width: "100%",
              textAlign: "center",
              color: "#ffffff",
              fontSize: "14px",
            }}
          >
            <p>Developed By GarGari © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
