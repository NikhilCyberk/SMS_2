import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTeacherForm from "../AddTeacherForm";

const ListTeacher = () => {
  const schoolId = localStorage.getItem("_id");
  const [teachers, setTeachers] = useState([]);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teachers/${schoolId}`
        );
        setTeachers(response.data);
        // console.log(response.data, 31321);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, [teachers, schoolId]);

  const handleView = (teacherId) => {
    // Handle view logic
    console.log(`View teacher with ID: ${teacherId}`);
  };

  const handleDelete = (teacherId) => {
    // Handle delete logic
    console.log(`Delete teacher with ID: ${teacherId}`);
  };

  const handleEdit = (teacherId) => {
    // Handle edit logic
    console.log(`Edit teacher with ID: ${teacherId}`);
  };

  const handleAddTeacherModal = () => {
    setShowAddTeacherModal(!showAddTeacherModal);
  };

  return (
    <div className="container min-h-screen  mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Teacher List</h2>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddTeacherModal}
        >
          Add Teacher
        </button>
      </div>
      {teachers.length === 0 ? (
        <p className="text-gray-500">No teachers found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2">{teacher.name}</td>
                  <td className="border px-4 py-2">{teacher.email}</td>
                  <td className="border px-4 py-2">
                    {teacher.teachSubject.subName}
                  </td>
                  <td className="border px-4 py-2">
                    {teacher.teachSclass &&
                    teacher.teachSclass.sclassName !== null
                      ? teacher.teachSclass.sclassName
                      : "Not Assigned"}
                  </td>
                  <td className="border px-4 py-2 ">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleView(teacher._id)}
                    >
                      View
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                      onClick={() => handleDelete(teacher._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleEdit(teacher._id)}
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
      {showAddTeacherModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-blue-500 rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
            <AddTeacherForm />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddTeacherModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTeacher;
