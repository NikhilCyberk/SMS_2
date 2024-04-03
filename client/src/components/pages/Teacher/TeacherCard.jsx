import React from "react";
import teacherIng from "../../../assets/teacher.png";

const TeacherCard = () => {
  return (
    // <div>
    //   <div className="mt-[5rem] ml-[5rem]">
    //     <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //       <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    //         <img src={teacherIng} alt="" srcset="" />
    //       </div>
    //       <div class="p-6">
    //         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //           Teacher
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

    <>
      <div className="flex justify-center items-center mt-20 ml-20">
        <div className="relative w-80 flex flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
          <div className="relative h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600">
            <img
              src={teacherIng}
              alt="Teacher"
              className="w-full h-full object-cover"
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
      </div>
    </>
  );
};

export default TeacherCard;
