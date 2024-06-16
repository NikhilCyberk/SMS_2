// import axios from "axios";
// import React, { useEffect, useState, useCallback } from "react";
// import { Link, useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { confirmAlert } from "react-confirm-alert";
// import {
//   AiFillEye,
//   AiFillDelete,
//   AiOutlinePlus,
//   AiOutlineClose,
//   AiOutlineSortAscending,
//   AiOutlineSortDescending,
// } from "react-icons/ai";
// import { PiStudent } from "react-icons/pi";
// import { MdOutlineSubject } from "react-icons/md";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import AddClass from "./AddClass";
// import AddStudentForm from "./AddStudentForm";
// import AddSubject from "./AddSubject";

// const ListClass = () => {
//   const [classes, setClasses] = useState([]);
//   const [filteredClasses, setFilteredClasses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAscending, setIsAscending] = useState(true);
//   const [showAddClassModal, setShowAddClassModal] = useState(false);
//   const [showAddClassSubjectModal, setShowAddClassSubjectModal] =
//     useState(false);
//   const [showAddClassStudentModal, setShowAddClassStudentModal] =
//     useState(false);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
//   const [currentPage, setCurrentPage] = useState(1);

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const handleDeleteClass = useCallback(async (classId) => {
//     confirmAlert({
//       title: "Confirm to delete",
//       message: "Are you sure you want to delete this class?",
//       buttons: [
//         {
//           label: "Yes",
//           onClick: async () => {
//             try {
//               await axios.delete(`http://localhost:3000/sclass/${classId}`);
//               setClasses((prevClasses) =>
//                 prevClasses.filter((c) => c._id !== classId)
//               );
//               setFilteredClasses((prevFilteredClasses) =>
//                 prevFilteredClasses.filter((c) => c._id !== classId)
//               );
//             } catch (error) {
//               if (error.response?.status === 500) {
//                 alert(error.response.data.message);
//               }
//               console.error("Error deleting class:", error);
//             }
//           },
//         },
//         { label: "No", onClick: () => {} },
//       ],
//     });
//   }, []);

//   const handleDeleteAllClasses = useCallback(async () => {
//     confirmAlert({
//       customUI: ({ onClose }) => {
//         return (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
//             <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
//               <h2 className="text-xl font-bold text-teal-300 mb-4">
//                 Confirm to delete all
//               </h2>
//               <p className="text-gray-300 mb-4">
//                 Are you sure you want to delete all classes with all student, teacher and subject ?
//               </p>
//               <div className="flex justify-end">
//                 <button
//                   className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
//                   onClick={async () => {
//                     try {
//                       await axios.delete(
//                         `http://localhost:3000/sclasses/${id}`
//                       );
//                       setClasses([]);
//                       setFilteredClasses([]);
//                       onClose();
//                     } catch (error) {
//                       if (error.response?.status === 500) {
//                         alert(error.response.data);
//                       }
//                       console.error("Error deleting all classes:", error);
//                     }
//                   }}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   className="bg-gray-700 text-white px-4 py-2 rounded-md"
//                   onClick={onClose}
//                 >
//                   No
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       },
//     });
//   }, [id]);

//   const handleSearch = useCallback(
//     (e) => {
//       setSearchTerm(e.target.value);
//       setFilteredClasses(
//         e.target.value
//           ? classes.filter((classItem) =>
//               classItem.sclassName
//                 .toLowerCase()
//                 .includes(e.target.value.toLowerCase())
//             )
//           : classes
//       );
//     },
//     [classes]
//   );

//   const handleSort = useCallback(() => {
//     setFilteredClasses((prevFilteredClasses) => {
//       const sortedClasses = [...prevFilteredClasses].sort((a, b) => {
//         return isAscending
//           ? a.sclassName.localeCompare(b.sclassName)
//           : b.sclassName.localeCompare(a.sclassName);
//       });
//       return sortedClasses;
//     });
//     setIsAscending((prevIsAscending) => !prevIsAscending);
//   }, [isAscending]);

//   const handleItemsPerPageChange = (e) => {
//     setItemsPerPage(Number(e.target.value));
//     setCurrentPage(1); // Reset to the first page whenever items per page changes
//   };

//   const renderModals = () => {
//     if (showAddClassModal) {
//       return (
//         <Modal title="Add Class" onClose={() => setShowAddClassModal(false)}>
//           <AddClass />
//         </Modal>
//       );
//     }
//     if (showAddClassSubjectModal) {
//       return (
//         <Modal
//           title="Add Subject"
//           onClose={() => setShowAddClassSubjectModal(false)}
//         >
//           <AddSubject />
//         </Modal>
//       );
//     }
//     if (showAddClassStudentModal) {
//       return (
//         <Modal
//           title="Add Student"
//           onClose={() => setShowAddClassStudentModal(false)}
//         >
//           <AddStudentForm />
//         </Modal>
//       );
//     }
//     return null;
//   };

//   // Calculate pagination
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentClasses = Array.isArray(filteredClasses)
//     ? filteredClasses.slice(indexOfFirstItem, indexOfLastItem)
//     : [];

//   const totalPages = Math.ceil(
//     Array.isArray(filteredClasses) ? filteredClasses.length / itemsPerPage : 1
//   );

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/get-class/${id}`
//         );
//         setClasses(response.data);
//         setFilteredClasses(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, [id, handleDeleteAllClasses, showAddClassModal]);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <Header
//           searchTerm={searchTerm}
//           onSearch={handleSearch}
//           onAddClass={() => setShowAddClassModal(true)}
//           onDeleteAllClasses={handleDeleteAllClasses}
//           itemsPerPage={itemsPerPage}
//           onItemsPerPageChange={handleItemsPerPageChange}
//         />
//         {currentClasses.length === 0 ? (
//           <p className="text-gray-300">No class found.</p>
//         ) : (
//           <ClassTable
//             classes={currentClasses}
//             isAscending={isAscending}
//             onSort={handleSort}
//             onDelete={handleDeleteClass}
//             onAddStudent={() => setShowAddClassStudentModal(true)}
//             onAddSubject={() => setShowAddClassSubjectModal(true)}
//           />
//         )}
//         {renderModals()}
//         <Pagination
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       </div>
//     </div>
//   );
// };

// const Header = ({
//   searchTerm,
//   onSearch,
//   onAddClass,
//   onDeleteAllClasses,
//   itemsPerPage,
//   onItemsPerPageChange,
// }) => (
//   <div className="flex justify-between items-center mb-6">
//     <h2 className="text-3xl font-bold text-teal-300">Classes List</h2>
//     <div className="flex items-center space-x-4">
//       <div className="relative">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={onSearch}
//           placeholder="Search for a class"
//           className="px-4 py-2 rounded-lg w-full max-w-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
//         />
//       </div>
//       <div>
//         <label htmlFor="itemsPerPage" className="mr-2">
//           Show:
//         </label>
//         <select
//           id="itemsPerPage"
//           value={itemsPerPage}
//           onChange={onItemsPerPageChange}
//           className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
//         >
//           {[5, 10, 20, 50, 100].map((num) => (
//             <option key={num} value={num}>
//               {num}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button
//         className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
//         onClick={onAddClass}
//       >
//         Add Class <AiOutlinePlus className="inline ml-1" />
//       </button>
//       <button
//         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
//         onClick={onDeleteAllClasses}
//       >
//         Delete All <AiFillDelete className="inline ml-1" />
//       </button>
//     </div>
//   </div>
// );

// const ClassTable = ({
//   classes,
//   isAscending,
//   onSort,
//   onDelete,
//   onAddStudent,
//   onAddSubject,
// }) => (
//   <div className="overflow-x-auto border-4 rounded-lg border-gray-700 shadow-lg">
//     <table className="min-w-full bg-gray-800 rounded-lg">
//       <thead className="bg-gray-900 text-teal-300 sticky top-0">
//         <tr>
//           <th
//             className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider cursor-pointer relative"
//             onClick={onSort}
//           >
//             Class Name
//             {isAscending ? (
//               <AiOutlineSortAscending className="inline ml-1" />
//             ) : (
//               <AiOutlineSortDescending className="inline ml-1" />
//             )}
//           </th>
//           <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
//             Actions
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {classes.map((classItem, index) => (
//           <tr
//             key={classItem._id}
//             className={`${
//               index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
//             } transition duration-300 hover:bg-gray-600`}
//           >
//             <td className="px-6 py-4 whitespace-nowrap">
//               {classItem.sclassName}
//             </td>
//             <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
//               <Link
//                 to={`/admin/class/${classItem._id}/subjects`}
//                 className="text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
//               >
//                 <AiFillEye size={20} />
//                 <span className="ml-1">View Class</span>
//               </Link>
//               <button
//                 className="text-red-500 hover:text-red-700 transition duration-300 flex items-center"
//                 onClick={() => onDelete(classItem._id)}
//               >
//                 <AiFillDelete size={20} />
//                 <span className="ml-1">Delete Class</span>
//               </button>
//               <button
//                 className="text-violet-500 hover:text-violet-700 transition duration-300 flex items-center"
//                 onClick={onAddStudent}
//               >
//                 <PiStudent size={20} />
//                 <span className="ml-1">Add Student</span>
//               </button>
//               <button
//                 className="text-green-500 hover:text-green-700 transition duration-300 flex items-center"
//                 onClick={onAddSubject}
//               >
//                 <MdOutlineSubject size={20} />
//                 <span className="ml-1">Add Subject</span>
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// );

// const Pagination = ({ totalPages, currentPage, onPageChange }) => (
//   <div className="flex justify-center mt-6">
//     <button
//       className={`px-4 py-2 rounded-lg ${
//         currentPage === 1
//           ? "bg-gray-600 cursor-not-allowed"
//           : "bg-teal-500 text-white hover:bg-teal-600"
//       }`}
//       onClick={() => onPageChange(currentPage - 1)}
//       disabled={currentPage === 1}
//     >
//       Previous
//     </button>
//     {[...Array(totalPages).keys()].map((num) => (
//       <button
//         key={num + 1}
//         className={`px-4 py-2 mx-1 rounded-full ${
//           currentPage === num + 1
//             ? "bg-teal-600 text-white"
//             : "bg-gray-600 text-gray-300 hover:bg-gray-500"
//         }`}
//         onClick={() => onPageChange(num + 1)}
//       >
//         {num + 1}
//       </button>
//     ))}
//     <button
//       className={`px-4 py-2 rounded-lg ${
//         currentPage === totalPages
//           ? "bg-gray-600 cursor-not-allowed"
//           : "bg-teal-500 text-white hover:bg-teal-600"
//       }`}
//       onClick={() => onPageChange(currentPage + 1)}
//       disabled={currentPage === totalPages}
//     >
//       Next
//     </button>
//   </div>
// );

// const Modal = ({ title, children, onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
//     <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold text-teal-300">{title}</h2>
//         <button
//           className="text-gray-400 hover:text-gray-200 focus:outline-none"
//           onClick={onClose}
//         >
//           <AiOutlineClose />
//         </button>
//       </div>
//       {children}
//     </div>
//   </div>
// );

// export default ListClass;

import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Header from "../../admin/header/Header";
import ClassTable from "../../admin/table/Table";
import Pagination from "../../admin/table/Pagination";
import Modal from "../../admin/table/Modal";
import AddClass from "./AddClass";
import AddStudentForm from "./AddStudentForm";
import AddSubject from "./AddSubject";

const ListClass = () => {
  const [classes, setClasses] = useState([]);
  const [filteredClasses, setFilteredClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [showAddClassSubjectModal, setShowAddClassSubjectModal] =
    useState(false);
  const [showAddClassStudentModal, setShowAddClassStudentModal] =
    useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { id } = useParams();

  const handleDeleteClass = useCallback(async (classId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this class?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/sclass/${classId}`);
              setClasses((prevClasses) =>
                prevClasses.filter((c) => c._id !== classId)
              );
              setFilteredClasses((prevFilteredClasses) =>
                prevFilteredClasses.filter((c) => c._id !== classId)
              );
            } catch (error) {
              if (error.response?.status === 500) {
                alert(error.response.data.message);
              }
              console.error("Error deleting class:", error);
            }
          },
        },
        { label: "No", onClick: () => {} },
      ],
    });
  }, []);

  const handleDeleteAllClasses = useCallback(async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-xl font-bold text-teal-300 mb-4">
                Confirm to delete all
              </h2>
              <p className="text-gray-300 mb-4">
                Are you sure you want to delete all classes with all student,
                teacher and subject?
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  onClick={async () => {
                    try {
                      await axios.delete(
                        `http://localhost:3000/sclasses/${id}`
                      );
                      setClasses([]);
                      setFilteredClasses([]);
                      onClose();
                    } catch (error) {
                      if (error.response?.status === 500) {
                        alert(error.response.data);
                      }
                      console.error("Error deleting all classes:", error);
                    }
                  }}
                >
                  Yes
                </button>
                <button
                  className="bg-gray-700 text-white px-4 py-2 rounded-md"
                  onClick={onClose}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        );
      },
    });
  }, [id]);

  const handleSearch = useCallback(
    (e) => {
      setSearchTerm(e.target.value);
      setFilteredClasses(
        e.target.value
          ? classes.filter((classItem) =>
              classItem.sclassName
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            )
          : classes
      );
    },
    [classes]
  );

  const handleSort = useCallback(() => {
    setFilteredClasses((prevFilteredClasses) => {
      const sortedClasses = [...prevFilteredClasses].sort((a, b) => {
        return isAscending
          ? a.sclassName.localeCompare(b.sclassName)
          : b.sclassName.localeCompare(a.sclassName);
      });
      return sortedClasses;
    });
    setIsAscending((prevIsAscending) => !prevIsAscending);
  }, [isAscending]);

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page whenever items per page changes
  };

  const renderModals = () => {
    if (showAddClassModal) {
      return (
        <Modal title="Add Class" onClose={() => setShowAddClassModal(false)}>
          <AddClass />
        </Modal>
      );
    }
    if (showAddClassSubjectModal) {
      return (
        <Modal
          title="Add Subject"
          onClose={() => setShowAddClassSubjectModal(false)}
        >
          <AddSubject />
        </Modal>
      );
    }
    if (showAddClassStudentModal) {
      return (
        <Modal
          title="Add Student"
          onClose={() => setShowAddClassStudentModal(false)}
        >
          <AddStudentForm />
        </Modal>
      );
    }
    return null;
  };

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClasses = Array.isArray(filteredClasses)
    ? filteredClasses.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const totalPages = Math.ceil(
    Array.isArray(filteredClasses) ? filteredClasses.length / itemsPerPage : 1
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-class/${id}`
        );
        setClasses(response.data);
        setFilteredClasses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id, handleDeleteAllClasses, showAddClassModal]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onAdd={() => setShowAddClassModal(true)}
          onDeleteAll={handleDeleteAllClasses}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          title="Classes List"
          isDeleteAllVisible={true}
        />
        {currentClasses.length === 0 ? (
          <p className="text-gray-300">No class found.</p>
        ) : (
          <ClassTable
            classes={currentClasses}
            
            isAscending={isAscending}
            onSort={handleSort}
            onDelete={handleDeleteClass}
            onAddStudent={() => setShowAddClassStudentModal(true)}
            onAddSubject={() => setShowAddClassSubjectModal(true)}
          />
        )}
        {renderModals()}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default ListClass;
