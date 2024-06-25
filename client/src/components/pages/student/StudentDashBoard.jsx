import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentDashBoard = () => {
  const [student, setStudent] = useState(null);
  const student_id = localStorage.getItem("_id");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/get-student-detail/${student_id}`)
      .then((response) => {
        console.log(response.data, 558866);
        setStudent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, []);

  if (!student)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-indigo-400 mb-6">
            Welcome, {student.name}
          </h1>
          <div className="space-y-6">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">Roll Number</p>
                <p className="text-lg font-semibold text-white">
                  {student.rollNum}
                </p>
              </div>
            </div>
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
                <p className="text-sm font-medium text-gray-400">Class</p>
                <p className="text-lg font-semibold text-white">
                  {student.sclassName.sclassName}
                </p>
              </div>
            </div>
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">School</p>
                <p className="text-lg font-semibold text-white">
                  {student.school.schoolName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 px-8 py-4">
          <p className="text-sm text-gray-400">
            Last login: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashBoard;
