import axios from "axios";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link, useParams } from "react-router-dom";
import AddClass from "./AddClass";
import ListStudent from "./ListStudent";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const ListClass = () => {
  const [classes, setClasses] = useState([]);
  const { id } = useParams();
  const handleViewClass = (classId) => {
    const navigate = useNavigate();
    navigate(`/class-student/${classId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-class/${id}`,
          {}
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [classes, id]);

  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const handleAddClassModal = () => {
    setShowAddClassModal(!showAddClassModal);
  };

  const handleDeleteClass = async (classId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this class?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              const response = await axios.delete(
                `http://localhost:3000/sclass/${classId}`
              );
              setClasses(classes.filter((c) => c._id !== classId));
            } catch (error) {
              if (error.response.status === 500) {
                alert(error.response.data.message);
              }
              console.error("Error deleting class:", error);
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

  return (
    <div className="container mx-auto">
      <div className=" p-8 mt-0 ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Classes List</h2>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleAddClassModal}
          >
            Add Class
          </button>
        </div>

        {classes.length === 0 ? (
          <p className="text-gray-500">No class found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-2">Class</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classItem, index) => (
                  <tr
                    key={classItem.id}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border px-4 py-2">{classItem.sclassName}</td>
                    <td className="border px-4 py-2">
                      {classItem.createdAt + " " + classItem.updatedAt}
                    </td>
                    <td className="border px-4 py-2">
                      <Link
                        to={`/admin/class-student/${classItem._id}/${classItem.sclassName}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        View
                      </Link>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        onClick={() => handleDeleteClass(classItem._id)}
                      >
                        Delete
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        disabled
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Add Teacher Modal */}
        {showAddClassModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
              <h2 className="text-xl font-bold mb-4">Add Class</h2> <AddClass />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddClassModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListClass;
