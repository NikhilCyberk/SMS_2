import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddClass from "./AddClass";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import {
  AiFillEye,
  AiFillDelete,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";
import "react-confirm-alert/src/react-confirm-alert.css";
import { PiStudent } from "react-icons/pi";
import { MdOutlineSubject } from "react-icons/md";
import AddStudentForm from "./AddStudentForm";
import AddSubject from "./AddSubject";

const ListClass = () => {
  const [classes, setClasses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleViewClass = (classId) => {
    navigate(`/class-student/${classId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-class/${id}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [showAddClassSubjectModal, setShowAddClassSubjectModal] =
    useState(false);
  const [showAddClassStudentModal, setShowAddClassStudentModal] =
    useState(false);

  const handleAddClassModal = () => {
    setShowAddClassModal(!showAddClassModal);
  };

  const handleAddClassSubjectModal = () => {
    setShowAddClassSubjectModal(!showAddClassSubjectModal);
  };

  const handleAddClassStudentModal = () => {
    setShowAddClassStudentModal(!showAddClassStudentModal);
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
              await axios.delete(`http://localhost:3000/sclass/${classId}`);
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
    <div className="p-8 bg-gray-900  min-h-screen text-white  ">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-4xl font-bold text-teal-300">Classes List</h2>
        <button
          className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300"
          onClick={handleAddClassModal}
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>

      {classes.length === 0 ? (
        <p className="text-gray-900">No class found.</p>
      ) : (
        <div className="overflow-x-auto border-4 rounded-lg border-blue-500">
          <table className="min-w-full  bg-gray-800    shadow-lg">
            <thead className="bg-gray-900    text-teal-300 sticky top-0">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classItem, index) => (
                <tr
                  key={classItem._id}
                  className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {classItem.sclassName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(classItem.createdAt).toLocaleString()} -{" "}
                    {new Date(classItem.updatedAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-4">
                    <Link
                      // to={`/admin/class-student/${classItem._id}/${classItem.sclassName}`}
                      to={`/admin/class/${classItem._id}/subjects`}
                      className="text-blue-500 hover:text-blue-700 transition duration-300"
                    >
                      <AiFillEye size={24} />
                    </Link>
                    <button
                      className="text-red-500 hover:text-red-700 transition duration-300"
                      onClick={() => handleDeleteClass(classItem._id)}
                    >
                      <AiFillDelete size={24} />
                    </button>
                    <button
                      className="text-violet-500 hover:text-violet-700 transition duration-300"
                      // onClick={() => handleAddStudent(classItem._id)}
                      onClick={() => handleAddClassStudentModal()}
                    >
                      <PiStudent size={24} />
                      Add Student
                    </button>
                    <button
                      className="text-green-500 hover:text-green-700 transition duration-300"
                      // onClick={() => handleAddSubject(classItem._id)}
                      onClick={() => handleAddClassSubjectModal()}
                    >
                      <MdOutlineSubject size={24} />
                      Add Subject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showAddClassModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-teal-300">Add Class</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={handleAddClassModal}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <AddClass />
          </div>
        </div>
      )}
      {showAddClassSubjectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-teal-300">Add Class</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={handleAddClassSubjectModal}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <AddSubject />
          </div>
        </div>
      )}
      {showAddClassStudentModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-teal-300">Add Class</h2>
              <button
                className="text-red-500 hover:text-red-700 transition duration-300"
                onClick={handleAddClassStudentModal}
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <AddStudentForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default ListClass;
