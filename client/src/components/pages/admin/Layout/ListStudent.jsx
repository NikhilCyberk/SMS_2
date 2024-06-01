import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, fatch } from "../../../../store/slice/Students";
import AddStudentForm from "./AddStudentForm";
import { FaPlus, FaEye, FaTrash, FaEdit } from "react-icons/fa";

const ListStudent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [studentData, setStudentData] = useState([]);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  const id = localStorage.getItem("_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-students/${id}`
        );
        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch(fatch());
  }, [dispatch]);

  const handleAddStudentModal = () => {
    setShowAddStudentModal(!showAddStudentModal);
  };

  const handleDeleteStudent = (index) => {
    dispatch(remove(index));
  };

  return (
    <div className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Student List</h2>
        <button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={handleAddStudentModal}
        >
          <FaPlus className="mr-2" />
          Add Student
        </button>
      </div>
      {studentData.length === 0 ? (
        <p className="text-gray-400">No student found.</p>
      ) : (
        <div className="overflow-x-auto border-4 rounded-lg border-blue-500">
          <table className="min-w-full  bg-gray-800    shadow-lg">
            <thead className="bg-gray-900    text-teal-300 sticky top-0">
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
              {studentData.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.rollNum}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sclassName.sclassName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                    <button className="text-blue-500 hover:text-blue-700 transition duration-300">
                      <FaEye className="mr-2" />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300"
                      onClick={() => handleDeleteStudent(index)}
                    >
                      <FaTrash className="mr-2" />
                    </button>
                    <button className="text-green-600 hover:bg-green-700 transition duration-300">
                      <FaEdit className="mr-2" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showAddStudentModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Add Student</h2>
            <AddStudentForm />
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={handleAddStudentModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListStudent;
