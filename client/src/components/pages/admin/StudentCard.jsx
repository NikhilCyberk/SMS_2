import React from "react";
import studentIng from "../../../assets/student.png";
import { Link } from "react-router-dom";
const StudentCard = () => {
  return (
    // <div>
    //   <div className="mt-[5rem] ml-[5rem]">
    //     <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //       <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    //         <img src={studentIng} alt="" srcset="" />
    //       </div>
    //       <div class="p-6">
    //         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //           Student
    //         </h5>
    //         <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    //           Login as an administrator to access the dashboard to manage app
    //           data.
    //         </p>
    //       </div>
    //       <div class="p-6 pt-0">
    //         <button
    //           data-ripple-light="true"
    //           type="button"
    //           class="select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //         >
    //           Signup
    //         </button>
    //         <button
    //           data-ripple-light="true"
    //           type="button"
    //           class="select-none ml-[1rem] rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //         >
    //           Login
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <>
    //   <div className=" flex min-w-40 max-w-80 h-auto flex-col rounded-xl bg-white shadow-md overflow-hidden mx-10 my-10">
    //     <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-600 to-blue-400">
    //       <img
    //         src={studentIng}
    //         alt="student"
    //         className="w-full h-full object-contain"
    //       />
    //     </div>
    //     <div className="p-6">
    //       <h5 className="mb-2 text-2xl font-bold text-gray-800">Teacher</h5>
    //       <p className="text-base font-light leading-relaxed text-gray-600">
    //         Login as a teacher to access the dashboard and manage app data.
    //       </p>
    //     </div>
    //     <div className="p-6 pt-0 flex items-center justify-between bg-gradient-to-t from-gray-100 to-white">
    //       <Link to="/signup">
    //         <button
    //           type="button"
    //           className="select-none rounded-lg bg-blue-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
    //         >
    //           Signup
    //         </button>
    //       </Link>
    //       <Link to="/login">
    //         <button
    //           type="button"
    //           className="select-none ml-4 rounded-lg bg-white text-blue-600 py-3 px-6 text-center font-semibold uppercase border border--blue-600 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring focus:border-purple-500"
    //         >
    //           Login
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="w-full lg:w-1/2">
        {/* Card Three */}
        <div className="bg-blue-900 rounded-xl min-h-[585px] text-white flex items-center relative p-6 lg:p-12 z-10">
          {/* Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={"studednt image"} alt="" />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
                Student dashboard
              </h1>
              <Link to={"/st_login"}>
                <button
                  className={`px-7 py-3.5 leading-none rounded-lg bg-red-500 text-white font-bold mt-12`}
                >
                  Sign in
                </button>
              </Link>
            </div>
            <div className="col-span-6">
              <div className="absolute bottom-0  right-10 -z-10">
                <img src={studentIng} alt="" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
