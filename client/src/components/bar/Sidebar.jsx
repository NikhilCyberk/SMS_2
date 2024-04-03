// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-1/6 pt-[2rem] pr-[6rem]">
      <div className="flex items-center justify-center mb-8">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src="https://via.placeholder.com/50"
          alt="Profile"
        />
        <div className="ml-4">
          <p className="text-xl font-semibold">John Doe</p>
          <p className="text-sm">Admin</p>
        </div>
      </div>
      <ul>
        <li className="mb-4">
        <Link to="/admin-profile" className="flex items-center text-gray-300 hover:text-white">
            User Profile
          </Link>
        <Link to="/admin-add-class" className="flex items-center text-gray-300 hover:text-white">
            Add Classes
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
