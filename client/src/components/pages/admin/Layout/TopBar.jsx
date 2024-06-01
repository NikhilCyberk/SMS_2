import React from "react";
import { Link, useParams } from "react-router-dom";

const TopBar = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-around bg-gray-800 p-4 text-teal-300">
      <Link to={`/admin/class/${id}/subjects`} className="hover:text-teal-500">
        Subjects
      </Link>
      <Link to={`/admin/class/${id}/students`} className="hover:text-teal-500">
        Students
      </Link>
      <Link to={`/admin/class/${id}/teachers`} className="hover:text-teal-500">
        Teachers
      </Link>
    </div>
  );
};

export default TopBar;
