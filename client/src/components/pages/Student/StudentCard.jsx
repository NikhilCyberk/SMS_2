import React from "react";
import studentIng from "../../../assets/student.png";
const StudentCard = () => {
  return (
    <div>
      <div className="mt-[5rem] ml-[5rem]">
        <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={studentIng} alt="" srcset="" />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Student
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              Login as an administrator to access the dashboard to manage app
              data.
            </p>
          </div>
          <div class="p-6 pt-0">
            <button
              data-ripple-light="true"
              type="button"
              class="select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Signup
            </button>
            <button
              data-ripple-light="true"
              type="button"
              class="select-none ml-[1rem] rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
