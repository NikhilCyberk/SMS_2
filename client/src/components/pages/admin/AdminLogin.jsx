import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/login", {
        email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("schoolName", response.data.schoolName);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("_id", response.data._id);
        if (response.data.status) {
          navigate("/admin-dashboard");
        }
      })
      .catch((error) => {
        confirm(error);
      });
  };

  return (
    //  <div className="container max-w-full max-h-full p-4 bg-blue-100">
    //       <div className="container max-w-full max-h-full relative overflow-hidden bg-lightblue">
    //         <div className="max-w-md mx-auto bg-lime-400 p-8 rounded-md shadow-md mt-[10rem]">
    //           <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
    //           <form onSubmit={handleSubmit}>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium text-gray-600 mt-4"
    //             >
    //               Email
    //             </label>
    //             <input
    //               type="text"
    //               placeholder="Email"
    //               onChange={(e) => setEmail(e.target.value)}
    //               className="mt-1 p-2 w-full border rounded-md"
    //             />

    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium text-gray-600 mt-4"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               placeholder="********"
    //               onChange={(e) => setPassword(e.target.value)}
    //               className="mt-1 p-2 w-full border rounded-md"
    //             />

    //             <button
    //               type="submit"
    //               className="mt-4 bg-blue-500 text-white p-2 rounded-md"
    //               >
    //               Login
    //               </button>
    //               <div>
    //               <Link to="/forgot-password" className="text-blue-500">
    //               Forgot Password
    //               </Link>
    //               </div>
    //               <p className="mt-8 text-gray-600">
    //               Dont't Have Account{"  "}
    //               <Link to="/signup" className="text-blue-500">
    //               Signup
    //               </Link>
    //               </p>
    //               </form>
    //               </div>
    //               </div>
    //             </>

    <>
      <div className="container max-w-full max-h-full relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-[10rem]">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Admin Login</h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mt-4"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="mt-6 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <div className="mt-4">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot Password
              </Link>
            </div>
            <p className="mt-8 text-gray-600">
              Don't Have an Account?{" "}
              <Link to="/signup" className="text-blue-500">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
