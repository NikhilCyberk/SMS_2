import React, { useState, useEffect } from "react";
import axios from "axios";

const AddSubject = () => {
  const schoolId = localStorage.getItem("_id");
  const [subjects, setSubjects] = useState([
    { subName: "", subCode: "", sessions: "" },
  ]);
  const [classes, setClasses] = useState([]);
  const [sclassName, setSclassName] = useState("");
  const [adminID, setAdminID] = useState(schoolId);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/get-class/${schoolId}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, [schoolId]);

  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = subjects.map((subject, idx) =>
      idx === index ? { ...subject, [field]: value } : subject
    );
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { subName: "", subCode: "", sessions: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/subject-create",
        {
          subjects,
          sclassName,
          adminID,
        }
      );
      console.log(response.data, 2020202);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold mb-6">Create Subjects</h2>
        <form onSubmit={handleSubmit}>
          {subjects.map((subject, index) => (
            <div key={index} className="mb-4">
              <label className="block font-medium mb-2">
                Subject Name:
                <input
                  type="text"
                  value={subject.subName}
                  onChange={(e) =>
                    handleSubjectChange(index, "subName", e.target.value)
                  }
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block font-medium mb-2">
                Subject Code:
                <input
                  type="text"
                  value={subject.subCode}
                  onChange={(e) =>
                    handleSubjectChange(index, "subCode", e.target.value)
                  }
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
              <label className="block font-medium mb-2">
                Sessions:
                <input
                  type="text"
                  value={subject.sessions}
                  onChange={(e) =>
                    handleSubjectChange(index, "sessions", e.target.value)
                  }
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={addSubject}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md mb-4"
          >
            Add Subject
          </button>
          <label className="block font-medium mb-2">Class Name:</label>
          <select
            id="className"
            value={sclassName}
            onChange={(e) => setSclassName(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {classes.map((classItem) => (
              <option key={classItem._id} value={classItem._id}>
                {classItem.sclassName}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md"
          >
            Create Subjects
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSubject;
