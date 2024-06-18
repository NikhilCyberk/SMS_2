// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const UpdateAttendanceForm = ({ studentId, subjects }) => {
// // //   const [formData, setFormData] = useState({
// // //     subName: "",
// // //     status: "Present", // Assuming default status is "Present"
// // //     date: new Date().toISOString().split("T")[0], // Today's date in 'YYYY-MM-DD' format
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.put(
// // //         `http://localhost:3000/student-attendance/${studentId}`,
// // //         formData
// // //       );
// // //       // Optionally, you can fetch and update the student data after successful submission
// // //     } catch (error) {
// // //       console.error("Error updating attendance:", error);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <label>
// // //         Subject:
// // //         <select name="subName" value={formData.subName} onChange={handleChange}>
// // //           <option value="">Select Subject</option>
// // //           {subjects.map((subject) => (
// // //             <option key={subject._id} value={subject._id}>
// // //               {subject.subName}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </label>
// // //       <label>
// // //         Status:
// // //         <select name="status" value={formData.status} onChange={handleChange}>
// // //           <option value="Present">Present</option>
// // //           <option value="Absent">Absent</option>
// // //         </select>
// // //       </label>
// // //       <label>
// // //         Date:
// // //         <input
// // //           type="date"
// // //           name="date"
// // //           value={formData.date}
// // //           onChange={handleChange}
// // //         />
// // //       </label>
// // //       <button type="submit">Update Attendance</button>
// // //     </form>
// // //   );
// // // };

// // // export default UpdateAttendanceForm;

// // import React, { useState } from "react";
// // import axios from "axios";

// // const UpdateAttendanceForm = ({ studentId, subjects }) => {
// //   const [formData, setFormData] = useState({
// //     subName: "",
// //     status: "Present", // Assuming default status is "Present"
// //     date: new Date().toISOString().split("T")[0], // Today's date in 'YYYY-MM-DD' format
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.put(
// //         `http://localhost:3000/student-attendance/${studentId}`,
// //         formData
// //       );
// //       // Optionally, you can fetch and update the student data after successful submission
// //     } catch (error) {
// //       console.error("Error updating attendance:", error);
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="bg-gray-800 p-6 rounded-lg shadow-lg"
// //     >
// //       <label className="block text-gray-300 mb-4">
// //         Subject:
// //         <select
// //           name="subName"
// //           value={formData.subName}
// //           onChange={handleChange}
// //           className="block w-full mt-1 py-2 px-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //         >
// //           <option value="">Select Subject</option>
// //           {subjects.map((subject) => (
// //             <option key={subject._id} value={subject._id}>
// //               {subject.subName}
// //             </option>
// //           ))}
// //         </select>
// //       </label>
// //       <label className="block text-gray-300 mb-4">
// //         Status:
// //         <select
// //           name="status"
// //           value={formData.status}
// //           onChange={handleChange}
// //           className="block w-full mt-1 py-2 px-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //         >
// //           <option value="Present">Present</option>
// //           <option value="Absent">Absent</option>
// //         </select>
// //       </label>
// //       <label className="block text-gray-300 mb-4">
// //         Date:
// //         <input
// //           type="date"
// //           name="date"
// //           value={formData.date}
// //           onChange={handleChange}
// //           className="block w-full mt-1 py-2 px-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-md focus:outline-none focus:border-blue-500"
// //         />
// //       </label>
// //       <button
// //         type="submit"
// //         className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
// //       >
// //         Update Attendance
// //       </button>
// //     </form>
// //   );
// // };

// // export default UpdateAttendanceForm;

// import React, { useState } from "react";
// import axios from "axios";
// import { FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";

// const UpdateAttendanceForm = ({ studentId, subjects }) => {
//   const [formData, setFormData] = useState({
//     subName: "",
//     status: "Present",
//     date: new Date().toISOString().split("T")[0],
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       await axios.put(
//         `http://localhost:3000/student-attendance/${studentId}`,
//         formData
//       );
//       // Optionally, you can fetch and update the student data after successful submission
//       setFormData({
//         subName: "",
//         status: "Present",
//         date: new Date().toISOString().split("T")[0],
//       });
//     } catch (error) {
//       setError("Error updating attendance. Please try again.");
//       console.error("Error updating attendance:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6"
//     >
//       <h2 className="text-2xl font-bold mb-6">Update Attendance</h2>
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//           {error}
//         </div>
//       )}
//       <div className="mb-4">
//         <label htmlFor="subName" className="block text-gray-700 font-bold mb-2">
//           Subject
//         </label>
//         <select
//           id="subName"
//           name="subName"
//           value={formData.subName}
//           onChange={handleChange}
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//         >
//           <option value="">Select Subject</option>
//           {subjects.map((subject) => (
//             <option key={subject._id} value={subject._id}>
//               {subject.subName}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="status" className="block text-gray-700 font-bold mb-2">
//           Status
//         </label>
//         <div className="flex items-center">
//           <div className="flex items-center mr-4">
//             <input
//               id="present"
//               type="radio"
//               name="status"
//               value="Present"
//               checked={formData.status === "Present"}
//               onChange={handleChange}
//               className="form-radio h-5 w-5 text-green-500"
//             />
//             <label htmlFor="present" className="ml-2 text-gray-700">
//               <FaCheck className="inline-block text-green-500 mr-1" />
//               Present
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               id="absent"
//               type="radio"
//               name="status"
//               value="Absent"
//               checked={formData.status === "Absent"}
//               onChange={handleChange}
//               className="form-radio h-5 w-5 text-red-500"
//             />
//             <label htmlFor="absent" className="ml-2 text-gray-700">
//               <FaTimes className="inline-block text-red-500 mr-1" />
//               Absent
//             </label>
//           </div>
//         </div>
//       </div>
//       <div className="mb-6">
//         <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
//           Date
//         </label>
//         <div className="relative">
//           <input
//             id="date"
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//           <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
//             <FaCalendarAlt className="text-gray-400" />
//           </div>
//         </div>
//       </div>
//       <button
//         type="submit"
//         disabled={isLoading}
//         className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//           isLoading
//             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//             : "bg-indigo-600 hover:bg-indigo-700 text-white"
//         }`}
//       >
//         {isLoading ? "Updating..." : "Update Attendance"}
//       </button>
//     </form>
//   );
// };

// export default UpdateAttendanceForm;

import React, { useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaCheck, FaTimes } from "react-icons/fa";

const UpdateAttendanceForm = ({ studentId, subjects }) => {
  const [formData, setFormData] = useState({
    subName: "",
    status: "Present",
    date: new Date().toISOString().split("T")[0],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false); // State to track form visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await axios.put(
        `http://localhost:3000/student-attendance/${studentId}`,
        formData
      );
      // Optionally, you can fetch and update the student data after successful submission
      setFormData({
        subName: "",
        status: "Present",
        date: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      setError("Error updating attendance. Please try again.");
      console.error("Error updating attendance:", error);
    } finally {
      setIsLoading(false);
      setShowForm(false); // Hide the form after submission
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        {showForm ? "Hide Update Form" : "Show Update Form"}
      </button>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-lg shadow-lg p-6 text-white mt-4"
        >
          <h2 className="text-2xl font-bold mb-6">Update Attendance</h2>
          {error && (
            <div className="bg-red-800 border border-red-400 text-red-200 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="subName"
              className="block text-gray-100 font-bold mb-2"
            >
              Subject
            </label>
            <select
              id="subName"
              name="subName"
              value={formData.subName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject._id} value={subject._id}>
                  {subject.subName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-100 font-bold mb-2"
            >
              Status
            </label>
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <input
                  id="present"
                  type="radio"
                  name="status"
                  value="Present"
                  checked={formData.status === "Present"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-green-400"
                />
                <label htmlFor="present" className="ml-2 text-gray-100">
                  <FaCheck className="inline-block text-green-400 mr-1" />
                  Present
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="absent"
                  type="radio"
                  name="status"
                  value="Absent"
                  checked={formData.status === "Absent"}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-red-400"
                />
                <label htmlFor="absent" className="ml-2 text-gray-100">
                  <FaTimes className="inline-block text-red-400 mr-1" />
                  Absent
                </label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-gray-100 font-bold mb-2"
            >
              Date
            </label>
            <div className="relative">
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-100" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isLoading
                ? "bg-gray-600 text-gray-500 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? "Updating..." : "Update Attendance"}
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateAttendanceForm;
