import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminProfile from "./AdminProfile";
import Sidebar from "../../../bar/Sidebar";
import Topbar from "../../../bar/Topbar";
import SideB from "../../../bar/SideB";

const AdminDashboard = () => {
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  // const [verified, setVerified] = useState(false);

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
      <div class="min-h-screen bg-gray-100">
        <div class="flex items-center justify-center h-screen">
          <div class="max-w-4xl w-full bg-white shadow-lg rounded-lg">
            <h1 class="text-3xl font-bold text-gray-800 bg-blue-500 text-white p-5 rounded-t-lg">
              Admin Dashboard
            </h1>
            <div class="flex p-5">
              <div class="flex flex-col w-1/2 pr-4">
                <div class="bg-white rounded-lg shadow-lg mb-4 p-6">
                  <h2 class="text-xl font-semibold text-gray-800 mb-3">
                    Admin Profile
                  </h2>
                  <AdminProfile />
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <h2 class="text-xl font-semibold text-gray-800 mb-3">
                    Recent Activities
                  </h2>
                  {/* Add recent activities component or content here */}
                </div>
              </div>
              <div class="flex flex-col w-1/2 pl-4">
                <div class="bg-white rounded-lg shadow-lg mb-4 p-6">
                  <h2 class="text-xl font-semibold text-gray-800 mb-3">
                    Statistics
                  </h2>
                  {/* Add statistics component or content here */}
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                  <h2 class="text-xl font-semibold text-gray-800 mb-3">
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
  // const navigate = useNavigate();

  // axios.defaults.withCredentials = true;

  // useEffect(() => {
  //   axios.get("http://localhost:3000/auth/verify").then((response) => {
  //     console.log(response.data.status);
  //     if (response.data.status) {
  //     } else {
  //       navigate("/login");
  //     }
  //   });
  // }, []);
  // return (
  //   <div>
  //     <h1>admin dashboard</h1>
  //   </div>
  // );
};

export default AdminDashboard;
