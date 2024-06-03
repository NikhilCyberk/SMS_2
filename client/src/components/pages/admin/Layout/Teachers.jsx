// Teachers.jsx
import React from "react";

const Teachers = ({ teachers }) => {
  return (
    <div className="bg-gray-900 text-white p-8 h-screen">
      <h2 className="text-2xl font-bold mb-4">Teachers</h2>
      {teachers.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-teal-300">
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  Teacher Name
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => (
                <tr key={teacher._id} className="bg-gray-600">
                  <td className="py-3 px-6">{teacher.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No teachers found</p>
      )}
    </div>
  );
};

export default Teachers;
