import React from "react";
import teacherIng from "../../../assets/teacher.png";
import { Link } from "react-router-dom";

const TeacherCard = () => {
  return (

    <>
      {/* <div className="flex justify-center items-center mt-20 ml-20"> */}
      {/* <div className="relative w-80 h-auto flex flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden ">
        <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
          <img
            src={teacherIng}
            alt="Teacher"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-900">
            Teacher
          </h5>
          <p className="text-base font-light leading-relaxed text-gray-700">
            Login as a teacher to access the dashboard and manage app data.
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-blue-600 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-all"
          >
            Signup
          </button>
          <button
            type="button"
            className="ml-4 rounded-lg bg-white py-3 px-6 text-center font-sans text-xs font-bold uppercase text-blue-600 shadow-md hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition-all"
          >
            Login
          </button>
        </div>
      </div>
      </div> */}



      <div className=" flex min-w-40 max-w-80 h-auto my-10 flex-col rounded-xl bg-white shadow-md overflow-hidden mx-10">
        <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-400 to-blue-600">
          <img
            src={teacherIng}
            alt="Admin"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold text-gray-800">
            Teacher
          </h5>
          <p className="text-base font-light leading-relaxed text-gray-600">
            Login as a teacher to access the dashboard and manage app data.
          </p>
        </div>
        <div className="p-6 pt-0 flex items-center justify-between bg-gradient-to-t from-gray-100 to-white">
          <Link to="/signup">
            <button
              type="button"
              className="select-none rounded-lg bg-blue-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
            >
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="select-none ml-4 rounded-lg bg-white text-blue-600 py-3 px-6 text-center font-semibold uppercase border border-blue-600 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring focus:border-purple-500"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeacherCard;
