import React from "react";
import adminImg from "../../../assets/admin.png";
import { Link } from "react-router-dom";

const AdminCard = () => {
  return (
    // <div>
    //   <div className="mt-[5rem] ml-[5rem]">
    //     <div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //       <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
    //         <img src={adminIng} alt="" srcset="" />
    //       </div>
    //       <div class="p-6">
    //         <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //           Admin
    //         </h5>
    //         <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    //           Login as an administrator to access the dashboard to manage app
    //           data.
    //         </p>
    //       </div>
    //       <div class="p-6 pt-0">
    //         <Link to="/login">
    //           <button
    //             data-ripple-light="true"
    //             type="button"
    //             class="select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //           >
    //             Signup
    //           </button>
    //         </Link>
    //         <Link to="/signup">
    //           <button
    //             data-ripple-light="true"
    //             type="button"
    //             class="select-none ml-[1rem] rounded-lg bg-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //           >
    //             Login
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="mt-16 ml-16">
      <div className="relative flex w-80 flex-col rounded-xl bg-white shadow-md overflow-hidden">
        <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-purple-500 to-indigo-600">
          <img
            src={adminImg}
            alt="Admin"
            className="w-full h-full object-cover"
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
          <Link to="/signup">
            <button
              type="button"
              className="select-none rounded-lg bg-purple-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
            >
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="select-none ml-4 rounded-lg bg-white text-purple-600 py-3 px-6 text-center font-semibold uppercase border border-purple-600 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring focus:border-purple-500"
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
