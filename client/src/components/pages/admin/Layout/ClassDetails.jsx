import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "./TopBar";
// import Subjects from "./Subjects";
import Subjects from "../table/SubjectTable";
// import Students from "./Students";
import Students from "../table/StudentTable";
// import Teachers from "./Teachers";
import Teachers from "../table/TeacherTable";

const ClassDetails = () => {
  const { classes, class_id, type } = useParams();
  const schoolId = localStorage.getItem("_id");
  // console.log(id, "id", schoolId, "schoolId", type, "type");
  // console.log(class_id, 22556699);

  const [subject, setSubject] = useState({});
  const [student, setStudent] = useState({});
  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [subjects, students, teachers] = await Promise.all([
          axios.get(`http://localhost:3000/class-subjects/${class_id}`),
          // axios.get(`http://localhost:3000/get-students/${schoolId}`),
          axios.get(`http://localhost:3000/class/Students/${class_id}`),
          axios.get(`http://localhost:3000/teachers/${schoolId}`),
        ]);

        setSubject(subjects.data);
        setStudent(students.data?.modifiedStudents || []);
        // Filter teachers that are equal to the class ID
        const filteredTeachers = teachers.data.filter(
          (teacher) => teacher.teachSclass._id === class_id
        );
        setTeacher(filteredTeachers);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [class_id, schoolId]);

  // console.log(teacher, 77888);
  // console.log(student, 77889);
  // console.log(subject, 77887);

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const renderContent = () => {
    if (type === "subjects") {
      return subject.length > 0 ? (
        <div className="m-4 ">
          <Subjects subjects={subject} />
        </div>
      ) : (
        <p>No subject available</p>
      );
    } else if (type === "students") {
      return student.length > 0 ? (
        <div className="m-4">
          <Students students={student} SclassName={classes} />
        </div>
      ) : (
        <p>No student available</p>
      );
    } else if (type === "teachers") {
      return teacher.length > 0 ? (
        <div className="m-4">
          <Teachers teachers={teacher} />
        </div>
      ) : (
        <p>No Teacher available</p>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <TopBar onTypeChange={handleTypeChange} data="class" />
      {renderContent()}
    </div>
  );
};

export default ClassDetails;
