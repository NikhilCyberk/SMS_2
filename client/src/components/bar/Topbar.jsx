import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import SideB from "./SideB";
import AdminProfile from "../pages/admin/AdminProfile";
const Topbar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const schoolName = localStorage.getItem("schoolName");
  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear localStorage and navigate to the login page
    localStorage.clear();
    navigate("/login");
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    setIsProfileMenuOpen(false);
  };

  return (
    <div className="flex flex-col h-screen ">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-2 py-2 bg-gray-900 text-white md:px-8 rounded-2xl border-4 border-blue-500 ml-4 mr-4 mt-2">
        <div>
          {showSidebar ? (
            <RxCross1
              className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          ) : (
            <HiOutlineMenu
              className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
              onClick={() => setShowSidebar(!showSidebar)}
            />
          )}
        </div>
        <div>
          <div className="text-xl font-bold text-blue-500">School Name : {schoolName}</div>
        </div>
        <div className="flex items-center space-x-4">
          <li className="relative">
            <button
              className="p-2 bg-white text-green-400 align-middle rounded-full hover:text-white hover:bg-blue-400 focus:outline-none"
              onClick={toggleProfileMenu}
              onKeyDown={(e) => e.key === "Escape" && closeProfileMenu()}
              aria-label="Account"
              aria-haspopup="true"
            >
              <div className="flex items-center">
                <HiOutlineUserCircle className="w-8 h-8 md:w-10 md:h-10" />
              </div>
            </button>
            {isProfileMenuOpen && (
              <ul
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.key === "Escape" && closeProfileMenu()}
                className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-blue-400 border border-blue-500 rounded-md shadow-md"
                aria-label="submenu"
              >
                <li className="flex">
                  <button
                    className="text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                    onClick={() => setShowProfile(!showProfile)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Profile</span>
                  </button>
                </li>
                <li className="flex">
                  <button
                    className="text-white inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                    onClick={handleLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span>Log out</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </div>
      </header>
      <div className="flex flex-1 mt-16">
        <aside
          className={`fixed top-16 left-0 z-40 h-full overflow-y-auto bg-gray-900 transition-all duration-300 ${
            showSidebar ? "w-64" : "w-20"
          }`}
        >
          <SideB showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </aside>
        {showProfile && (
          <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 md:p-12">
              <AdminProfile
                id={localStorage.getItem("_id")}
                email={localStorage.getItem("email")}
                role={localStorage.getItem("role")}
                schoolName={localStorage.getItem("schoolName")}
              />
              <button
                className="mt-4 px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 md:text-base md:px-6 md:py-3"
                onClick={handleProfileClick}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Topbar;
