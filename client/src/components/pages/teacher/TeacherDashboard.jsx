// import React from "react";

// const TeacherDashboard = () => {
//   return <div>teacher dashboard</div>;
// };

// export default TeacherDashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TeacherDashboard = () => {
  const teacher_id = localStorage.getItem("teachder_id");
  const [teacher, setTeacher] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teacher/${teacher_id}`
        );
        setTeacher(response.data);
      } catch (err) {
        setError("Failed to fetch teacher details");
      }
    };
    fetchTeacherDetail();
  }, [teacher_id]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-white mb-8 text-center">
              Teacher Dashboard
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard icon="user" label="Name" value={teacher.name} />
              <InfoCard icon="mail" label="Email" value={teacher.email} />
              <InfoCard
                icon="school"
                label="School"
                value={teacher.school?.schoolName}
              />
              <InfoCard
                icon="book"
                label="Subject"
                value={teacher.teachSubject?.subName}
              />
              <InfoCard
                icon="users"
                label="Class"
                value={teacher.teachSclass?.sclassName}
              />
            </div>
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

const InfoCard = ({ icon, label, value }) => {
  const iconMap = {
    user: (
      <svg
        className="h-6 w-6 text-indigo-400"
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
    ),
    mail: (
      <svg
        className="h-6 w-6 text-indigo-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    school: (
      <svg
        className="h-6 w-6 text-indigo-400"
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
    ),
    book: (
      <svg
        className="h-6 w-6 text-indigo-400"
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
    ),
    users: (
      <svg
        className="h-6 w-6 text-indigo-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-gray-700 rounded-xl p-6 shadow-md transition duration-300 ease-in-out hover:bg-gray-600">
      <div className="flex items-center space-x-4">
        <div className="bg-indigo-600 p-3 rounded-full">{iconMap[icon]}</div>
        <div>
          <p className="text-sm font-medium text-gray-400">{label}</p>
          <p className="text-lg font-semibold text-white">{value || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
