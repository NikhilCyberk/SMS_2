import React, { useState, useEffect } from "react";
import axios from "axios";

const ComplainComponent = () => {
    const schoolId = localStorage.getItem("_id");
  const [complaint, setComplaint] = useState("");
  const [complaintList, setComplaintList] = useState([]);

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleComplaintSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/complain-create", { complaint });
      setComplaint("");
      fetchComplaintList();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchComplaintList = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/complain-list/${schoolId}`);
      setComplaintList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComplaintList();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Create Complaint
        </h2>
        <form
          onSubmit={handleComplaintSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="complaint"
              className="block text-gray-700 font-bold mb-2"
            >
              Complaint
            </label>
            <textarea
              id="complaint"
              value={complaint}
              onChange={handleComplaintChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="3"
              placeholder="Enter your complaint"
            ></textarea>
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Complaint List
        </h2>
        <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          {complaintList.length > 0 ? (
            complaintList.map((complaint) => (
              <li key={complaint._id} className="mb-4">
                <div className="bg-gray-200 rounded-lg p-4">
                  <p className="text-gray-700">{complaint.complaint}</p>
                  <p className="text-gray-500 text-sm">
                    By: {complaint.user.name}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <p className="text-gray-700">No complaints found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ComplainComponent;
