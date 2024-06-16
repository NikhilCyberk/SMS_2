// Students.jsx
import React from "react";
import axios from "axios";

const Students = ({ students }) => {
  return (
    <div className="bg-gray-900 text-white p-8 h-screen">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      {students.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-teal-300">
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  Student Name
                </th>
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  Roll No:
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id} className="bg-gray-600">
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.rollNum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
};

export default Students;
