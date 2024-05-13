import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SubjectItem from "../subject/SubjectItem";
import Popup from "reactjs-popup";
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

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/all-subjects/${subjectData.adminID}`
        );
        setSubjects(response.data);
        // console.log(response.data);
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

  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const handleAddSubjectModal = () => {
    setShowAddSubjectModal(!showAddSubjectModal);
  };

  return (
    <div className="container min-h-screen  mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Subjects List</h2>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddSubjectModal}
        >
          Add Subject
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      </div>
      {subjects.length === 0 ? (
        <p className="text-gray-500">No Subject found.</p>
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
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{subject.subName}</td>
                  <td className="border px-4 py-2">{subject.subCode}</td>
                  <td className="border px-4 py-2">{subject.sessions}</td>
                  <td className="border px-4 py-2">
                    {subject.sclassName.sclassName}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      //   onClick={() => handleViewClass(classItem.id)}
                    >
                      View
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                      //   onClick={() => handleDeleteClass(classItem.id)}
                      // onClick={() => dispatch(remove(student.index))}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      // onClick={() => dispatch(remove(index))}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Add subject Modal */}
      {showAddSubjectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-blue-500 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Add Subject</h2>
            <AddSubject />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddSubjectModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectList;
