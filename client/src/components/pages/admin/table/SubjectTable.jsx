import React from "react";
import { FaEye, FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const SubjectTable = ({ subjects, classId , onDelete}) => {
  const { classes } = useParams();
  return (
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
              key={subject._id}
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
                {classes}
              </td>
              <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                <Link
                  to={`/admin/subject/subject___id/${subject._id}/sub_details`}
                  className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
                >
                  <FaEye size={20} />
                  <span className="ml-1">View</span>
                </Link>
                <button
                  // to={`/admin/class/${classId}/subject/${subject.id}/delete`}
                  className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
                  onClick={() => onDelete(subject._id)}
                >
                  <FaTrashAlt size={20} />
                  <span className="ml-1">Delete</span>
                </button>
                {/* <Link
                  // to={`/admin/class/${classId}/subject/${subject.id}/edit`}
                  className="text-green-500 hover:text-green-700 transition duration-300 flex items-center"
                >
                  <FaPencilAlt size={20} />
                  <span className="ml-1">Edit</span>
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectTable;

// import React from 'react'

// const SubjectTable = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default SubjectTable
