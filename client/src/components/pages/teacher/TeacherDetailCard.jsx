import React from "react";

const TeacherDetailCard = ({ teacher }) => {
  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-yellow-500">
        {teacher.name}
      </h2>
      <p className="mb-2">
        <span className="font-semibold">E-mail:</span> {teacher.email}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Subject:</span>{" "}
        {teacher.teachSubject.subName}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Class:</span>{" "}
        {teacher.teachSclass.sclassName}
      </p>
      <p className="mb-2">
        <span className="font-semibold">total session:</span>{" "}
        {teacher.teachSubject.sessions}
      </p>
    </div>
  );
};

export default TeacherDetailCard;
