import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddStudentForm from "../admin/Layout/AddStudentForm";
const StudentListByClass = () => {
  const { classId, className } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/class/Students/${classId}`
        );
       
        if (response.data.status) {
          setStudents(response.data.modifiedStudents);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [classId]);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const handleAddStudentModal = () => {
    setShowAddStudentModal(!showAddStudentModal);
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Students List</h2>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddStudentModal}
        >
          Add Student
        </button>
      </div>
      {students.length === 0 ? (
        <p className="text-gray-500">No student found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Roll Number</th>
                <th className="px-4 py-2">className</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.rollNum}</td>
                  <td className="border px-4 py-2">{className}</td>
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
      {/* Add Teacher Modal */}
      {showAddStudentModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-blue-500 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Add Student</h2>
            <AddStudentForm />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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

export default StudentListByClass;
