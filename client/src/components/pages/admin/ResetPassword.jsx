import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { token } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/resetPassword/" + token, {
        password,
      })
      .then((response) => {
        // console.log(response.data.status);
        if (response.data.status) {
          navigate("/login");
        }
        // console.log(response.data);
      })
      .catch((error) => {
        confirm(error);
      });
  };

  return (
    <>
      {/* <div className="max-w-screen max-h-screen">
        <div className="container mt-[15%] mx-auto p-4"> */}
      <div className="bg-white p-8 rounded-md shadow-m w-auto h-auto md:w-[30%]">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mt-4"
          >
            New Password
          </label>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] rounded-md"
          >
            Reset Password
          </button>
          <p className="mt-8 text-gray-600">
            <Link
              to="/authorization/login"
              className="mt-4 mr-4 bg-lime-400 text-white p-2 rounded-md"
            >
              Login
            </Link>

            <Link
              to="/authorization/signup"
              className="bg-blue-600 mt-40 text-white p-2 rounded-md"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default ResetPassword;
