import React from "react";
import { FaEye, FaTrashAlt, FaPencilAlt } from "react-icons/fa";

const SubjectTable = ({ subjects }) => (
  <div className="overflow-x-auto border-4 rounded-lg border-blue-500 shadow-lg">
    <table className="min-w-full bg-gray-800 rounded-lg">
      <thead className="bg-gray-900 text-teal-300 sticky top-0">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Subject Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Subject Code
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Session
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Class
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            } transition duration-300 hover:bg-gray-600`}
          >
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {subject.subName || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {subject.subCode || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {subject.sessions || "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
              {subject.sclassName ? subject.sclassName.sclassName : "N/A"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
              <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
                <FaEye className="text-lg" />
              </div>
              <div className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
                <FaTrashAlt className="text-lg" />
              </div>
              <div className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
                <FaPencilAlt className="text-lg" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SubjectTable;
