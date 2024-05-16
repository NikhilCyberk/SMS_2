import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaExclamationTriangle,
} from "react-icons/fa";

const SideB = ({ showSidebar }) => {
  const id = localStorage.getItem("_id");
  const buttonCss = `flex items-center px-4 py-3 text-gray-100 transition-colors duration-300 transform rounded-lg hover:text-white hover:bg-blue-600 aria-[current=page]:text-white aria-[current=page]:bg-blue-700 `;

  return (
    <div className="flex">
      <div
        className={`${
          showSidebar ? "w-64" : "w-20"
        } h-full bg-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 border-none`}
      >
        <div className="flex flex-col p-2">
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                className="w-auto h-10 mb-5"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          <nav className="mt-6 h-full overflow-y-auto">
            <div className="h-full space-y-5 flex flex-col justify-center">
              <NavLink to="/admin" className={buttonCss}>
                <FaHome className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-md md:text-xl font-medium`}
                >
                  Dashboard
                </span>
              </NavLink>
              <NavLink to={`admin-list-class/${id}`} className={buttonCss}>
                <FaList className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  List Class
                </span>
              </NavLink>
              <NavLink to={`list-student/${id}`} className={buttonCss}>
                <FaUsers className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  List Student
                </span>
              </NavLink>
              <NavLink to={`list-subject/${id}`} className={buttonCss}>
                <FaChalkboardTeacher className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  Subject List
                </span>
              </NavLink>
              <NavLink to={`list-teacher/${id}`} className={buttonCss}>
                <FaChalkboardTeacher className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  Teacher List
                </span>
              </NavLink>
              <NavLink to={`list-notice/${id}`} className={buttonCss}>
                <FaClipboardList className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  List Notices
                </span>
              </NavLink>
              <NavLink to={`list-complain/${id}`} className={buttonCss}>
                <FaExclamationTriangle className="mx-2 text-lg" />
                <span
                  className={`${
                    showSidebar ? "inline" : "hidden"
                  } text-sm md:text-xl font-medium`}
                >
                  List Complaints
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
