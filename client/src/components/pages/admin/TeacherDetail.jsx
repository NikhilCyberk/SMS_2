// src/components/TeacherDetail.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  FaCalendarAlt,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const TeacherDetail = () => {
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { teacherId } = useParams();


  useEffect(() => {
    const fetchTeacherDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teacher/${teacherId}`
        );
        
        setTeacher(response.data);
      } catch (error) {
        console.error("Error fetching teacher details:", error);
        setError("Error fetching teacher details.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetail();
  }, [teacherId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Teacher Detail</h2>
      {teacher ? (
        <div>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-700">
                  <th className="py-2 px-4">Attribute</th>
                  <th className="py-2 px-4">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 flex items-center">
                    <FaChalkboardTeacher className="mr-2" /> Name
                  </td>
                  <td className="border px-4 py-2">{teacher.name}</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 flex items-center">
                    <FaSchool className="mr-2" /> School
                  </td>
                  <td className="border px-4 py-2">
                    {teacher.school.schoolName}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 flex items-center">
                    <FaBook className="mr-2" /> Subject
                  </td>
                  <td className="border px-4 py-2">
                    {teacher.teachSubject
                      ? teacher.teachSubject.subName
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Class</td>
                  <td className="border px-4 py-2">
                    {teacher.teachSclass.sclassName}
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Role</td>
                  <td className="border px-4 py-2">{teacher.role}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2">
            Attendance Records
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-800 rounded-lg">
              <thead>
                <tr className="bg-gray-700">
                  <th className="py-2 px-4">
                    <FaCalendarAlt className="inline mr-2" />
                    Date
                  </th>
                  <th className="py-2 px-4">Present Count</th>
                  <th className="py-2 px-4">Absent Count</th>
                </tr>
              </thead>
              <tbody>
                {teacher.attendance && teacher.attendance.length > 0 ? (
                  teacher.attendance.map((record, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        {new Date(record.date).toLocaleDateString()}
                      </td>
                      <td className="border px-4 py-2">
                        {record.presentCount || "N/A"}
                      </td>
                      <td className="border px-4 py-2">
                        {record.absentCount || "N/A"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="border px-4 py-2 text-center">
                      No attendance records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <p>No teacher found</p>
      )}
    </div>
  );
};

export default TeacherDetail;
