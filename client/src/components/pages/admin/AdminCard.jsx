import React from "react";
import adminImg from "../../../assets/admin.png";
import { Link } from "react-router-dom";

const AdminCard = () => {
  return (

    // <div className="h-auto w-auto p-20">
    <div className=" flex min-w-40 max-w-80 h-auto flex-col rounded-xl bg-white shadow-md overflow-hidden mx-10 my-10">
      <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-400 to-blue-600">
        <img
          src={adminImg}
          alt="Admin"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h5>
        <p className="text-base font-light leading-relaxed text-gray-600">
          Explore the power of administration with our premium dashboard.
        </p>
      </div>
      <div className="p-6 pt-0 flex items-center justify-between bg-gradient-to-t from-gray-100 to-white">
        <Link to="/authorization/signup">
          <button
            type="button"
            className="select-none rounded-lg bg-blue-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
          >
            Signup
          </button>
        </Link>
        <Link to="/authorization/login">
          <button
            type="button"
            className="select-none ml-4 rounded-lg bg-white text-blue-600 py-3 px-6 text-center font-semibold uppercase border border-blue-600 shadow-md transition-all hover:bg-gray-200 focus:outline-none focus:ring focus:border-purple-500"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default AdminCard;
