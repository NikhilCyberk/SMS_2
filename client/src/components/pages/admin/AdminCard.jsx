// import React from "react";
// import adminImg from "../../../assets/admin.png";
// import { Link } from "react-router-dom";

// const AdminCard = () => {
//   return (
//     // <div className="h-auto w-auto p-20">
//     <div className=" flex min-w-40 max-w-80 h-auto flex-col rounded-xl bg-white shadow-md overflow-hidden mx-10 my-10">
//       <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-r from-blue-400 to-blue-600">
//         <img
//           src={adminImg}
//           alt="Admin"
//           className="w-full h-full object-contain"
//         />
//       </div>
//       <div className="p-6">
//         <h5 className="mb-2 text-2xl font-bold text-gray-800">
//           Admin Dashboard
//         </h5>
//         <p className="text-base font-light leading-relaxed text-gray-600">
//           Explore the power of administration with our premium dashboard.
//         </p>
//       </div>
//       <div className="p-6 pt-0 flex items-center justify-between bg-gradient-to-t from-gray-100 to-white">
//         <Link to="/signup">
//           <button
//             type="button"
//             className="select-none rounded-lg bg-blue-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
//           >
//             Signup
//           </button>
//         </Link>
//         <Link to="/login">
//           <button
//             type="button"
//             className="select-none ml-4 rounded-lg bg-white text-blue-600 py-3 px-6 text-center font-semibold uppercase border border-blue-600 shadow-md transition-all hover:bg-gray-200 focus:outline-none focus:ring focus:border-purple-500"
//           >
//             Login
//           </button>
//         </Link>
//       </div>
//     </div>
//     // </div>
//   );
// };

// export default AdminCard;
import React from "react";
import adminImg from "../../../assets/admin.png";
import { Link } from "react-router-dom";

const AdminCard = () => {
  return (
    //     <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    //       <div className="relative h-48 md:h-64">
    //         <img
    //           src={adminImg}
    //           alt="Admin"
    //           className="w-64 h-64 object-cover object-center"
    //         />
    //       </div>
    //       <div className="p-6 md:p-8">
    //         <h5 className="text-2xl md:text-3xl font-bold text-gray-800">
    //           Admin Dashboard
    //         </h5>
    //         <p className="text-base md:text-lg font-light leading-relaxed text-gray-600 mt-4">
    //           Explore the power of administration with our premium dashboard.
    //         </p>
    //         <div className="flex justify-end mt-6">
    //           <Link to="/signup">
    //             <button
    //               type="button"
    //               className="select-none rounded-lg bg-blue-600 text-white py-3 px-6 text-center font-semibold uppercase shadow-md transition-all hover:bg-purple-700 focus:outline-none focus:ring focus:border-purple-500"
    //             >
    //               Signup
    //             </button>
    //           </Link>
    //           <Link to="/login">
    //             <button
    //               type="button"
    //               className="select-none ml-4 rounded-lg bg-white text-blue-600 py-3 px-6 text-center font-semibold uppercase border border-blue-600 shadow-md transition-all hover:bg-gray-200 focus:outline-none focus:ring focus:border-purple-500"
    //             >
    //               Login
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    <>
      <div>
        <div className="bg-orange-700 rounded-xl min-h-[280px] text-white flex items-center relative p-6 lg:p-12 mb-6 z-10">
          {/* Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={"adminImg"} alt="" />
          </div>
          <div className="absolute bottom-0 left-0 -z-10">
            <img
              src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
              alt=""
            />
          </div>
          <div className="absolute top-0 right-0 -z-10">
            <img
              src="https://cdn.easyfrontend.com/pictures/circle-abstract.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              +
              <h1 className="text-[32px] md:text-5xl font-bold leading-[1.1]">
                Admin
              </h1>
              <Link to="/signup">
                <button
                  type="button"
                  className="px-7 py-3.5 leading-none rounded-lg bg-white text-orange-700 font-bold mt-12"
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  className="ml-4 px-7 py-3.5 leading-none rounded-lg bg-green-500 text-white font-bold mt-12"
                >
                  Sign In
                </button>
              </Link>
            </div>
            <div className="col-span-6">
              <div className="absolute bottom-0 right-5 -z-10 w-[20rem]">
                <img src={adminImg} alt="" className="max-w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
