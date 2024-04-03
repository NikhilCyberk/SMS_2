import React from "react";
import SideB from "./SideB";
import { FaPowerOff } from "react-icons/fa";

const Topbar = () => {
  return (
    // <>
    //   {localStorage.getItem("token") &&
    //     localStorage.getItem("role") === "Admin" && (
    //       <div>
    //         <div className="bg-gray-900 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-screen z-10">
    //           <p className="text-xl font-semibold">Admin Dashboard</p>
    //           <button
    //             onClick={() => {
    //               localStorage.clear();
    //               window.location.reload();
    //             }}
    //             className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    //           >
    //             Log Out
    //           </button>
    //         </div>
    //         <SideB />
    //       </div>
    //     )}
    // </>

    // <>
    //   {localStorage.getItem("token") &&
    //     localStorage.getItem("role") === "Admin" && (
    //       <div>
    //         <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white p-4 flex justify-between items-center fixed top-0 left-0 w-screen z-10">
    //           <p className="text-2xl font-semibold">Admin Dashboard</p>
    //           <button
    //             onClick={() => {
    //               localStorage.clear();
    //               window.location.reload();
    //             }}
    //             className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300"
    //           >
    //             Log Out
    //           </button>
    //         </div>
    //         <SideB />
    //       </div>
    //     )}
    // </>

    <>
      {localStorage.getItem("token") &&
        localStorage.getItem("role") === "Admin" && (
          <div className="flex pl-[16rem]">
            {/* Sidebar */}
            <SideB />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-r from-grey-400 to-blue-500 text-white">
              {/* Top Bar */}
              <div className="p-4 flex justify-between items-center bg-gray-900 border-b border-gray-900">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-700 rounded-full mr-3"></div>
                  <p className="text-lg font-semibold">Admin Dashboard</p>
                </div>
                <button
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center"
                >
                  <FaPowerOff className="mr-2 text-lg" />
                  Log Out
                </button>
              </div>

              {/* Main Content Goes Here */}
              {/* Add your main content components and routes here */}
            </div>
          </div>
        )}
    </>
  );
};

export default Topbar;
