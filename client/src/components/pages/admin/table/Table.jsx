import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { PiStudent } from "react-icons/pi";
import { MdOutlineSubject } from "react-icons/md";

const Table = ({
  classes,
  isAscending,
  onSort,
  onDelete,
  onAddStudent,
  onAddSubject,
}) => (
  <div className="overflow-x-auto border-4 rounded-lg border-blue-500 shadow-lg">
    <table className="min-w-full bg-gray-800 rounded-lg">
      <thead className="bg-gray-900 text-teal-300 sticky top-0">
        <tr>
          <th
            className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider cursor-pointer relative"
            onClick={onSort}
          >
            Class Name
            {isAscending ? (
              <AiOutlineSortAscending className="inline ml-1" />
            ) : (
              <AiOutlineSortDescending className="inline ml-1" />
            )}
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {classes.map((classItem, index) => (
          <ClassRow
            key={classItem._id}
            classItem={classItem}
            index={index}
            onDelete={onDelete}
            onAddStudent={onAddStudent}
            onAddSubject={onAddSubject}
          />
        ))}
      </tbody>
    </table>
  </div>
);

const ClassRow = ({
  classItem,
  index,
  onDelete,
  onAddStudent,
  onAddSubject,
}) => (
  <tr
    className={`${
      index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
    } transition duration-300 hover:bg-gray-600`}
  >
    <td className="px-6 py-4 whitespace-nowrap">{classItem.sclassName}</td>
    <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
      <Link
        // to={`/admin/class/${classItem.sclassName}/${classItem._id}/subjects`}
        to={`/admin/class_name/${classItem.sclassName}/class____id/${classItem._id}/subjects`}
        className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
      >
        <AiFillEye size={20} />
        <span className="ml-1">View Class</span>
      </Link>
      <button
        className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
        onClick={() => onDelete(classItem._id)}
      >
        <AiFillDelete size={20} />
        <span className="ml-1">Delete Class</span>
      </button>
      <button
        className="text-violet-500 hover:text-violet-700 transition duration-300 flex items-center"
        onClick={onAddStudent}
      >
        <PiStudent size={20} />
        <span className="ml-1">Add Student</span>
      </button>
      <button
        className="text-green-500 hover:text-green-700 transition duration-300 flex items-center"
        onClick={onAddSubject}
      >
        <MdOutlineSubject size={20} />
        <span className="ml-1">Add Subject</span>
      </button>
    </td>
  </tr>
);

export default Table;
