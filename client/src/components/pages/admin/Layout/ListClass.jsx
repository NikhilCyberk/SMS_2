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

  const { school_id } = useParams();

  const handleDeleteClass = useCallback(async (classId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this class?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/sclass/${school_id}`);
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
                        `http://localhost:3000/sclasses/${school_id}`
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
  }, [school_id]);

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
          `http://localhost:3000/get-class/${school_id}`
        );
        setClasses(response.data);
        setFilteredClasses(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [school_id, handleDeleteAllClasses, showAddClassModal]);

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
