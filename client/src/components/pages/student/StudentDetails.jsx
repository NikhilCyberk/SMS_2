// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import TopBar from "../admin/Layout/TopBar";
// import axios from "axios";
// import StudentCardDetail from "./StudentCardDetail";

// const StudentDetails = () => {
//   const { id, type } = useParams();
//   const [student, setStudent] = useState(null);

//   useEffect(() => {
//     const fetchStudentDetails = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/get-student-detail/${id}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error("Error fetching student details:", error);
//       }
//     };

//     fetchStudentDetails();
//   }, [id]);
//   const handleTypeChange = (newType) => {
//     setType(newType);
//   };

//   const renderContent = () => {
//     if (type === "st_details") {
//       return subject.length > 0 ? (
//         <div className="m-4 ">
//           <StudentCardDetail student={student} />
//         </div>
//       ) : (
//         <p>No student available</p>
//       );
//     } else if (type === "st_attendance") {
//       return student.length > 0 ? (
//         <div className="m-4">

//         </div>
//       ) : (
//         <p>No  available</p>
//       );
//     } else if (type === "st_marks") {
//       return teacher.length > 0 ? (
//         <div className="m-4">

//         </div>
//       ) : (
//         <p>No  available</p>
//       );
//     } else {
//       return null;
//     }
//   };

//   return (
//     <div className="bg-gray-900 min-h-screen p-4 text-white">
//       <TopBar onTypeChange={handleTypeChange} data="student" />
//       {renderContent()}
//     </div>
//   );
// };

// export default StudentDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TopBar from "../admin/Layout/TopBar";
import StudentCardDetail from "./StudentCardDetail";
import AttendanceDetail from "./Attendance";
import MarksDetail from "./MarksDetail";

const StudentDetails = () => {
  const { student_id, type, class_id } = useParams();
  const [student, setStudent] = useState(null);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-student-detail/${student_id}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student details:", error);
      }
    };

    const fetchSubjects = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/class-subjects/${class_id}`
        );
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchStudentDetails();
    fetchSubjects();
  }, [student_id]);

  const handleTypeChange = (newType) => {
    // Assume there is a function to update the URL with the new type
    updateURLWithNewType(newType);
  };

  const renderContent = () => {
    if (!student) {
      return <div className="text-white">Loading...</div>;
    }

    if (type === "st_details") {
      return <StudentCardDetail student={student} />;
    } else if (type === "st_attendance") {
      return <AttendanceDetail attendance={student.attendance} />;
    } else if (type === "st_marks") {
      return (
        <MarksDetail
          studentId={student_id}
          examResult={student.examResult}
          subjects={subjects}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen p-4 text-white">
      <TopBar onTypeChange={handleTypeChange} data="student" />
      {renderContent()}
    </div>
  );
};

export default StudentDetails;
