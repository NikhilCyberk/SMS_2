import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBook, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const TopBar = () => {
  const { id } = useParams();
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-teal-500 rounded-lg px-4 py-2 transition-colors duration-300"
      : "text-gray-300 hover:text-white hover:bg-teal-500 rounded-lg px-4 py-2 transition-colors duration-300";
  };

  return (
    <div className="flex justify-around items-center bg-gray-900 p-4 shadow-lg m-4 border-4 border-blue-500 rounded-lg ">
      <Link
        to={`/admin/class/${id}/subjects`}
        className={`flex items-center ${getLinkClass(
          `/admin/class/${id}/subjects`
        )}`}
      >
        <FaBook className="mr-2 text-white  " />
        Subjects
      </Link>
      <Link
        to={`/admin/class/${id}/students`}
        className={`flex items-center ${getLinkClass(
          `/admin/class/${id}/students`
        )}`}
      >
        <FaUserGraduate className="mr-2 text-white" />
        Students
      </Link>
      <Link
        to={`/admin/class/${id}/teachers`}
        className={`flex items-center ${getLinkClass(
          `/admin/class/${id}/teachers`
        )}`}
      >
        <FaChalkboardTeacher className="mr-2 text-white" />
        Teachers
      </Link>
    </div>
  );
};

export default TopBar;
