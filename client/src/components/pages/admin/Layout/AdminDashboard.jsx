// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import AdminProfile from "../AdminProfile";
// import { useEffect, useState } from "react";
// import Topbar from "../../../bar/Topbar";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   axios.defaults.withCredentials = true;
//   const [verified, setVerified] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/verify");
//         // window.location.reload();
//         console.log(response.data.status);
//         // let a = response.data.status;
//         if (response.data.status === true) {
//           // console.log(verified, 2000);
//           // coso
//           setVerified(true);
//         } else {
//           navigate("/login");
//         }
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       {verified ? (
//        <div>
//             <div className="min-h-screen bg-gray-100">
//             <div className="flex items-center justify-center h-screen">
//               <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
//                 <h1 className="text-3xl font-bold text-gray-800 bg-blue-500 text-white p-5 rounded-t-lg">
//                   Admin Dashboard
//                 </h1>
//                 <div className="flex p-5">
//                   <div className="flex flex-col w-1/2 pr-4">
//                     <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
//                       <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                         Admin Profile
//                       </h2>
//                       <AdminProfile
//                         id={localStorage.getItem("_id")}
//                         email={localStorage.getItem("email")}
//                         role={localStorage.getItem("role")}
//                         schoolName={localStorage.getItem("schoolName")}
//                       />
//                     </div>
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                       <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                         Recent Activities
//                       </h2>
//                       {/* Add recent activities component or content here */}
//                     </div>
//                   </div>
//                   <div className="flex flex-col w-1/2 pl-4">
//                     <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
//                       <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                         Statistics
//                       </h2>
//                       {/* Add statistics component or content here */}
//                     </div>
//                     <div className="bg-white rounded-lg shadow-lg p-6">
//                       <h2 className="text-xl font-semibold text-gray-800 mb-3">
//                         Notifications
//                       </h2>
//                       {/* Add notifications component or content here */}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>
//       ) : (
//         <>no data</>
//       )}
//     </>
//   );
// };

// export default AdminDashboard;

import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminProfile from "../AdminProfile";
import { useEffect, useState } from "react";
import Topbar from "../../../bar/Topbar";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/verify");
        // console.log(response.data.status);
        if (id) {
          setVerified(true);
          fetchStatistics();
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
    }
  };

  return (
    <div>
      {verified ? (
        <div className="h-screen  bg-gray-100">
          <div className="flex items-center justify-center h-screen">
            <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
              <div className="flex p-5">
                <div className="flex flex-col w-1/2 pr-4">
                  <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      Admin Profile
                    </h2>
                    <AdminProfile
                      id={localStorage.getItem("_id")}
                      email={localStorage.getItem("email")}
                      role={localStorage.getItem("role")}
                      schoolName={localStorage.getItem("schoolName")}
                    />
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      Recent Activities
                    </h2>
                    {/* Add recent activities component or content here */}
                  </div>
                </div>
                <div className="flex flex-col w-1/2 pl-4">
                  <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      Statistics
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-500 text-white rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Total Students
                        </h3>
                        <p className="text-3xl">{statistics.totalStudents}</p>
                      </div>
                      <div className="bg-green-500 text-white rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Total Teachers
                        </h3>
                        <p className="text-3xl">{statistics.totalTeachers}</p>
                      </div>
                      <div className="bg-yellow-500 text-white rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Total Classes
                        </h3>
                        <p className="text-3xl">{statistics.totalClasses}</p>
                      </div>
                      <div className="bg-purple-500 text-white rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          Total Subjects
                        </h3>
                        <p className="text-3xl">{statistics.totalSubjects}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-3">
                      Notifications
                    </h2>
                    {/* Add notifications component or content here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>no data</>
      )}
    </div>
  );
};

export default AdminDashboard;
