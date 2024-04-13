// import React, { useEffect } from "react";
// import { Link, NavLink, useParams } from "react-router-dom";
// import { FaHome, FaPlus, FaList, FaUserPlus, FaUsers } from "react-icons/fa";

// const SideB = () => {
//   return (

//     <aside className="fixed top-0 left-0 h-full w-64 bg-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
//       <div className="flex flex-col p-5">
//         <Link to="/">
//           <img
//             className="w-auto h-10 mb-5"
//             src="https://merakiui.com/images/logo.svg"
//             alt="Logo"
//           />
//         </Link>

//         <nav className="mt-6">
//           <div className="space-y-3">
//             {/* Dashboard Link */}
//             <NavLink
//               to="/admin-dashboard"
//               activeClassName="text-white bg-blue-700 dark:bg-gray-800"
//               className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
//             >
//               <FaHome className="mx-2 text-lg" />
//               <span className="text-sm font-medium">Dashboard</span>
//             </NavLink>

//             {/* Add Class Link */}
//             <NavLink
//               to="/admin-add-class"
//               activeClassName="text-white bg-blue-700 dark:bg-gray-800"
//               className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
//             >
//               <FaPlus className="mx-2 text-lg" />
//               <span className="text-sm font-medium">Add Class</span>
//             </NavLink>

//             <NavLink
//               to="/admin-list-class/:id"
//               activeClassName="text-white bg-blue-700 dark:bg-gray-800"
//               className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
//             >
//               <FaList className="mx-2 text-lg" />
//               <span className="text-sm font-medium">List Class</span>
//             </NavLink>

//             <NavLink
//               to="/admin-add-student"
//               activeClassName="text-white bg-blue-700 dark:bg-gray-800"
//               className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
//             >
//               <FaUserPlus className="mx-2 text-lg" />
//               <span className="text-sm font-medium">Add Student</span>
//             </NavLink>

//             <NavLink
//               to="/admin-list-student"
//               activeClassName="text-white bg-blue-700 dark:bg-gray-800"
//               className="flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600"
//             >
//               <FaUsers className="mx-2 text-lg" />
//               <span className="text-sm font-medium">List Student</span>
//             </NavLink>
//           </div>
//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default SideB;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaPlus,
  FaList,
  FaUserPlus,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardList,
  FaBell,
  FaExclamationTriangle,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";


const SideB = (setShowSidebar) => {

  let buttonCss = `flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600 aria-[current=page]:text-white aria-[current=page]:bg-blue-700 `;


  return (
    <div
      className={` h-full w-full bg-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 border-none`}
    >
      <div className="flex flex-col p-5 ">
        <div className="flex justify-center items-center">
          <Link to="/">
            <img
              className="w-auto h-10 mb-5"
              src="https://merakiui.com/images/logo.svg"
              alt="Logo"
            />
          </Link>

        </div>


        <nav className="mt-6 h-full ">
          <div className="h-full space-y-5 flex flex-col justify-center">
            {/* Dashboard Link */}
            <NavLink
              to="/admin-dashboard"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaHome className="mx-2 text-lg" />
              <span className="text-md md:text-xl font-medium">Dashboard</span>
            </NavLink>

            {/* Add Class Link */}
            <NavLink
              to="admin-add-class"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaPlus className="mx-2 text-lg" />
              <span className="text-sm md:text-xl  font-medium">Add Class</span>
            </NavLink>

            {/* List Class Link */}
            <NavLink
              to="admin-list-class/:id"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaList className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">List Class</span>
            </NavLink>

            {/* Add Student Link */}
            <NavLink
              to="admin-add-student"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaUserPlus className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">Add Student</span>
            </NavLink>

            {/* List Student Link */}
            <NavLink
              to="admin-list-student"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaUsers className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">List Student</span>
            </NavLink>

            {/* Add Subject Link */}
            <NavLink
              to="admin-add-subject"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBook className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">Add Subject</span>
            </NavLink>

            {/* Add Teacher Link */}
            <NavLink
              to="admin-add-teacher"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaChalkboardTeacher className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">Add Teacher</span>
            </NavLink>

            {/* List Notices Link */}
            <NavLink
              to="admin-list-notices"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaClipboardList className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">List Notices</span>
            </NavLink>

            {/* Add Notice Link */}
            <NavLink
              to="admin-add-notice"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBell className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">Add Notice</span>
            </NavLink>

            {/* List Complaints Link */}
            <NavLink
              to="admin-list-complaints"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaExclamationTriangle className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">List Complaints</span>
            </NavLink>

            {/* Add Complaint Link */}
            <NavLink
              to="admin-add-complaint"
              className={buttonCss}
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaExclamationTriangle className="mx-2 text-lg" />
              <span className="text-sm md:text-xl font-medium">Add Complaint</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideB;
