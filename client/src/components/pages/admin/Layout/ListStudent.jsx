import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove, fatch } from "../../../../store/slice/Students";
import Popup from "reactjs-popup";
import AddStudentForm from "./AddStudentForm";

const ListStudent = () => {
  const s = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [students, setStudent] = useState([]);

  const id = localStorage.getItem("_id");
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
        const response = await axios.get(
          `http://localhost:3000/get-students/${id}`,
          {}
        );
        // Assuming your API response has the data you want in response.data
        setStudent(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [students]); // The empty dependency array ensures that the effect runs once when the component mounts

  useEffect(() => {
    fatch();
  }, []);

  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const handleAddStudentModal = () => {
    setShowAddStudentModal(!showAddStudentModal);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Student List</h2>

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
                  <td className="border px-4 py-2">
                    {student.sclassName.sclassName}
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

export default ListStudent;
