import React from "react";
import logo from'../assets/fullLogo.png'


export default function Home() {
  return (
    <nav className="flex flex-col items-left px-9 py-6">
      <div className="my-4">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto"
        />
      </div>

      <ul className="flex flex-col items-left">
        <li className="py-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Home
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            About
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Services
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Products
          </a>
        </li>
        <li className="py-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
