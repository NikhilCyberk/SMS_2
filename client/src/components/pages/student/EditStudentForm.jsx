import React, { useState, useEffect } from "react";
import axios from "axios";
import studentImg from "../../../../public/student.svg";

const EditStudentForm = ({ studentId, onClose, onSave }) => {
  const [studentData, setStudentData] = useState({
    name: "",
    rollNum: "",
    password: "",
    sclassName: "",
  });
  const id = localStorage.getItem("_id");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/get-class/${id}`)
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [id]);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-student-detail/${studentId}`
        );
        // console.log(response.data, 8989898);
        setStudentData(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };
    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/student/${studentId}`,
        studentData
      );
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-600 p-2 rounded shadow w-1/4 mb-2">
        <img src={studentImg} alt="Student Image" />
      </div>
      <div className=" bg-gray-800 rounded-xl shadow-lg p-2 mb-2 ">
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-6">
          <form onSubmit={handleSubmit} className="text-white">
            <label
              htmlFor="name"
              className="block font-medium mb-2 text-gray-300"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={studentData.name}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />

            <label
              htmlFor="rollNum"
              className="block font-medium mb-2 text-gray-300"
            >
              Roll Number:
            </label>
            <input
              type="number"
              name="rollNum"
              value={studentData.rollNum}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            />

            <label
              htmlFor="password"
              className="block font-medium mb-2 text-gray-300"
            >
              Password: Do not edit password
            </label>
            <input
              type="password"
              name="password"
              value={studentData.password}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
              disabled
            />

            <label
              htmlFor="sclassName"
              className="block font-medium mb-2 text-gray-300"
            >
              Class:
            </label>
            <select
              id="sclassName"
              name="sclassName"
              value={studentData.sclassName}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              required
            >
              {classes.map((classItem) => (
                <option key={classItem._id} value={classItem._id}>
                  {classItem.sclassName}
                </option>
              ))}
            </select>

            <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 focus:outline-none mt-4">Save</button>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default EditStudentForm;
