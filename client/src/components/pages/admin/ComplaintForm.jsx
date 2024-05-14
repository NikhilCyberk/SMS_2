import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = ({id}) => {
  const [complaint, setComplaint] = useState("");
  const [message, setMessage] = useState("");
  const role = localStorage.getItem("role");
  let user_id;
  const handleSubmit = async (e) => {
    if (role == "admin") {
      user_id = "661b707cce8001db91fdb75e";
    }
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/complain-create", {
        user: user_id, // Replace with the actual user ID
        date: new Date(),
        complaint,
        school: id, // Replace with the actual school ID
      });
      setMessage("Complaint submitted successfully!");
      setComplaint("");
    } catch (err) {
      setMessage("Error submitting complaint. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Submit a Complaint</h2>
        {message && <p className="text-green-500 mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="complaint"
              className="block text-gray-700 font-bold mb-2"
            >
              Complaint
            </label>
            <textarea
              id="complaint"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
