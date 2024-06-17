import React from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaTrash,
  FaEdit,
  FaCheckSquare,
  FaClipboardList,
} from "react-icons/fa";

const StudentTable = ({
  students,
  onDelete,
  onEdit,
  onTakeAttendance,
  onProvideMarks,
}) => (
  <div className="overflow-x-auto border-4 rounded-lg border-blue-500 shadow-lg">
    <table className="min-w-full bg-gray-800 rounded-lg">
      <thead className="bg-gray-900 text-teal-300 sticky top-0">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Roll Number
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
        {students.map((student, index) => (
          <tr
            key={student._id}
            className={`${
              index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            } transition duration-300 hover:bg-gray-600`}
          >
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {student.name || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {student.rollNum || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {student.sclassName.sclassName || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
              <Link
                to={`/admin/student/${student._id}`}
                className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
              >
                <FaEye size={20} />
                <span className="ml-1">View</span>
              </Link>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
                onClick={() => onDelete(student._id)}
              >
                <FaTrash size={20} />
                <span className="ml-1">Delete</span>
              </button>
              <button
                className="text-green-500 hover:text-green-700 transition duration-300 flex items-center"
                onClick={() => onEdit(student._id)}
              >
                <FaEdit size={20} />
                <span className="ml-1">Edit</span>
              </button>
              <button
                className="text-yellow-500 hover:text-yellow-700 transition duration-300 flex items-center"
                onClick={() => onTakeAttendance(student._id)}
              >
                <FaCheckSquare size={20} />
                <span className="ml-1">Attendance</span>
              </button>
              <button
                className="text-purple-500 hover:text-purple-700 transition duration-300 flex items-center"
                onClick={() => onProvideMarks(student._id)}
              >
                <FaClipboardList size={20} />
                <span className="ml-1">Marks</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default StudentTable;
