// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const id = localStorage.getItem("_id");
//   const navigate = useNavigate();
//   axios.defaults.withCredentials = true;
//   const [verified, setVerified] = useState(false);
//   const [statistics, setStatistics] = useState({
//     totalStudents: 0,
//     totalTeachers: 0,
//     totalClasses: 0,
//     totalSubjects: 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/verify");
//         if (id) {
//           setVerified(true);
//           fetchStatistics();
//         } else {
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   const fetchStatistics = async () => {
//     try {
//       const studentCount = await axios.get(
//         `http://localhost:3000/get-students/${id}`
//       );
//       const teacherCount = await axios.get(
//         `http://localhost:3000/teachers/${id}`
//       );
//       const classCount = await axios.get(
//         `http://localhost:3000/get-class/${id}`
//       );
//       const subjectCount = await axios.get(
//         `http://localhost:3000/all-subjects/${id}`
//       );
//       setStatistics({
//         totalStudents: studentCount.data.length,
//         totalTeachers: teacherCount.data.length,
//         totalClasses: classCount.data.length,
//         totalSubjects: subjectCount.data.length,
//       });
//     } catch (error) {
//       console.error("Error fetching statistics:", error);
//     }
//   };

//   return (
//     <div>
//       {verified ? (
//         <div className="container mx-auto py-8">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">
//             Admin Dashboard
//           </h1>
//           <div className="grid grid-cols-2 gap-8">
//             <div className="bg-white shadow-md rounded-lg p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-4">
//                 Statistics
//               </h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-blue-500 text-white rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Total Students</h3>
//                   <p className="text-3xl">{statistics.totalStudents}</p>
//                 </div>
//                 <div className="bg-green-500 text-white rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Total Teachers</h3>
//                   <p className="text-3xl">{statistics.totalTeachers}</p>
//                 </div>
//                 <div className="bg-yellow-500 text-white rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Total Classes</h3>
//                   <p className="text-3xl">{statistics.totalClasses}</p>
//                 </div>
//                 <div className="bg-purple-500 text-white rounded-lg p-4">
//                   <h3 className="text-lg font-semibold mb-2">Total Subjects</h3>
//                   <p className="text-3xl">{statistics.totalSubjects}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-8 bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Recent Activities
//             </h2>
//             {/* Add recent activities component or content here */}
//           </div>
//           <div className="mt-8 bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Notifications
//             </h2>
//             {/* Add notifications component or content here */}
//           </div>
//         </div>
//       ) : (
//         <>no data</>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

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
      const studentCount = await axios.get(`http://localhost:3000/get-students/${id}`);
      const teacherCount = await axios.get(`http://localhost:3000/teachers/${id}`);
      const classCount = await axios.get(`http://localhost:3000/get-class/${id}`);
      const subjectCount = await axios.get(`http://localhost:3000/all-subjects/${id}`);
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
    <div className="min-h-screen  py-10 px-5">
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
          <h1 className="text-4xl font-bold text-gray-900 mb-10">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard title="Total Students" count={statistics.totalStudents} color="bg-blue-600" />
            <StatCard title="Total Teachers" count={statistics.totalTeachers} color="bg-green-600" />
            <StatCard title="Total Classes" count={statistics.totalClasses} color="bg-yellow-600" />
            <StatCard title="Total Subjects" count={statistics.totalSubjects} color="bg-purple-600" />
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
          <p className="text-gray-700">No data available</p>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ title, count, color }) => (
  <div className={`shadow-lg rounded-lg p-6 ${color} text-white`}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-4xl font-bold">{count}</p>
  </div>
);

const Section = ({ title, children }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </div>
);

export default AdminDashboard;
