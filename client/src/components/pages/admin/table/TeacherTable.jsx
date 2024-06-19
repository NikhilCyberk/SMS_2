// components/TeacherTable.js
import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillDelete, AiOutlineEdit } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

const TeacherTable = ({ teachers, onDelete, onEdit, onAttendance }) => (
  <div className="overflow-x-auto border-4 rounded-lg border-blue-500 shadow-lg">
    <table className="min-w-full bg-gray-800 rounded-lg">
      <thead className="bg-gray-900 text-teal-300 sticky top-0">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Subject
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Class
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {teachers.map((teacher, index) => (
          <tr
            key={teacher._id}
            className={`${
              index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            } transition duration-300 hover:bg-gray-600`}
          >
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {teacher.name || "Not Assigned"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {teacher.email || "Not Assigned"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {teacher.teachSubject?.subName || "Not Assigned"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {teacher.teachSclass?.sclassName || "Not Assigned"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
              <Link
                to={`/admin/teacher/teacher___id/${teacher._id}/teacher_details`}
                className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
              >
                <AiFillEye size={24} />
                <span className="ml-1">View</span>
              </Link>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
                onClick={() => onDelete(teacher._id)}
              >
                <AiFillDelete size={24} />
                <span className="ml-1">Delete </span>
              </button>
              <button
                className="text-green-500 hover:text-green-700 transition duration-300 flex items-center"
                onClick={() => onEdit(teacher._id)}
              >
                <AiOutlineEdit size={24} />
                <span className="ml-1">Edit</span>
              </button>
              <button
                className="text-purple-500 hover:text-purple-700 transition duration-300 flex items-center"
                onClick={() => onAttendance(teacher)}
              >
                <SlCalender size={24} />
                <span className="ml-1">Attendance</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TeacherTable;
