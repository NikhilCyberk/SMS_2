import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminProfile from "../AdminProfile";
import { useEffect, useState } from "react";


const AdminDashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/verify");
        window.location.reload();
        // console.log(response.data);
        if (response.data.status) {
          // setVerified(true);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="flex items-center justify-center h-screen">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 bg-blue-500 text-white p-5 rounded-t-lg">
              Admin Dashboard
            </h1>
            <div className="flex p-5">
              <div className="flex flex-col w-1/2 pr-4">
                <div className="bg-white rounded-lg shadow-lg mb-4 p-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    Admin Profile
                  </h2>
                  <AdminProfile />
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
                  {/* Add statistics component or content here */}
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
    </>
  );

};

export default AdminDashboard;
