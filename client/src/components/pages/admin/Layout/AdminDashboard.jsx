import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DoughnutChart from "../Layout/DoughnutChart";
import DashboardChart from "../Layout/DashboardChart";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaBook,
} from "react-icons/fa";

const AdminDashboard = () => {
  const id = localStorage.getItem("_id");
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [verified, setVerified] = useState(false);
  const [statistics, setStatistics] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
    totalSubjects: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/verify");
        if (id) {
          setVerified(true);
          fetchStatistics();
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching verification data");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const fetchStatistics = async () => {
    try {
      const studentCount = await axios.get(
        `http://localhost:3000/get-students/${id}`
      );
      const teacherCount = await axios.get(
        `http://localhost:3000/teachers/${id}`
      );
      const classCount = await axios.get(
        `http://localhost:3000/get-class/${id}`
      );
      const subjectCount = await axios.get(
        `http://localhost:3000/all-subjects/${id}`
      );

      setStatistics({
        totalStudents: studentCount.data.length,
        totalTeachers: teacherCount.data.length,
        totalClasses: classCount.data.length,
        totalSubjects: subjectCount.data.length,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
      setError("Error fetching statistics data");
    }
  };

  return (
    <div className="min-h-screen py-10 px-5 bg-gray-900 text-white">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="loader"></div>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">{error}</p>
        </div>
      ) : verified ? (
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-10">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <StatCard
              title="Total Students"
              count={statistics.totalStudents}
              color="bg-blue-700"
              icon={<FaUserGraduate size={24} />}
            />
            <StatCard
              title="Total Teachers"
              count={statistics.totalTeachers}
              color="bg-green-700"
              icon={<FaChalkboardTeacher size={24} />}
            />
            <StatCard
              title="Total Classes"
              count={statistics.totalClasses}
              color="bg-yellow-700"
              icon={<FaClipboardList size={24} />}
            />
            <StatCard
              title="Total Subjects"
              count={statistics.totalSubjects}
              color="bg-purple-700"
              icon={<FaBook size={24} />}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <DashboardChart data={statistics} />
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <DoughnutChart data={statistics} />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Section title="Recent Activities">
              {/* Add recent activities component or content here */}
            </Section>
            <Section title="Notifications">
              {/* Add notifications component or content here */}
            </Section>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">No data available</p>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ title, count, color, icon }) => (
  <div
    className={`flex items-center shadow-lg rounded-lg p-6 ${color} text-white`}
  >
    <div className="mr-4">{icon}</div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold">{count}</p>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-gray-800 shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default AdminDashboard;
