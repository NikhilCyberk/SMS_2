import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartBar,
} from "react-icons/fa";

const TopBar = ({ data }) => {
  const { class_id, type, classes, student_id, teacher_id, subject_id } =
    useParams();
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-white bg-blue-500 rounded-lg px-4 py-2 transition-colors duration-300 w-full text-center"
      : "text-gray-300 hover:text-white hover:bg-blue-500 rounded-lg px-4 py-2 transition-colors duration-300 w-full text-center";
  };

  const links = {
    class: [
      {
        to: `/admin/class_name/${classes}/class____id/${class_id}/subjects`,
        icon: FaBook,
        label: "Subjects",
      },
      {
        to: `/admin/class_name/${classes}/class____id/${class_id}/students`,
        icon: FaUserGraduate,
        label: "Students",
      },
      {
        to: `/admin/class_name/${classes}/class____id/${class_id}/teachers`,
        icon: FaChalkboardTeacher,
        label: "Teachers",
      },
    ],
    student: [
      {
        to: `/admin/student/class____id/${class_id}/student____id/${student_id}/st_details`,
        icon: FaUserGraduate,
        label: "Student Details",
      },
      {
        to: `/admin/student/class____id/${class_id}/student____id/${student_id}/st_attendance`,
        icon: FaClipboardList,
        label: "Attendance",
      },
      {
        to: `/admin/student/class____id/${class_id}/student____id/${student_id}/st_marks`,
        icon: FaChartBar,
        label: "Marks",
      },
    ],
    // subject/subject___id/:subject_id/:type
    subject: [
      {
        to: `/admin/subject/subject___id/${subject_id}/sub_details`,
        icon: FaBook,
        label: "Subject Details",
      },
      {
        to: `/admin/subject/subject___id/${subject_id}/sub_students`,
        icon: FaUserGraduate,
        label: "Students",
      },
    ],
    teacher: [
      {
        to: `/admin/teacher/teacher___id/${teacher_id}/teacher_details`,
        icon: FaChalkboardTeacher,
        label: "Teacher Details",
      },
      // {
      //   to: `/admin/class/${class_id}/teacher/students`,
      //   icon: FaUserGraduate,
      //   label: "Students",
      // },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gray-900 p-4 shadow-lg m-4 border-4 border-blue-500 rounded-lg space-y-2 md:space-y-0 md:space-x-2">
      {links[data] &&
        links[data].map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`flex items-center justify-center ${getLinkClass(
              link.to
            )}`}
          >
            <link.icon className="mr-2" />
            <span>{link.label}</span>
          </Link>
        ))}
    </div>
  );
};

export default TopBar;
