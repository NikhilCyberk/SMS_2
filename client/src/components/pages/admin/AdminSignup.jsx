import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/signup", {
        name,
        password,
        email,
        schoolName,
      })
      .then((response) => {
        console.log(response);
        if (response.status) {
          confirm(response.data.message);
          navigate("/login");
        }
        // console.log(response);
      })
      .catch((error) => {
        confirm(error);
      });
  };

  return (
    // <>
    //   <div className="container mx-auto p-4">
    //     <div className="max-w-md mx-auto bg-lime-400 p-8 rounded-md shadow-md mt-[10rem]">
    //       <h1 className="text-2xl font-bold mb-4">Admin Signup</h1>
    //       <form onSubmit={handleSubmit}>
    //         <label
    //           htmlFor="name"
    //           className="block text-sm font-medium text-gray-600"
    //         >
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="name"
    //           onChange={(e) => setName(e.target.value)}
    //           className="mt-1 p-2 w-full border rounded-md"
    //         />

    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium text-gray-600 mt-4"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Email"
    //           onChange={(e) => setSchoolName(e.target.value)}
    //           className="mt-1 p-2 w-full border rounded-md"
    //         />
    //         <label
    //           htmlFor="schoolName"
    //           className="block text-sm font-medium text-gray-600 mt-4"
    //         >
    //           School Name
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="School Name"
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="mt-1 p-2 w-full border rounded-md"
    //         />

    //         <label
    //           htmlFor="password"
    //           className="block text-sm font-medium text-gray-600 mt-4"
    //         >
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="********"
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="mt-1 p-2 w-full border rounded-md"
    //         />

    //         <button
    //           type="submit"
    //           className="mt-4 bg-blue-500 text-white p-2 rounded-md"
    //         >
    //           Sign Up
    //         </button>
    //         <p className="mt-2 text-gray-600">
    //           Have an Account{" "}
    //           <Link to="/login" className="text-blue-500">
    //             Login
    //           </Link>
    //         </p>
    //       </form>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-blue-600 p-8 rounded-md shadow-md mt-[10rem] text-gray-800">
          <h1 className="text-3xl font-bold mb-4">Admin Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Username
              </label>
              <input
                type="text"
                placeholder="Your Username"
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="text"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="schoolName" className="block text-sm font-medium">
                School Name
              </label>
              <input
                type="text"
                placeholder="Your School Name"
                onChange={(e) => setSchoolName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-white text-blue-500 p-2 rounded-md hover:bg-blue-100 focus:outline-none focus:bg-blue-100"
            >
              Sign Up
            </button>

            <p className="mt-2 text-gray-300">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-300 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminSignup;
