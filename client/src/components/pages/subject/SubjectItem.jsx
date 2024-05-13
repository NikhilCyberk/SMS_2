import React, { useState, useEffect } from "react";
import SubjectActions from "./SubjectActions";

const SubjectItem = ({ subject }) => {
  return (
    <li key={subject._id} className="py-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{subject.subName}</h3>
          <p className="text-gray-500">Code: {subject.subCode}</p>
        </div>
        <SubjectActions subject={subject} />
      </div>
    </li>
  );
};

export default SubjectItem;
