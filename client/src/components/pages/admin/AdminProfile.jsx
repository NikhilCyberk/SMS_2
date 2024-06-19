import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminProfile = ({ id, email, role, schoolName }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // const id = localStorage.getItem("_id");
    const token = localStorage.getItem("token");
    // const email = localStorage.getItem("email");
    // const role = localStorage.getItem("role");
    // const schoolName = localStorage.getItem("schoolName");
    // console.log(token);
    if (!token) {
      navigate("/signup");
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/admin/${id}`);
        if (response.status !== 200) {
          navigate("/login");
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <div className=" group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-blue-600 via-lime-200 to-lime-400 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
        <div className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500"></div>
        <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
          <span className="text-2xl font-semibold">
            <p> User: {}</p>
            {/* George Johnson */}
          </span>
          <p> School Name : {localStorage.getItem("schoolName")}</p>
          <p> Role: {localStorage.getItem("role")}</p>
          <p>Email: {localStorage.getItem("email")}</p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Link
            to={"#"}
            className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
          >
            Edit
          </Link>
          <button
            className="bg-red-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
