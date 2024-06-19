// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import subjectImg from "../../../../../public/subject.svg";

// const AddSubject = () => {
//   const schoolId = localStorage.getItem("_id");
//   const [subjects, setSubjects] = useState([
//     { subName: "", subCode: "", sessions: "" },
//   ]);
//   const [classes, setClasses] = useState([]);
//   const [sclassName, setSclassName] = useState("");
//   const [adminID, setAdminID] = useState(schoolId);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:3000/get-class/${schoolId}`
//         );
//         setClasses(response.data);
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchClasses();
//   }, [schoolId]);

//   const handleSubjectChange = (index, field, value) => {
//     const updatedSubjects = subjects.map((subject, idx) =>
//       idx === index ? { ...subject, [field]: value } : subject
//     );
//     setSubjects(updatedSubjects);
//   };

//   const addSubject = () => {
//     setSubjects([...subjects, { subName: "", subCode: "", sessions: "" }]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/subject-create",
//         {
//           subjects,
//           sclassName,
//           adminID,
//         }
//       );
//       console.log(response.data, 2020202);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div className="bg-gray-600 p-2 rounded shadow w-1/2 mb-2  ml-[6rem]">
//         <img src={subjectImg} alt="Student Image" />
//       </div>
//       <div className="flex justify-center items-center bg-gray-900">
//         <div className="bg-gray-800 shadow-lg rounded-lg w-full max-w-md p-8">
//           <form onSubmit={handleSubmit}>
//             {subjects.map((subject, index) => (
//               <div key={index} className="mb-4">
//                 <label className="block font-medium mb-2  text-gray-300">
//                   Subject Name:
//                   <input
//                     type="text"
//                     value={subject.subName}
//                     onChange={(e) =>
//                       handleSubjectChange(index, "subName", e.target.value)
//                     }
//                     className="w-full bg-gray-700 p-2 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
//                   />
//                 </label>
//                 <label className="block font-medium mb-2 text-gray-300">
//                   Subject Code:
//                   <input
//                     type="text"
//                     value={subject.subCode}
//                     onChange={(e) =>
//                       handleSubjectChange(index, "subCode", e.target.value)
//                     }
//                     className="w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 p-2"
//                   />
//                 </label>
//                 <label className="block font-medium mb-2 text-gray-300">
//                   Sessions:
//                   <input
//                     type="text"
//                     value={subject.sessions}
//                     onChange={(e) =>
//                       handleSubjectChange(index, "sessions", e.target.value)
//                     }
//                     className="w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 p-2"
//                   />
//                 </label>
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={addSubject}
//               className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md mb-4"
//             >
//               Add Subject
//             </button>
//             <label className="block font-medium mb-2 text-gray-300">
//               Class Name:
//             </label>
//             <select
//               id="className"
//               value={sclassName}
//               onChange={(e) => setSclassName(e.target.value)}
//               className="w-full bg-gray-700 text-white border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 p-2"
//             >
//               {classes.map((classItem) => (
//                 <option key={classItem._id} value={classItem._id}>
//                   {classItem.sclassName}
//                 </option>
//               ))}
//             </select>
//             <button
//               type="submit"
//               className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md mt-4"
//             >
//               Create Subjects
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddSubject;

import React, { useState, useEffect } from "react";
import axios from "axios";
import subjectImg from "../../../../../public/subject.svg";

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
      // console.log(response.data, 2020202);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-700  rounded-lg shadow-lg ">
        <img src={subjectImg} alt="Subject" className="w-1/4 h-auto" />
      </div>
      <div className="flex justify-center items-center bg-gray-900  ">
        <div className="bg-gray-800 shadow-xl rounded-lg w-full ">
          <form onSubmit={handleSubmit}>
            {subjects.map((subject, index) => (
              <div key={index} className="mb-6">
                <label className="block font-medium mb-2 text-gray-400">
                  Subject Name:
                  <input
                    type="text"
                    value={subject.subName}
                    onChange={(e) =>
                      handleSubjectChange(index, "subName", e.target.value)
                    }
                    className="w-full bg-gray-700 p-3 text-white border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                    placeholder="Enter subject name"
                  />
                </label>
                <label className="block font-medium mb-2 text-gray-400">
                  Subject Code:
                  <input
                    type="text"
                    value={subject.subCode}
                    onChange={(e) =>
                      handleSubjectChange(index, "subCode", e.target.value)
                    }
                    className="w-full bg-gray-700 p-3 text-white border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                    placeholder="Enter subject code"
                  />
                </label>
                <label className="block font-medium mb-2 text-gray-400">
                  Sessions:
                  <input
                    type="text"
                    value={subject.sessions}
                    onChange={(e) =>
                      handleSubjectChange(index, "sessions", e.target.value)
                    }
                    className="w-full bg-gray-700 p-3 text-white border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                    placeholder="Enter number of sessions"
                  />
                </label>
              </div>
            ))}
            <button
              type="button"
              onClick={addSubject}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md mb-6 transition duration-200"
            >
              Add Subject
            </button>
            <label className="block font-medium mb-2 text-gray-400">
              Class Name:
            </label>
            <select
              id="className"
              value={sclassName}
              onChange={(e) => setSclassName(e.target.value)}
              className="w-full bg-gray-700 p-3 text-white border border-gray-600 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
            >
              <option value={null}>Select a class</option>
              {classes.map((classItem) => (
                <option key={classItem._id} value={classItem._id}>
                  {classItem.sclassName}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md mt-6 transition duration-200"
            >
              Create Subjects
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
