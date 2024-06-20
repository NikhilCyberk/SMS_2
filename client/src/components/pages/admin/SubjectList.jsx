import React, { useState, useEffect } from "react";
import axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Header from "../admin/header/Header";
import SubjectTable from "../admin/table/SubjectTable";
import Pagination from "../admin/table/Pagination";
import Modal from "../admin/table/Modal";
import AddSubject from "../admin/Layout/AddSubject";

const SubjectList = ({ id }) => {
  const [subjects, setSubjects] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [isDeleteAllClicked, setIsDeleteAllClicked] = useState(false);
  const [showAddSubjectModal, setShowAddSubjectModal] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/all-subjects/${id}`
        );
        const subjectsData = Array.isArray(response.data) ? response.data : [];
        setSubjects(subjectsData);
        setFilteredData(subjectsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching subjects:", error);
        setLoading(false);
      }
    };
    fetchSubjects();
  }, [id, isDeleteAllClicked]);

  useEffect(() => {
    const filtered = subjects.filter(
      (subject) =>
        subject.sessions.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.subCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.subName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (subject.sclassName &&
          subject.sclassName.sclassName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, subjects]);

  const handleDeleteAll = async () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete all subject?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/Subjects/${id}`);
              setIsDeleteAllClicked(!isDeleteAllClicked);
            } catch (error) {
              console.error("Error deleting all subjects:", error);
            }
          },
        },
        { label: "No", onClick: () => {} },
      ],
    });
  };

  const handleDeleteSubject = async (subjectId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this subject?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/Subject/${subjectId}`);
              setIsDeleteAllClicked(!isDeleteAllClicked);
            } catch (error) {
              console.error("Error deleting subject:", error);
            }
          },
        },
        { label: "No", onClick: () => {} },
      ],
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddSubjectModal = () => {
    setShowAddSubjectModal(!showAddSubjectModal);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const currentEntries = Array.isArray(filteredData)
    ? filteredData.slice(indexOfFirstEntry, indexOfLastEntry)
    : [];

  const totalPages = Math.ceil(
    Array.isArray(filteredData) ? filteredData.length / itemsPerPage : 1
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          title="Subjects List"
          searchTerm={searchTerm}
          onSearch={handleSearch}
          onAdd={handleAddSubjectModal}
          onDeleteAll={handleDeleteAll}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          isDeleteAllVisible={true}
        />
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : filteredData.length === 0 ? (
          <p className="text-gray-500">No subjects found.</p>
        ) : (
          <>
            <SubjectTable
              subjects={currentEntries}
              onDelete={handleDeleteSubject}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </>
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
