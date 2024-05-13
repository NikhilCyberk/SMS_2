import React, { useState } from "react";
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
  FaBars,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const SideB = () => {
  const id = localStorage.getItem("_id");
  const [showSidebar, setShowSidebar] = useState(true);
  let buttonCss = `flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600 aria-[current=page]:text-white aria-[current=page]:bg-blue-700 `;

  return (
    <div className="flex ">
      <div
        className={`${
          showSidebar ? "w-64" : "w-16"
        } h-full bg-blue-500 border-r rtl:border-r-0  rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 border-none`}
      >
        <div className="flex flex-col p-2 ">
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                className="w-auto h-10 mb-5"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
              />
            </Link>

            <button
              className="text-gray-100 hover:text-white focus:outline-none"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              <FaBars />
            </button>
          </div>

          <nav className="mt-6 h-full overflow-y-auto">
            <div className="h-full space-y-5 flex flex-col justify-center">
              {/* Dashboard Link */}
              <NavLink to="/admin" className={buttonCss}>
                <FaHome className="mx-2 text-lg" />
                <span className="text-md md:text-xl font-medium">
                  Dashboard
                </span>
              </NavLink>

              {/* Add Class Link */}
              {/* <NavLink to="admin-add-class" className={buttonCss}>
                <FaPlus className="mx-2 text-md" />
                <span className="text-sm md:text-xl  font-medium">
                  Add Class
                </span>
              </NavLink> */}

              {/* List Class Link */}
              <NavLink to={`admin-list-class/${id}`} className={buttonCss}>
                <FaList className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  List Class
                </span>
              </NavLink>

              {/* Add Student Link */}
              {/* <NavLink to="admin-add-student" className={buttonCss}>
                <FaUserPlus className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Add Student
                </span>
              </NavLink> */}

              {/* List Student Link */}
              <NavLink to="list-student/:id" className={buttonCss}>
                <FaUsers className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  List Student
                </span>
              </NavLink>

              {/* Add Subject Link */}
              {/* <NavLink to="add-subject" className={buttonCss}>
                <FaBook className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Add Subject
                </span>
              </NavLink> */}

              {/* Add Teacher Link */}
              {/* <NavLink to="admin-add-teacher" className={buttonCss}>
                <FaChalkboardTeacher className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Add Teacher
                </span>
              </NavLink> */}
              {/* Add subject list */}
              <NavLink to="list-subject/:id" className={buttonCss}>
                <FaChalkboardTeacher className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Subject List
                </span>
              </NavLink>
              <NavLink to="list-teacher/:id" className={buttonCss}>
                <FaChalkboardTeacher className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Teacher List
                </span>
              </NavLink>

              {/* List Notices Link */}
              <NavLink to="admin-list-notices" className={buttonCss}>
                <FaClipboardList className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  List Notices
                </span>
              </NavLink>

              {/* Add Notice Link */}
              <NavLink to="admin-add-notice" className={buttonCss}>
                <FaBell className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Add Notice
                </span>
              </NavLink>

              {/* List Complaints Link */}
              <NavLink to="list-complain" className={buttonCss}>
                <FaExclamationTriangle className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  List Complaints
                </span>
              </NavLink>

              {/* Add Complaint Link */}
              <NavLink to="admin-add-complaint" className={buttonCss}>
                <FaExclamationTriangle className="mx-2 text-lg" />
                <span className="text-sm md:text-xl font-medium">
                  Add Complaint
                </span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SideB;
