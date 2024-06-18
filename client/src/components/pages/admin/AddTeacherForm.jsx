import React, { useState, useEffect } from "react";
import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    return [];
  }
};

const AddTeacherForm = () => {
  const schoolId = localStorage.getItem("_id");
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Teacher",
    school: localStorage.getItem("_id"),
    teachSubject: null,
    teachSclass: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchClasses = async () => {
      const classes = await fetchData(
        `http://localhost:3000/get-class/${schoolId}`
      );
      if (Array.isArray(classes)) {
        setClasses(classes);
      } else {
        setClasses([]);
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    const fetchSubjects = async () => {
      const subjects = await fetchData(
        `http://localhost:3000/all-subjects/${schoolId}`
      );
      if (Array.isArray(subjects)) {
        setSubjects(subjects);
      } else {
        setSubjects([]);
      }
    };
    fetchSubjects();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/teacher-reg",
        formData
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 ">
      <div className=" bg-gray-800 rounded-lg shadow-lg ">
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-bold mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="teachSubject"
              className="block text-gray-300 font-bold mb-2"
            >
              Subject
            </label>
            <select
              id="teachSubject"
              name="teachSubject"
              value={formData.teachSubject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              <option value={null}>Select a subject</option>
              {subjects.map((subjectItem) => (
                <option key={subjectItem._id} value={subjectItem._id}>
                  {subjectItem.subName}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="teachSclass"
              className="block text-gray-300 font-bold mb-2"
            >
              Class
            </label>
            <select
              id="teachSclass"
              name="teachSclass"
              value={formData.teachSclass}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              <option value={null}>Select a class</option>
              {classes.map((classItem) => (
                <option key={classItem._id} value={classItem._id}>
                  {classItem.sclassName}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherForm;
