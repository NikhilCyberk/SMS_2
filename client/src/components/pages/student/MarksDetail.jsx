import React from "react";
import ExamResults from "./ExamResults";
import UpdateExamResult from "./UpdateExamResult";

const MarksDetail = ({ studentId, examResult, subjects }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
      <ExamResults examResult={examResult} />
      <UpdateExamResult studentId={studentId} subjects={subjects} />
    </div>
  );
};

export default MarksDetail;
