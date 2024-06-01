import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus, FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
import AddSubject from "./Layout/AddSubject";

const SubjectList = ({ id }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subjectData, setSubjectData] = useState({
    subName: "",
    subCode: "",
    sessions: "",
    sclassName: "",
    adminID: id,
  });

  const [isDeleteAllClicked, setIsDeleteAllClicked] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/all-subjects/${subjectData.adminID}`
        );
        setSubjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setLoading(false);
      }
    };
    fetchSubjects();
  }, [id, isDeleteAllClicked]);

  const handleDeleteAll = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/Subjects/${subjectData.adminID}`
      );
      setIsDeleteAllClicked(!isDeleteAllClicked);
    } catch (error) {
      console.error("Error deleting all subjects:", error);
    }
  };

  const handleAddSubjectModal = () => {
    setShowAddSubjectModal(!showAddSubjectModal);
  };

  return (
    <div className="p-8 bg-gray-900  min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Subjects List</h2>
        <div className="flex items-center">
          <div
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300"
            onClick={handleAddSubjectModal}
          >
            <FaPlus className="text-lg" />
          </div>
          <div
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300 ml-4"
            onClick={handleDeleteAll}
          >
            <FaTrashAlt className="text-lg" />
          </div>
        </div>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : subjects.length === 0 ? (
        <p className="text-gray-500">No subjects found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Subject Name</th>
                <th className="px-4 py-2">Subject Code</th>
                <th className="px-4 py-2">Session</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                >
                  <td className="border px-4 py-2">
                    {subject.subName || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {subject.subCode || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {subject.sessions || "N/A"}
                  </td>
                  <td className="border px-4 py-2">
                    {subject.sclassName ? subject.sclassName.sclassName : "N/A"}
                  </td>

                  <td className="border px-4 py-2 flex justify-center">
                    <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300 mr-2">
                      <FaEye className="text-lg" />
                    </div>
                    <div className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300 mr-2">
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
      )}
      {showAddSubjectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-700 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Add Subject</h2>
            <AddSubject />
            <div
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300 mt-4 w-8 h-8 flex items-center justify-center"
              onClick={handleAddSubjectModal}
            >
              <FaPlus className="text-lg transform rotate-45" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectList;
