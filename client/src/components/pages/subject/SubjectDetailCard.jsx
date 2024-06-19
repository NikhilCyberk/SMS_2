import React from "react";

const SubjectDetailCard = ({ subject, teacher, studentCount }) => {
  console.log(subject, "sub", teacher, "teacher", studentCount, 778855412);

  return (
    <div className="max-w-lg mx-auto bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      <div className="p-6">
        <h2 className="font-bold text-3xl mb-4">{subject?.subName || "N/A"}</h2>
        <p className="text-lg mb-2">
          Subject Code: {subject?.subCode || "N/A"}
        </p>
        <p className="text-lg mb-2">
          Subject Sessions: {subject?.sessions || "N/A"}
        </p>
        <p className="text-lg mb-2">Number of Students: {studentCount}</p>
        <p className="text-lg mb-2">
          Class Name: {subject?.sclassName?.sclassName || "N/A"}
        </p>
        <p className="text-lg mb-2">Teacher Name: {teacher?.name || "N/A"}</p>
        <p className="text-lg">Teacher Email: {teacher?.email || "N/A"}</p>
      </div>
    </div>
  );
};

export default SubjectDetailCard;
