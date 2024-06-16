// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import ComplaintForm from "./ComplaintForm";

// const ComplaintList = () => {
//   const { id } = useParams();
//   const [complaints, setComplaints] = useState([]);
//   const [message, setMessage] = useState("");
//   const [showAddComplaintModal, setShowAddComplaintModal] = useState(false);

//   useEffect(() => {
//     const fetchComplaints = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:3000/complain-list/${id}`
//         );
//         if (res.data.message) {
//           setMessage(res.data.message);
//         } else {
//           setComplaints(res.data);
//         }
//       } catch (err) {
//         setMessage("Error fetching complaints. Please try again.");
//         console.error(err);
//       }
//     };
//     fetchComplaints();
//   }, [id]);

//   const handleAddComplaintModal = () => {
//     setShowAddComplaintModal(!showAddComplaintModal);
//   };

//   return (
//     <div className="   min-h-screen">
//       <div className="container mx-auto py-8">
//         <div className="bg-white rounded-lg shadow-md p-8">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">Complaint List</h2>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={handleAddComplaintModal}
//             >
//               Add Complaint
//             </button>
//           </div>
//           {message && <p className="text-green-500 mb-4">{message}</p>}
//           {complaints.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full table-auto">
//                 <thead>
//                   <tr className="bg-gray-200 text-gray-700">
//                     <th className="px-4 py-2">Complaint</th>
//                     <th className="px-4 py-2">User</th>
//                     <th className="px-4 py-2">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {complaints.map((complaint) => (
//                     <tr
//                       key={complaint._id}
//                       className="border-b hover:bg-gray-100"
//                     >
//                       <td className="px-4 py-2">{complaint.complaint}</td>
//                       <td className="px-4 py-2">
//                         {complaint.user
//                           ? complaint.user.name
//                           : "User Deleted / Changed"}
//                       </td>
//                       <td className="px-4 py-2">
//                         {complaint.date
//                           ? new Date(complaint.date).toLocaleDateString()
//                           : "Unknown Date"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-gray-500">No complaints found.</p>
//           )}
//         </div>
//       </div>
//       {showAddComplaintModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg shadow-lg p-8">
//             <h2 className="text-xl font-bold mb-4">Add Complaint</h2>
//             <ComplaintForm id={id} />
//             <button
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
//               onClick={handleAddComplaintModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComplaintList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ComplaintForm from "./ComplaintForm";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const ComplaintList = () => {
  const { id } = useParams();
  const [complaints, setComplaints] = useState([]);
  const [message, setMessage] = useState("");
  const [showAddComplaintModal, setShowAddComplaintModal] = useState(false);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/complain-list/${id}`
        );
        if (res.data.message) {
          setMessage(res.data.message);
        } else {
          setComplaints(res.data);
        }
      } catch (err) {
        setMessage("Error fetching complaints. Please try again.");
        console.error(err);
      }
    };
    fetchComplaints();
  }, [id]);

  const handleAddComplaintModal = () => {
    setShowAddComplaintModal(!showAddComplaintModal);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header onAddComplaint={handleAddComplaintModal} />
        {message && <p className="text-green-500 mb-4">{message}</p>}
        {complaints.length > 0 ? (
          <ComplaintTable complaints={complaints} />
        ) : (
          <p className="text-gray-500">No complaints found.</p>
        )}
        {showAddComplaintModal && (
          <Modal title="Add Complaint" onClose={handleAddComplaintModal}>
            <ComplaintForm id={id} />
          </Modal>
        )}
      </div>
    </div>
  );
};

const Header = ({ onAddComplaint }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-teal-300">Complaint List</h2>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300"
      onClick={onAddComplaint}
    >
      Add Complaint <AiOutlinePlus className="inline ml-1" />
    </button>
  </div>
);

const ComplaintTable = ({ complaints }) => (
  <div className="overflow-x-auto border-4 rounded-lg border-blue-500 shadow-lg">
    <table className="min-w-full bg-gray-800 rounded-lg">
      <thead className="bg-gray-900 text-teal-300 sticky top-0">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Complaint
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            User
          </th>
          <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {complaints.map((complaint, index) => (
          <tr
            key={complaint._id}
            className={`${
              index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            } transition duration-300 hover:bg-gray-600`}
          >
            <td className="px-6 py-4 whitespace-nowrap">
              {complaint.complaint}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {complaint.user ? complaint.user.name : "User Deleted / Changed"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {complaint.date
                ? new Date(complaint.date).toLocaleDateString()
                : "Unknown Date"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-teal-300">{title}</h2>
        <button
          className="text-red-500 hover:text-red-700 transition duration-300"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
      </div>
      {children}
    </div>
  </div>
);

export default ComplaintList;
