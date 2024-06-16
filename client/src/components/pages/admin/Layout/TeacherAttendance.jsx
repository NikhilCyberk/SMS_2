// // src/components/TeacherAttendance.js

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TeacherAttendance = ({ teacherId }) => {
//   const [date, setDate] = useState("");
//   const [status, setStatus] = useState("");
//   const [message, setMessage] = useState("");
//   const [attendance, setAttendance] = useState([]);
//   const [teacher_Id, setTeacherId] = useState(teacherId);

//   useEffect(() => {
//     // Fetch the existing attendance data for the teacher on component mount
//     const fetchAttendance = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/teacher/${teacher_Id}`
//         );
//         setAttendance(response.data.attendance);
//       } catch (error) {
//         console.error("Error fetching attendance data:", error);
//       }
//     };

//     fetchAttendance();
//   }, []);

//   const handleAttendanceSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `http://localhost:3000/teacher-attendance/${teacherId}`,
//         {
//           status,
//           date,
//         }
//       );
//       setMessage("Attendance updated successfully!");
//       setAttendance(response.data.attendance);
//     } catch (error) {
//       setMessage("Error updating attendance.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="p-4">

//       <form className="mb-4" onSubmit={handleAttendanceSubmit}>
//         <div className="mb-4">
//           <label className="block text-black">Date</label>
//           <input
//             type="date"
//             className="mt-1 block w-full border border-gray-700 p-2 rounded text-grey-900"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-black">Status</label>
//           <select
//             className="mt-1 block w-full border border-gray-700 p-2 rounded"
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             required
//           >
//             <option value="">Select Status</option>
//             <option value="Present">Present</option>
//             <option value="Absent">Absent</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="bg-violet-500 text-black px-4 py-2 rounded"
//         >
//           Submit
//         </button>
//       </form>

//       {message && <p className="text-green-500">{message}</p>}

//       <h3 className="text-xl font-semibold mt-4">Attendance Records</h3>
//       <table className="min-w-full bg-grey-200">
//         <thead>
//           <tr>
//             <th className="py-2">Date</th>
//             <th className="py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {attendance.map((record, index) => (
//             <tr key={index}>
//               <td className="border px-4 py-2">
//                 {new Date(record.date).toLocaleDateString()}
//               </td>
//               <td className="border px-4 py-2">{record.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TeacherAttendance;

import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherAttendance = ({ teacherId }) => {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [attendance, setAttendance] = useState([]);
  const [teacher_Id, setTeacherId] = useState(teacherId);

  useEffect(() => {
    // Fetch the existing attendance data for the teacher on component mount
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teacher/${teacher_Id}`
        );
        setAttendance(response.data.attendance);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      }
    };

    fetchAttendance();
  }, []);

  const handleAttendanceSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/teacher-attendance/${teacherId}`,
        {
          status,
          date,
        }
      );
      setMessage("Attendance updated successfully!");
      setAttendance(response.data.attendance);
    } catch (error) {
      setMessage("Error updating attendance.");
      console.error(error);
    }
  };

  return (
    <div className="p-2 bg-gray-800   text-gray-200">
      <form className="mb-4" onSubmit={handleAttendanceSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300">Date</label>
          <input
            type="date"
            className="mt-1 block w-full border border-gray-600 bg-gray-800 p-2 rounded text-gray-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-300">Status</label>
          <select
            className="mt-1 block w-full border border-gray-600 bg-gray-800 p-2 rounded text-gray-300"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition duration-300"
        >
          Submit
        </button>
      </form>

      {message && <p className="text-green-500">{message}</p>}

      <h3 className="text-xl font-semibold mt-4">Attendance Records</h3>
      <table className="min-w-full bg-gray-800 text-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-600">Date</th>
            <th className="py-2 px-4 border-b border-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td className="border-t border-gray-600 px-4 py-2">
                {new Date(record.date).toLocaleDateString()}
              </td>
              <td className="border-t border-gray-600 px-4 py-2">
                {record.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAttendance;
