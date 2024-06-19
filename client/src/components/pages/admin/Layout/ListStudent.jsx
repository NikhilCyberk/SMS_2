import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  remove,
  fetchStudents,
} from "../../../../store/slice/studentsSlice.js";
import { confirmAlert } from "react-confirm-alert";
import { FaPlus } from "react-icons/fa";
import "react-confirm-alert/src/react-confirm-alert.css";
import AddStudentForm from "./AddStudentForm";
import EditStudentForm from "../../student/EditStudentForm.jsx";
import Header from "../../admin/header/Header";
import StudentTable from "../table/StudentTable";
import Pagination from "../../admin/table/Pagination";
import Modal from "../table/Modal";

const ListStudent = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [editStudentId, setEditStudentId] = useState(null);

  const schoolId = localStorage.getItem("_id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-students/${schoolId}`
        );
        setStudentData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [schoolId]);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    const filtered = studentData.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.sclassName.sclassName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, studentData]);

  const handleDeleteAll = async () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete all students?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/students/${schoolId}`);
              setStudentData([]);
              setFilteredData([]);
              dispatch(fetchStudents());
            } catch (error) {
              console.error("Error deleting all students:", error);
            }
          },
        },
        { label: "No", onClick: () => {} },
      ],
    });
  };

  const handleDeleteStudent = (studentId) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this student?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await axios.delete(`http://localhost:3000/student/${studentId}`);
              setStudentData((prevData) =>
                prevData.filter((student) => student._id !== studentId)
              );
              setFilteredData((prevData) =>
                prevData.filter((student) => student._id !== studentId)
              );
              dispatch(remove(studentId));
            } catch (error) {
              console.error("Error deleting student:", error);
            }
          },
        },
        { label: "No", onClick: () => {} },
      ],
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEntriesPerPageChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleAddStudentModal = () => {
    setShowAddStudentModal(!showAddStudentModal);
  };

  const handleEditStudent = (studentId) => {
    setEditStudentId(studentId);
  };

  const handleSaveEdit = (updatedStudent) => {
    setStudentData((prevData) =>
      prevData.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );
    setFilteredData((prevData) =>
      prevData.map((student) =>
        student._id === updatedStudent._id ? updatedStudent : student
      )
    );
    setEditStudentId(null);
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          searchTerm={searchTerm}
          onSearch={handleSearchChange}
          onAdd={handleAddStudentModal}
          onDeleteAll={handleDeleteAll}
          itemsPerPage={entriesPerPage}
          onItemsPerPageChange={handleEntriesPerPageChange}
          title="Students List"
          isDeleteAllVisible={true}
        />
        {filteredData.length === 0 ? (
          <p className="text-gray-300">No student found.</p>
        ) : (
          <StudentTable
            students={currentEntries}
            onDelete={handleDeleteStudent}
            onEdit={handleEditStudent}
          />
        )}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {showAddStudentModal && (
          <Modal title="Add Student" onClose={handleAddStudentModal}>
            <AddStudentForm />
          </Modal>
        )}
        {editStudentId && (
          <Modal title="Edit Student" onClose={() => setEditStudentId(null)}>
            <EditStudentForm
              studentId={editStudentId}
              onClose={() => setEditStudentId(null)}
              onSave={handleSaveEdit}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ListStudent;
