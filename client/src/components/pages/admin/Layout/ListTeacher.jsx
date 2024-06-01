// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddTeacherForm from "../AddTeacherForm";
// import TeacherAttendance from "./TeacherAttendance";
// import { Link } from "react-router-dom";

// const ListTeacher = () => {
//   const schoolId = localStorage.getItem("_id");
//   const [teachers, setTeachers] = useState([]);
//   const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
//   const [selectedTeacher, setSelectedTeacher] = useState(null);
//   const [showUpdateSubjectModal, setShowUpdateSubjectModal] = useState(false);
//   const [showAttendanceModal, setShowAttendanceModal] = useState(false);
//   const [classes, setClasses] = useState([]);

//   useEffect(() => {
//     const fetchTeachers = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/teachers/${schoolId}`
//         );
//         setTeachers(response.data);
//         // console.log(response.data, 31321);
//       } catch (error) {
//         console.error("Error fetching teachers:", error);
//       }
//     };

//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/get-class/${schoolId}`);
//         setClasses(response.data);
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchTeachers();
//     fetchClasses();
//   }, [teachers, schoolId]);

//   const handleView = async (teacherId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/teacher/${teacherId}`
//       );
//       setSelectedTeacher(response.data);
//     } catch (error) {
//       console.error("Error fetching teacher details:", error);
//     }
//   };

//   const handleDelete = async (teacherId) => {
//     try {
//       await axios.delete(`http://localhost:3000/teacher/${teacherId}`);
//       setTeachers(teachers.filter((teacher) => teacher._id !== teacherId));
//     } catch (error) {
//       console.error("Error deleting teacher:", error);
//     }
//   };

//   const handleDeleteAllTeachers = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/teachers/${schoolId}`);
//       setTeachers([]);
//       console.log("All teachers deleted successfully");
//     } catch (error) {
//       console.error("Error deleting all teachers:", error);
//     }
//   };

//   const handleDeleteTeachersByClass = async (classId) => {
//     try {
//       await axios.delete(`http://localhost:3000/teachers-class/${classId}`);
//       const updatedTeachers = teachers.filter(
//         (teacher) => teacher.teachSclass._id !== classId
//       );
//       setTeachers(updatedTeachers);
//       console.log("Teachers deleted by class successfully");
//     } catch (error) {
//       console.error("Error deleting teachers by class:", error);
//     }
//   };

//   // const handleAddTeacherModal = () => {
//   //   setShowAddTeacherModal(!showAddTeacherModal);
//   // };

//   const handleUpdateSubjectModal = () => {
//     setShowUpdateSubjectModal(!showUpdateSubjectModal);
//   };

//   const handleAttendanceModal = () => {
//     setShowAttendanceModal(!showAttendanceModal);
//   };

//   const handleEdit = (teacherId) => {
//     // Handle edit logic
//     console.log(`Edit teacher with ID: ${teacherId}`);
//   };

//   const handleAddTeacherModal = () => {
//     setShowAddTeacherModal(!showAddTeacherModal);
//   };

//   return (
//     <div className="container min-h-screen  mx-auto p-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold">Teacher List</h2>
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleAddTeacherModal}
//         >
//           Add Teacher
//         </button>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//           onClick={handleUpdateSubjectModal}
//         >
//           Update Subject
//         </button>

//         <button
//           className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//           onClick={handleDeleteAllTeachers}
//         >
//           Delete All Teachers
//         </button>
//       </div>
//       {teachers.length === 0 ? (
//         <p className="text-gray-500">No teachers found.</p>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="w-full table-auto">
//             <thead>
//               <tr className="bg-gray-800 text-white">
//                 <th className="px-4 py-2">Name</th>
//                 <th className="px-4 py-2">Email</th>
//                 <th className="px-4 py-2">Subject</th>
//                 <th className="px-4 py-2">Class</th>
//                 <th className="px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {teachers.map((teacher, index) => (
//                 <tr
//                   key={index}
//                   className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
//                 >
//                   <td className="border px-4 py-2">{teacher.name}</td>
//                   <td className="border px-4 py-2">{teacher.email}</td>
//                   <td className="border px-4 py-2">
//                     {teacher.teachSubject.subName}
//                   </td>
//                   <td className="border px-4 py-2">
//                     {teacher.teachSclass &&
//                     teacher.teachSclass.sclassName !== null
//                       ? teacher.teachSclass.sclassName
//                       : "Not Assigned"}
//                   </td>
//                   <td className="border px-4 py-2 ">
//                     <Link
//                       to={`${teacher._id}`}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//                       // onClick={() => handleView(teacher._id)}
//                     >
//                       View
//                     </Link>
//                     <button
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
//                       onClick={() => handleDelete(teacher._id)}
//                     >
//                       Delete
//                     </button>
//                     <button
//                       className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => handleEdit(teacher._id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mr-2"
//                       onClick={handleAttendanceModal}
//                     >
//                       Attendance
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {selectedTeacher && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h2 className="text-xl font-bold mb-4">Teacher Details</h2>
//             <p>Name: {selectedTeacher.name}</p>
//             <p>Email: {selectedTeacher.email}</p>
//             <p>Subject: {selectedTeacher.teachSubject.subName}</p>
//             <p>Class: {selectedTeacher.teachSclass.sclassName}</p>
//             {/* Add more details as needed */}
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               onClick={() => setSelectedTeacher(null)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Add Teacher Modal */}
//       {showAddTeacherModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-blue-500 rounded-lg shadow-lg p-8">
//             <h2 className="text-xl font-bold mb-4">Add Teacher</h2>
//             <AddTeacherForm />
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleAddTeacherModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* {showAttendanceModal && <AttendanceModal />} */}
//       {showAttendanceModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-gray-900 rounded-lg shadow-lg p-8">
//             {/* <h2 className="text-xl font-bold mb-4">Add Teacher</h2> */}
//             <TeacherAttendance />
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleAttendanceModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListTeacher;

import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTeacherForm from "../AddTeacherForm";
import TeacherAttendance from "./TeacherAttendance";
import { Link } from "react-router-dom";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineEdit,
} from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";

const ListTeacher = () => {
  const schoolId = localStorage.getItem("_id");
  const [teachers, setTeachers] = useState([]);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teachers/${schoolId}`
        );
        console.log(response.data, 7777777);
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-class/${schoolId}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchTeachers();
    fetchClasses();
  }, []);

  const handleDelete = async (teacherId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this teacher?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/teacher/${teacherId}`);
              setTeachers(
                teachers.filter((teacher) => teacher._id !== teacherId)
              );
            } catch (error) {
              console.error("Error deleting teacher:", error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleDeleteAllTeachers = async () => {
    confirmAlert({
      title: "Confirm to delete all",
      message: "Are you sure you want to delete all teachers?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/teachers/${schoolId}`);
              setTeachers([]);
            } catch (error) {
              console.error("Error deleting all teachers:", error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleDeleteTeachersByClass = async (classId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure you want to delete all teachers from class ${classId}?`,
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(
                `http://localhost:3000/teachers-class/${classId}`
              );
              const updatedTeachers = teachers.filter(
                (teacher) => teacher.teachSclass._id !== classId
              );
              setTeachers(updatedTeachers);
            } catch (error) {
              console.error("Error deleting teachers by class:", error);
            }
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleAddTeacherModal = () => {
    setShowAddTeacherModal(!showAddTeacherModal);
  };
  const handleAttendanceModal = (teacher) => {
    setSelectedTeacher(teacher);
    setShowAttendanceModal(!showAttendanceModal);
  };

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-teal-300">Teacher List</h2>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
          onClick={handleAddTeacherModal}
        >
          <AiOutlinePlus size={24} />
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
          onClick={handleDeleteAllTeachers}
        >
          Delete All Teachers
        </button>
      </div>
      {teachers.length === 0 ? (
        <p className="text-gray-500">No teachers found.</p>
      ) : (
        <div className="overflow-x-auto border-4 rounded-lg border-blue-500">
          <table className="min-w-full bg-gray-800 shadow-lg">
            <thead className="bg-gray-900 text-teal-300 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={teacher._id}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.teachSubject.subName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {teacher.teachSclass && teacher.teachSclass.sclassName
                      ? teacher.teachSclass.sclassName
                      : "Not Assigned"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                    <Link
                      to={`${teacher._id}`}
                      className="text-blue-500 hover:text-blue-700 transition duration-300"
                    >
                      <AiFillEye size={24} />
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300"
                      onClick={() => handleDelete(teacher._id)}
                    >
                      <AiFillDelete size={24} />
                    </button>
                    <button
                      className="text-green-500 hover:bg-green-700 transition duration-300"
                      onClick={() =>
                        console.log(`Edit teacher with ID: ${teacher._id}`)
                      }
                    >
                      <AiOutlineEdit size={24} />
                    </button>
                    <button
                      className="bg-purple-500 hover:bg-purple-700 transition duration-300"
                      onClick={() => handleAttendanceModal(teacher)}
                    >
                      <SlCalender size={24} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedTeacher && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-bold mb-4">Teacher Details</h2>
            <p>Name: {selectedTeacher.name}</p>
            <p>Email: {selectedTeacher.email}</p>
            <p>Subject: {selectedTeacher.teachSubject.subName}</p>
            <p>Class: {selectedTeacher.teachSclass.sclassName}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => setSelectedTeacher(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showAddTeacherModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-teal-300">Add Teacher</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={handleAddTeacherModal}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <AddTeacherForm />
          </div>
        </div>
      )}

      {showAttendanceModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-gray-900 rounded-lg shadow-lg p-8">
            {/* <h2 className="text-xl font-bold mb-4">Add Teacher</h2> */}
            <TeacherAttendance teacherId={selectedTeacher._id} />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAttendanceModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTeacher;
