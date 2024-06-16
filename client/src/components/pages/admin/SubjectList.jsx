// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaPlus, FaTrashAlt, FaEye, FaPencilAlt } from "react-icons/fa";
// import AddSubject from "./Layout/AddSubject";

// const SubjectList = ({ id }) => {
//   const [subjects, setSubjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isDeleteAllClicked, setIsDeleteAllClicked] = useState(false);
//   const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);

//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/all-subjects/${id}`
//         );
//         if (Array.isArray(response.data)) {
//           setSubjects(response.data);
//         } else {
//           setSubjects([]);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching subjects:", error);
//         setLoading(false);
//       }
//     };
//     fetchSubjects();
//   }, [id, isDeleteAllClicked]);

//   const handleDeleteAll = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/Subjects/${id}`);
//       setIsDeleteAllClicked(!isDeleteAllClicked);
//     } catch (error) {
//       console.error("Error deleting all subjects:", error);
//     }
//   };

//   const handleAddSubjectModal = () => {
//     setShowAddSubjectModal(!showAddSubjectModal);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Header
//           onAddSubject={handleAddSubjectModal}
//           onDeleteAll={handleDeleteAll}
//         />
//         {loading ? (
//           <p className="text-gray-500">Loading...</p>
//         ) : subjects.length === 0 ? (
//           <p className="text-gray-500">No subjects found.</p>
//         ) : (
//           <SubjectTable subjects={subjects} />
//         )}
//         {showAddSubjectModal && (
//           <Modal title="Add Subject" onClose={handleAddSubjectModal}>
//             <AddSubject />
//           </Modal>
//         )}
//       </div>
//     </div>
//   );
// };

// const Header = ({ onAddSubject, onDeleteAll }) => (
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-3xl font-bold text-teal-300">Subjects List</h2>
//     <div className="flex items-center space-x-4">
//       <button
//         className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
//         onClick={onAddSubject}
//       >
//         Add Subject <FaPlus className="inline ml-1" />
//       </button>
//       <button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
//         onClick={onDeleteAll}
//       >
//         Delete All <FaTrashAlt className="inline ml-1" />
//       </button>
//     </div>
//   </div>
// );

// const SubjectTable = ({ subjects }) => (
//   <div className="overflow-x-auto border-4 rounded-lg border-gray-700 shadow-lg">
//     <table className="min-w-full bg-gray-800 rounded-lg">
//       <thead className="bg-gray-900 text-teal-300 sticky top-0">
//         <tr>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Subject Name
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Subject Code
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Session
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Class
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Action
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {subjects.map((subject, index) => (
//           <tr
//             key={index}
//             className={`${
//               index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
//             } transition duration-300 hover:bg-gray-600`}
//           >
//             <td className="px-6 py-4 whitespace-nowrap">
//               {subject.subName || "N/A"}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               {subject.subCode || "N/A"}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               {subject.sessions || "N/A"}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap">
//               {subject.sclassName ? subject.sclassName.sclassName : "N/A"}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
//               <div className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
//                 <FaEye className="text-lg" />
//               </div>
//               <div className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
//                 <FaTrashAlt className="text-lg" />
//               </div>
//               <div className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full cursor-pointer transition-colors duration-300">
//                 <FaPencilAlt className="text-lg" />
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const Modal = ({ title, onClose, children }) => (
//   <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
//     <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-2xl">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold text-teal-300">{title}</h2>
//         <button
//           className="text-gray-400 hover:text-gray-200 transition duration-300"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//       </div>
//       {children}
//     </div>
//   </div>
// );

// export default SubjectList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import SubjectTable from "./SubjectTable";
import Modal from "./Modal";
import AddSubject from "../Layout/AddSubject";

const SubjectList = ({ id }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDeleteAllClicked, setIsDeleteAllClicked] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/all-subjects/${id}`
        );
        setSubjects(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setLoading(false);
      }
    };
    fetchSubjects();
  }, [id, isDeleteAllClicked]);

  const handleDeleteAll = async () => {
    try {
      await axios.delete(`http://localhost:3000/Subjects/${id}`);
      setIsDeleteAllClicked(!isDeleteAllClicked);
    } catch (error) {
      console.error("Error deleting all subjects:", error);
    }
  };

  const handleAddSubjectModal = () => {
    setShowAddSubjectModal(!showAddSubjectModal);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          onAddSubject={handleAddSubjectModal}
          onDeleteAll={handleDeleteAll}
        />
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : subjects.length === 0 ? (
          <p className="text-gray-500">No subjects found.</p>
        ) : (
          <SubjectTable subjects={subjects} />
        )}
        {showAddSubjectModal && (
          <Modal title="Add Subject" onClose={handleAddSubjectModal}>
            <AddSubject />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SubjectList;
