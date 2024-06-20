import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTeacherForm from "../AddTeacherForm";
import TeacherAttendance from "./TeacherAttendance";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Pagination from "../../admin/table/Pagination";

import Header from "../header/Header";
import TeacherTable from "../table/TeacherTable";
import Modal from "../table/Modal";

const ListTeacher = () => {
  const schoolId = localStorage.getItem("_id");
  const [teachers, setTeachers] = useState([]);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [classes, setClasses] = useState([]);

  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/teachers/${schoolId}`
        );
        if (Array.isArray(response.data)) {
          setTeachers(response.data);
          setFilteredData(response.data);
        } else {
          setTeachers([]);
        }
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
  }, [schoolId]);

  useEffect(() => {
    const filtered = teachers.filter(
      (teacher) =>
        teacher.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.teachSclass.sclassName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        teacher.teachSubject.subName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page whenever the search term changes
  }, [searchTerm, teachers]);

  const indexOfLastEntry = currentPage * itemsPerPage;
  const indexOfFirstEntry = indexOfLastEntry - itemsPerPage;
  const currentEntries = Array.isArray(filteredData)
    ? filteredData.slice(indexOfFirstEntry, indexOfLastEntry)
    : [];

  const totalPages = Math.ceil(
    Array.isArray(filteredData) ? filteredData.length / itemsPerPage : 1
  );

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleAddTeacherModal = () => {
    setShowAddTeacherModal(!showAddTeacherModal);
  };

  const handleAttendanceModal = (teacher) => {
    setSelectedTeacher(teacher);
    setShowAttendanceModal(!showAttendanceModal);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header
          searchTerm={searchTerm}
          onSearch={handleSearchChange}
          onAdd={handleAddTeacherModal}
          onDeleteAll={handleDeleteAllTeachers}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
          title="Teacher List"
          isDeleteAllVisible={handleDeleteAllTeachers}
        />
        {filteredData.length === 0 ? (
          <p className="text-gray-500">No teachers found.</p>
        ) : (
          <TeacherTable
            teachers={currentEntries}
            onDelete={handleDelete}
            onEdit={(teacherId) =>
              console.log(`Edit teacher with ID: ${teacherId}`)
            }
            onAttendance={handleAttendanceModal}
          />
        )}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {showAddTeacherModal && (
          <Modal title="Add Teacher" onClose={handleAddTeacherModal}>
            <AddTeacherForm />
          </Modal>
        )}
        {showAttendanceModal && selectedTeacher && (
          <Modal
            title="Teacher Attendance"
            onClose={() => setShowAttendanceModal(false)}
          >
            <TeacherAttendance teacherId={selectedTeacher._id} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ListTeacher;
