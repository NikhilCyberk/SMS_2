import React, { useState } from "react";
import axios from "axios";

const UpdateExamResult = ({ studentId, subjects }) => {
  const [formData, setFormData] = useState({ subName: "", marksObtained: "" });
  const [message, setMessage] = useState("");

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
