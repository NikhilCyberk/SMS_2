// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditStudentForm = ({ studentId, onClose, onSave }) => {
//   const [student, setStudent] = useState({
//     name: "",
//     rollNum: "",
//     sclassName: "",
//   });

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/student/${studentId}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error("Error fetching student data:", error);
//       }
//     };
//     fetchStudentData();
//   }, [studentId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setStudent((prevStudent) => ({
//       ...prevStudent,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:3000/student/${studentId}`, student);
//       onSave(student);
//     } catch (error) {
//       console.error("Error updating student:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={student.name}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Roll Number:</label>
//         <input
//           type="text"
//           name="rollNum"
//           value={student.rollNum}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label>Class:</label>
//         <input
//           type="text"
//           name="sclassName"
//           value={student.sclassName}
//           onChange={handleChange}
//         />
//       </div>
//       <button type="submit">Save</button>
//       <button type="button" onClick={onClose}>
//         Cancel
//       </button>
//     </form>
//   );
// };

// export default EditStudentForm;

import React, { useState, useEffect } from "react";
import axios from "axios";
const schoolId = localStorage.getItem("_id");

const EditStudentForm = ({ studentId, onClose, onSave }) => {
  const [student, setStudent] = useState({
    name: "",
    rollNum: "",
    sclassName: "",
    password: "",
    school: schoolId,
    role: "Student",
  });

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/student/${studentId}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudentData();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/student/${studentId}`, student);
      onSave(student);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-white">Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Roll Number:</label>
        <input
          type="text"
          name="rollNum"
          value={student.rollNum}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Class:</label>
        <input
          type="text"
          name="sclassName"
          value={student.sclassName}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        />
      </div>
      <div className="mb-4">
        <label className="block text-white">Password:</label>
        <input
          type="password"
          name="password"
          value={student.password}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        />
      </div>
      {/* <div className="mb-4">
        <label className="block text-white">School:</label>
        <input
          type="text"
          name="school"
          value={student.school}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        />
      </div> */}
      {/* <div className="mb-4">
        <label className="block text-white">Role:</label>
        <select
          name="role"
          value={student.role}
          onChange={handleChange}
          className="px-4 py-2 rounded-lg w-full text-gray-900"
        >
          <option value="Student">Student</option>
          
        </select>
      </div> */}
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditStudentForm;
