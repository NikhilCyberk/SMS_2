import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineUserCircle } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import SideB from "./SideB";
import AdminProfile from "../pages/admin/AdminProfile";

const Topbar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    // <div className="flex flex-col h-screen">
    //   <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-gray-900 text-white">
    //     <div>
    //       {showSidebar ? (
    //         <RxCross1
    //           className="w-8 h-8 cursor-pointer"
    //           onClick={() => setShowSidebar(!showSidebar)}
    //         />
    //       ) : (
    //         <HiOutlineMenu
    //           className="w-8 h-8 cursor-pointer"
    //           onClick={() => setShowSidebar(!showSidebar)}
    //         />
    //       )}
    //     </div>
    //     <div className="flex items-center space-x-4">
    //       <HiOutlineUserCircle
    //         className="w-8 h-8 cursor-pointer"
    //         onClick={handleProfileClick}
    //       />
    //       <button
    //         className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
    //         onClick={handleLogout}
    //       >
    //         Logout
    //       </button>
    //     </div>
    //   </header>

    //   <div className="flex flex-1 mt-16">
    //     <aside
    //       className={`fixed top-16 left-0 z-40 h-full overflow-y-auto bg-gray-900 transition-all duration-300 ${
    //         showSidebar ? "w-64" : "w-20"
    //       }`}
    //     >
    //       <SideB showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    //     </aside>

    //     {showProfile && (
    //       <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-gray-900 bg-opacity-50">
    //         <div className="bg-white rounded-lg p-8">
    //           <AdminProfile
    //             id={localStorage.getItem("_id")}
    //             email={localStorage.getItem("email")}
    //             role={localStorage.getItem("role")}
    //             schoolName={localStorage.getItem("schoolName")}
    //           />
    //           <button
    //             className="mt-4 px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700"
    //             onClick={handleProfileClick}
    //           >
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 bg-gray-900 text-white md:px-8">
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
        <div className="flex items-center space-x-4">
          <HiOutlineUserCircle
            className="w-8 h-8 cursor-pointer md:w-10 md:h-10"
            onClick={handleProfileClick}
          />
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 md:text-base md:px-6 md:py-3"
            onClick={handleLogout}
          >
            Logout
          </button>
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
