import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateExamResult = ({ studentId, subjects }) => {
  const [formData, setFormData] = useState({ subName: "", marksObtained: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  // console.log(subjects, "subjects", 1231231312);
  const id = localStorage.getItem("_id");
  // console.log(id, "id");
  useEffect(() => {
    if (
      !Array.isArray(subjects) ||
      subjects.length === 0 ||
      subjects.message === "No subjects found"
    ) {
      alert(
        "No subjects available. Please add a subject first for this class."
      );
      navigate(`/admin/list-subject/${id}`); // Adjust the path to your add-subject page
    }
  }, [subjects, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/update-exam-result/${studentId}`,
        formData
      );
      setMessage("Exam result updated successfully!");
    } catch (error) {
      setMessage("Error updating exam result.");
      console.error("Error updating exam result:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-yellow-500">
        Update Exam Result
      </h2>
      {message && <p className="mb-4 text-yellow-300">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="subName">
            Subject
          </label>
          <select
            id="subName"
            name="subName"
            value={formData.subName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded"
          >
            <option value="">Select Subject</option>
            {subjects.map((subject) => (
              <option key={subject._id} value={subject._id}>
                {subject.subName}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2" htmlFor="marksObtained">
            Marks Obtained
          </label>
          <input
            type="number"
            id="marksObtained"
            name="marksObtained"
            value={formData.marksObtained}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-gray-700 text-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600"
        >
          Update Result
        </button>
      </form>
    </div>
  );
};

export default UpdateExamResult;
