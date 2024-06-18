import React from "react";

const ExamResults = ({ examResult }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-yellow-500">
        Exam Results:
      </h3>
      <ul className="list-disc list-inside">
        {examResult.map((result, index) => (
          <li key={index} className="mb-1">
            {result.subName.subName}: {result.marksObtained}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamResults;
