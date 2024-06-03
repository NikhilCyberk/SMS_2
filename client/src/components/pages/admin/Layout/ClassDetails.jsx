// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import TopBar from "./TopBar";
// import {
//   AiOutlineFileText,
//   AiOutlineUser,
//   AiOutlineTeam,
// } from "react-icons/ai";

// const ClassDetails = () => {
//   const schoolId = localStorage.getItem("_id");
//   const { id, type } = useParams();
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let endpoint = "";
//         if (type === "subjects") endpoint = `/class-subjects/${id}`;
//         if (type === "students") endpoint = `/get-students/${schoolId}`;
//         if (type === "teachers") endpoint = `/teachers/${schoolId}`;
//         const response = await axios.get(`http://localhost:3000${endpoint}`);
//         console.log(response.data, 13213213);
//         if (response.status === 200) {
//           setData(response.data);
//           setError("");
//         } else if (response.status === 201) {
//           // Handle "No data found" message from the server
//           setData([]);
//           setError(response.data.message);
//         } else {
//           setData([]);
//           setError("An error occurred while fetching data.");
//         }
//       } catch (error) {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           setData([]);
//           setError(
//             error.response.status === 500
//               ? error.response.data.message || "Internal Server Error"
//               : "An error occurred while fetching data."
//           );
//         } else {
//           // Something happened in setting up the request that triggered an error
//           setData([]);
//           setError("An error occurred while fetching data.");
//         }
//       }
//     };
//     fetchData();
//   }, [id, type]);

//   const renderIcon = () => {
//     if (type === "subjects") return <AiOutlineFileText size={24} />;
//     if (type === "students") return <AiOutlineUser size={24} />;
//     if (type === "teachers") return <AiOutlineTeam size={24} />;
//   };

//   return (
//     <div className="p-8 bg-gray-900 min-h-screen text-white">
//       <TopBar />
//       <div className="flex items-center mb-4">
//         {renderIcon()}
//         <h2 className="text-4xl font-bold text-teal-300 ml-2">
//           {type.charAt(0).toUpperCase() + type.slice(1)}
//         </h2>
//       </div>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : data && data.length > 0 ? (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-gray-800 shadow-lg rounded-lg">
//             <thead>
//               <tr className="bg-gray-700 text-teal-300">
//                 {Object.keys(data[0]).map((key, index) => (
//                   <th
//                     key={index}
//                     className="py-3 px-6 text-left uppercase tracking-wider"
//                   >
//                     {key}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"}
//                 >
//                   {Object.entries(item).map(([key, value], idx) => (
//                     <td key={idx} className="py-3 px-6">
//                       {typeof value === "object"
//                         ? JSON.stringify(value)
//                         : value}
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="flex justify-center items-center h-64">
//           <p className="text-gray-300 text-center">
//             No {type} found. Would you like to{" "}
//             <Link
//               to={`/admin/add-${type.substring(0, type.length - 1)}`}
//               className="text-teal-500 hover:text-teal-700 underline"
//             >
//               add {type.substring(0, type.length - 1)}
//             </Link>{" "}
//             now?
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ClassDetails;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import Subjects from "./Subjects";
import Students from "./Students";
import Teachers from "./Teachers";

const ClassDetails = () => {
  const { id, type } = useParams();
  const schoolId = localStorage.getItem("_id"); // Assuming schoolId is stored in localStorage

  console.log(id, "id", schoolId, "schoolId", type, "type");

  const [subject, setSubject] = useState({});
  const [student, setStudent] = useState({});
  const [teacher, setTeacher] = useState({});

  // const [data, setData] = useState({
  //   subjects: [],
  //   students: [],
  //   teachers: [],
  // });
  // const [type, setType] = useState(""); // Added a state for the type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjects, students, teachers] = await Promise.all([
          axios.get(`http://localhost:3000/class-subjects/${id}`),
          axios.get(`http://localhost:3000/get-students/${schoolId}`),
          axios.get(`http://localhost:3000/teachers/${schoolId}`),
        ]);
        // console.log(
        //   teachers.data.map((t) => t.teachSclass).filter((a) => a._id === id),
        //   "teachers.data.map((teacher) => teacher.teachSclass)"
        // );
        const filteredStudents = students.data.filter(
          (student) => student.sclassName._id === id
        );
        setStudent(filteredStudents);
        // console.log(filteredStudents, "filteredStudents");
        const filteredSubjects = subjects.data.filter(
          (subject) => subject.sclassName === id
        );
        setSubject(filteredSubjects);
        // console.log(filteredSubjects, "filteredSubjects");
        const filteredTeachers = teachers.data
          .map((teacher) => teacher.teachSclass)
          .filter((teacher) => teacher._id === id);

        setTeacher(filteredTeachers);
        console.log(filteredTeachers, "filteredTeachers");
        // setData({
        //   subjects: filteredSubjects,
        //   students: filteredStudents,
        //   teachers: filteredTeachers,
        // });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, schoolId]);

  // console.log(subject, "subject");
  // console.log(student, "student");
  console.log(teacher, "teacher");
  // console.log(data, 3232);
  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const renderContent = () => {
    if (type === "subjects") {
      return subject.length > 0 ? (
        <Subjects subjects={subject} />
      ) : (
        <p>No subject available</p>
      );
    } else if (type === "students") {
      return student.length > 0 ? (
        <Students students={student} />
      ) : (
        <p>No student available</p>
      );
    } else if (type === "teachers") {
      return teacher.length > 0 ? (
        <Teachers teachers={teacher} />
      ) : (
        <p>No Teacher available</p>
      );
    } else {
      return null;
    }
  };
  // const renderContent = () => {
  //   if (type === "subjects") {
  //     return data.subjects.length > 0 ? (
  //       <Subjects subjects={data.subjects} />
  //     ) : (
  //       <p>No data available</p>
  //     );
  //   } else if (type === "students") {
  //     return data.students.length > 0 ? (
  //       <Students students={data.students} />
  //     ) : (
  //       <p>No data available</p>
  //     );
  //   } else if (type === "teachers") {
  //     return data.teachers.length > 0 ? (
  //       <Teachers teachers={data.teachers} />
  //     ) : (
  //       <p>No data available</p>
  //     );
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <div>
      <TopBar onTypeChange={handleTypeChange} />
      {renderContent()}
    </div>
  );
};

export default ClassDetails;
