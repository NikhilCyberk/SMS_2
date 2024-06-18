import React from "react";
import ExamResults from "./ExamResults";
import Attendance from "./Attendance";

const StudentCardDetail = ({ student }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-yellow-500">
        {student.name}
      </h2>
      <p className="mb-2">
        <span className="font-semibold">Roll Number:</span> {student.rollNum}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Class:</span>{" "}
        {student.sclassName.sclassName}
      </p>
      <p className="mb-2">
        <span className="font-semibold">School:</span>{" "}
        {student.school.schoolName}
      </p>
      <ExamResults examResult={student.examResult} />
      <Attendance attendance={student.attendance} />
    </div>
  );
};

export default StudentCardDetail;
