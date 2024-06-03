// Subjects.jsx
import React from "react";

const Subjects = ({ subjects }) => {
  return (
    <div className="bg-gray-900 text-white p-8 h-screen">
      <h2 className="text-2xl font-bold mb-4">Subjects</h2>
      {subjects.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-700 text-teal-300">
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  Subject Name
                </th>
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  SUbject Code
                </th>
                <th className="py-3 px-6 text-left uppercase tracking-wider">
                  Session
                </th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject) => (
                <tr key={subject._id} className="bg-gray-600">
                  <td className="py-3 px-6">{subject.subName}</td>
                  <td className="py-3 px-6">{subject.subCode}</td>
                  <td className="py-3 px-6">{subject.sessions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No subjects found</p>
      )}
    </div>
  );
};

export default Subjects;
