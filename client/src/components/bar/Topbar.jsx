import React, { useState } from "react";
import SideB from "./SideB";
import { FaPowerOff } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const Topbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="w-screen h-screen">
      <div className="w-full bg-gray-800 text-white h-16 py-3 px-4 flex justify-between fixed top-0 z-40">
        <div>
          {showSidebar ? (
            <button
              className="w-10 text-4xl hover:cursor-pointer fixed top-4 left-4 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <RxCross1 />
            </button>
          ) : (
            <button
              className="w-10 text-4xl hover:cursor-pointer fixed top-4 left-4 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <HiOutlineMenu />
            </button>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-red-600 hover:text-red-500 hover:cursor-pointer">
            <Link to="#">Logout</Link>
          </div>
          <div className="text-white hover:text-gray-300 hover:cursor-pointer">
            <Link to="#">Profile</Link>
          </div>
        </div>
      </div>
      <div
        className={`h-auto mt-16 w-1/2 bg-gray-700 fixed z-30 top-0 left-0 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:z-50 md:w-64 md:h-full`}
      >
        <SideB setShowSidebar={setShowSidebar} />
      </div>
    </div>
  );
};

export default Topbar;
