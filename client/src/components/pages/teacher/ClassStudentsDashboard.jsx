import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../admin/header/Header";
import StudentTable from "../admin/table/StudentTable";
import Pagination from "../admin/table/Pagination";

const ClassStudentsDashboard = () => {
  const { class_id } = useParams();
  const [students, setStudents] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  useEffect(() => {
    const fetchClassStudents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/class/Students/${class_id}`
        );
        if (response.data.status) {
          setStudents(response.data.modifiedStudents);
        } else {
          setError(response.data.message || "No students found");
        }
      } catch (err) {
        setError("Failed to fetch student details");
      }
    };
    fetchClassStudents();
  }, [class_id]);

  useEffect(() => {
    const filtered = students.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.sclassName.sclassName
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [searchTerm, students]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-600 text-white px-6 py-4 rounded-lg shadow-lg">
          {error}
        </div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-2xl animate-pulse">Loading...</div>
      </div>
    );
  }

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header
          title="Class Students"
          searchTerm={searchTerm}
          onSearch={handleSearchChange}
        />
        <StudentTable students={currentEntries} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student._id} student={student} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ClassStudentsDashboard;
