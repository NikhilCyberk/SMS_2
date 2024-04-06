import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/auth/forgot-password", {
        email,
      })
      .then((response) => {
        console.log(response.data.status);
        if (response.data.status) {
          alert("Password reset link sent to your email");
          navigate("/home");
        }
      })
      .catch((error) => {
        confirm(error);
      });
  };

  return (
    <>
      {/* <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
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
              className="mt-1 p-2 w-full border rounded-md"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] rounded-md"
            >
              Forgot
            </button>
            <p className="mt-8 text-gray-600">
              <Link
                to="/login"
                className="mt-4 mr-4 bg-lime-400 text-white p-2 rounded-md"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-blue-600 mt-40 text-white p-2 rounded-md"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div> */}

      {/* <div className="h-screen w-screen bg-white-50 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300"> */}
      <div className=" bg-white p-8 rounded-md shadow-m w-auto h-auto md:w-[30%]">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Forgot Password</h1>
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
            className="mt-1 p-2 w-full border rounded-md"
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white pl-[2rem] pr-[2rem] pt-[0.5rem] pb-[0.5rem] rounded-md"
          >
            Forgot
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
      {/* </div> */}
    </>
  );
};

export default ForgotPassword;
