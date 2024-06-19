import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../admin/Layout/TopBar";
import { useParams } from "react-router-dom";
import SubjectDetailCard from "./SubjectDetailCard";
import StudentTable from "../admin/table/StudentTable";

const SubjectDetails = () => {
  const { subject_id, type } = useParams();
  const [subject, setSubject] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [studentCount, setStudentCount] = useState(0);
  const [students, setStudents] = useState([]);
  const id = localStorage.getItem("_id");

  useEffect(() => {
    const fetchSubjectData = async () => {
      try {
        const subjectResponse = await axios.get(
          `http://localhost:3000/all-subjects/${id}`
        );
        const filteredSubject = subjectResponse.data.find(
          (item) => item._id === subject_id
        );

        if (filteredSubject) {
          setSubject(filteredSubject);

          const studentsResponse = await axios.get(
            `http://localhost:3000/get-students/${id}`
          );
          const filteredStudents = studentsResponse.data.filter(
            (student) =>
              student.sclassName._id === filteredSubject.sclassName._id
          );
          setStudentCount(filteredStudents.length);
          setStudents(filteredStudents);

          if (filteredSubject.teacher) {
            const teacherResponse = await axios.get(
              `http://localhost:3000/teacher/${filteredSubject.teacher}`
            );
            if (teacherResponse.data) {
              setTeacher(teacherResponse.data);
            } else {
              console.log("Teacher not found");
            }
          }
        } else {
          console.log("Subject not found");
        }
      } catch (error) {
        console.error("Error fetching subject data", error);
      }
    };

    fetchSubjectData();
  }, [subject_id, id]);

  const handleTypeChange = (newType) => {
    // Assume there is a function to update the URL with the new type
    window.history.pushState(null, "", `/subject/${subject_id}/${newType}`);
  };

  const renderContent = () => {
    if (!subject) {
      return <div>Loading...</div>;
    }
    if (type === "sub_details") {
      return (
        <SubjectDetailCard
          subject={subject}
          teacher={teacher}
          studentCount={studentCount}
        />
      );
    } else if (type === "sub_students") {
      return <StudentTable students={students} />;
    } else {
      return <div>Invalid type</div>;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 text-white">
      <TopBar onTypeChange={handleTypeChange} data="subject" />
      {renderContent()}
    </div>
  );
};

export default SubjectDetails;
