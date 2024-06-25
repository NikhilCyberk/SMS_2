import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaHome,
  FaList,
  FaUsers,
  FaChalkboardTeacher,
  FaClipboardList,
  FaExclamationTriangle,
  FaBook,
  FaCheckCircle,
} from "react-icons/fa";

const SideB = ({ showSidebar }) => {
  const role = localStorage.getItem("role");
  const user = localStorage.getItem("user");
  const school_id = localStorage.getItem("_id");
  const sclassName_id = localStorage.getItem("techerClassId");
  const teacher_sclassName = localStorage.getItem("techerClassName");
  const buttonCss = `flex items-center px-4 py-2 text-gray-300 rounded-lg dark:text-gray-300 hover:text-white hover:bg-blue-500 dark:hover:bg-gray-700`;
  const activeButtonCss = `bg-blue-700 text-white dark:bg-gray-700`;

  return (
    <div className="flex flex-col">
      <div
        className={`${
          showSidebar ? "w-64" : "w-20"
        } h-full bg-blue-500 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700 transition-all duration-300 border-none`}
      >
        <div className="flex flex-col p-2 rounded-2xl border-4 mt-8 h-[87%]  border-blue-500 bg-gray-900 ml-4">
          <div className="flex justify-center items-center">
            <Link to="/">
              <img
                className="w-auto h-10 mb-5"
                src="https://merakiui.com/images/logo.svg"
                alt="Logo"
              />
            </Link>
          </div>

          {role === "admin" && (
            <nav className="mt-6 h-full overflow-y-auto">
              <div className="h-full space-y-5 flex flex-col justify-center">
                <NavLink
                  to="/admin"
                  end
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaHome className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-md md:text-xl font-medium`}
                  >
                    Dashboard
                  </span>
                </NavLink>
                <NavLink
                  to={`admin-list-class/school____id/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaList className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    List Class
                  </span>
                </NavLink>
                <NavLink
                  to={`list-student/school____id/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaUsers className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    List Student
                  </span>
                </NavLink>
                <NavLink
                  to={`list-subject/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaChalkboardTeacher className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Subject List
                  </span>
                </NavLink>
                <NavLink
                  to={`list-teacher/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaChalkboardTeacher className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Teacher List
                  </span>
                </NavLink>
                <NavLink
                  to={`list-notice/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaClipboardList className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    List Notices
                  </span>
                </NavLink>
                <NavLink
                  to={`list-complain/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
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
          )}
          {role === "Teacher" && (
            <nav className="mt-6 h-full overflow-y-auto">
              <div className="h-full space-y-5 flex flex-col justify-center">
                <NavLink
                  to="/teacher"
                  end
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaHome className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-md md:text-xl font-medium`}
                  >
                    Dashboard
                  </span>
                </NavLink>
                <NavLink
                  to={`class/students/class____id/${sclassName_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaList className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Class{" " + teacher_sclassName}
                  </span>
                </NavLink>
                <NavLink
                  to={`teacher-list-complain/${school_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
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
          )}

          {role === "Student" && (
            <nav className="mt-6 h-full overflow-y-auto">
              <div className="h-full space-y-5 flex flex-col justify-center">
                <NavLink
                  to="/student"
                  end
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaHome className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-md md:text-xl font-medium`}
                  >
                    Dashboard
                  </span>
                </NavLink>
                <NavLink
                  to={`student-subjects/class____id/${sclassName_id}`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaBook className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Subjects
                  </span>
                </NavLink>
                <NavLink
                  to={`student-attendance`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaCheckCircle className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Attendance
                  </span>
                </NavLink>
                <NavLink
                  to={`student-complaints`}
                  className={({ isActive }) =>
                    isActive ? `${buttonCss} ${activeButtonCss}` : buttonCss
                  }
                >
                  <FaExclamationTriangle className="mx-2 text-lg" />
                  <span
                    className={`${
                      showSidebar ? "inline" : "hidden"
                    } text-sm md:text-xl font-medium`}
                  >
                    Complaints
                  </span>
                </NavLink>
              </div>
            </nav>
          )}
        </div>
      </div>
      <div className="ml-4 rounded-2xl border-4 border-blue-500 bg-gray-900  p-4 text-center shadow-lg  mt-2">
        <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-person-fill text-white dark:text-indigo-300"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
          </svg>
          <figcaption className="sr-only">John Doe, Web Developer</figcaption>
        </figure>
        <h2 className="mt-4 text-xl font-bold text-indigo-600 dark:text-indigo-400">
          {user}
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{role}</p>
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="rounded-full bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:bg-indigo-500"
          >
            Contact
          </a>
          <a
            href="#"
            className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideB;
