// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentAttendance = () => {
//   const [student, setStudent] = useState(null);
//   const studentId = localStorage.getItem("_id");
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/get-student-detail/${studentId}`)
//       .then((response) => setStudent(response.data))
//       .catch((error) =>
//         console.error("Error fetching student details:", error)
//       );
//   }, [studentId]);

//   if (!student) return <div className="text-white">Loading...</div>;

//   return (
//     <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
//       <h1 className="text-2xl font-bold mb-4">Attendance Records</h1>
//       <ul>
//         {student.attendance.map((record, index) => (
//           <li key={index} className="mb-2 p-2 bg-gray-800 rounded">
//             {record.date}: {record.subName?.subName} - {record.status}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentAttendance;

import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentAttendance = () => {
  const [student, setStudent] = useState(null);
  const studentId = localStorage.getItem("_id");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/get-student-detail/${studentId}`)
      .then((response) => setStudent(response.data))
      .catch((error) =>
        console.error("Error fetching student details:", error)
      );
  }, [studentId]);

  if (!student)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
              Attendance Records
            </h1>
            <div className="space-y-4">
              {student.attendance.map((record, index) => (
                <div
                  key={index}
                  className="bg-gray-700 rounded-xl p-4 shadow-md transition duration-300 ease-in-out hover:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-full ${
                          record.status === "Present"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {record.status === "Present" ? (
                          <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          {record.subName?.subName || "N/A"}
                        </h2>
                        <p className="text-indigo-300 text-sm">
                          {new Date(record.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p
                        className={`text-lg font-bold ${
                          record.status === "Present"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {record.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-700 px-6 py-4">
            <p className="text-sm text-gray-400 text-center">
              Total Attendance:{" "}
              {
                student.attendance.filter(
                  (record) => record.status === "Present"
                ).length
              }{" "}
              / {student.attendance.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendance;
