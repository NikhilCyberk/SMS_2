import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
import Subjects from "./Subjects";
import Students from "./Students";
import Teachers from "./Teachers";

const ClassDetails = () => {
  const { id, type } = useParams();
  const schoolId = localStorage.getItem("_id");
  console.log(id, "id", schoolId, "schoolId", type, "type");

  const [subject, setSubject] = useState({});
  const [student, setStudent] = useState({});
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjects, students, teachers] = await Promise.all([
          axios.get(`http://localhost:3000/class-subjects/${id}`),
          axios.get(`http://localhost:3000/get-students/${schoolId}`),
          axios.get(`http://localhost:3000/teachers/${schoolId}`),
        ]);

        const filteredStudents = students.data.filter(
          (student) => student.sclassName._id === id
        );
        setStudent(filteredStudents);
        const filteredSubjects = subjects.data.filter(
          (subject) => subject.sclassName === id
        );
        setSubject(filteredSubjects);
        const filteredTeachers = teachers.data
          .map((teacher) => teacher.teachSclass)
          .filter((teacher) => teacher._id === id);

        setTeacher(filteredTeachers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id, schoolId]);

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const renderContent = () => {
    if (type === "subjects") {
      return subject.length > 0 ? (
        <Subjects subjects={subject} />
      ) : (
        <p>No subject available</p>
      );
    } else if (type === "students") {
      return student.length > 0 ? (
        <Students students={student} />
      ) : (
        <p>No student available</p>
      );
    } else if (type === "teachers") {
      return teacher.length > 0 ? (
        <Teachers teachers={teacher} />
      ) : (
        <p>No Teacher available</p>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <TopBar onTypeChange={handleTypeChange} />
      {renderContent()}
    </div>
  );
};

export default ClassDetails;
