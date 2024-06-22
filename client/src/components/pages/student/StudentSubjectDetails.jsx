// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StudentSubjectDetails = () => {
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
//       <h1 className="text-2xl font-bold mb-4">Subjects</h1>
//       <ul>
//         {student.examResult.map((exam, index) => (
//           <li key={index} className="mb-2 p-2 bg-gray-800 rounded">
//             {exam.subName?.subName}: {exam.marksObtained} marks
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StudentSubjectDetails;

import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentSubjectDetails = () => {
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
      <div className="max-w-3xl mx-auto">
        <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
              Subject Performance
            </h1>
            <ul className="space-y-4">
              {student.examResult.map((exam, index) => (
                <li
                  key={index}
                  className="bg-gray-700 rounded-xl p-4 shadow-md transition duration-300 ease-in-out hover:bg-gray-600"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-600 p-3 rounded-full">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-white">
                          {exam.subName?.subName || "N/A"}
                        </h2>
                        <p className="text-indigo-300 text-sm">
                          Subject Code: {exam.subName?.subCode || "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-indigo-400">
                        {exam.marksObtained}
                      </p>
                      <p className="text-sm text-gray-400">marks</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="bg-gray-600 h-2 rounded-full">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{
                          width: `${(exam.marksObtained / 100) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-700 px-6 py-4">
            <p className="text-sm text-gray-400 text-center">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSubjectDetails;
