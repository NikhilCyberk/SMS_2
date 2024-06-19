import React, { useState } from "react";
import axios from "axios";
const SubjectActions = ({ subject }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    // console.log(subject._id, 6545);
    try {
      setIsDeleting(true);
      await axios.delete(`http://localhost:3000/Subject/${subject._id}`);
      // Refresh the subject list or update the state accordingly
    } catch (error) {
      console.error("Error deleting subject:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
};

export default SubjectActions;
