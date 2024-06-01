// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AddStudentForm = () => {
//   const [name, setName] = useState("");
//   const [rollNum, setRollNum] = useState("");
//   const [sclassName, setsclassName] = useState("");
//   const [password, setPassword] = useState("");
//   const [classes, setClasses] = useState([]);
//   const id = localStorage.getItem("_id");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/get-class/${id}`)
//       .then((response) => {
//         setClasses(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching classes:", error);
//       });
//   }, [id]);

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/student-register",
//         {
//           name,
//           rollNum,
//           sclassName,
//           password,
//           adminID: id,
//           role: "Student",
//         }
//       );
//       alert(response.data.message);
//       // Add success handling or navigation logic here
//     } catch (error) {
//       console.error("Error adding student:", error);
//       // Add error handling logic, e.g., show error message to the user
//     }
//   };

//   return (
//     <div className="w-full h-full overflow-auto flex justify-center items-center">
//       <div className="mt-20 mx-auto w-96 bg-white rounded-xl shadow-lg p-8 mb-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-6">Add Student</h1>
//         <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-6">
//           <form onSubmit={onSubmit} className="text-gray-800">
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Student Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
//             />

//             <label htmlFor="rollNum">Roll Number:</label>
//             <input
//               type="number"
//               id="rollNum"
//               placeholder="Roll No."
//               value={rollNum}
//               onChange={(e) => setRollNum(e.target.value)}
//               className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
//             />

//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="*********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
//             />

//             <label htmlFor="className">Class:</label>
//             <select
//               id="className"
//               value={sclassName}
//               onChange={(e) => setsclassName(e.target.value)}
//               className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             >
//               <option value={null}>Select a class</option>
//               {classes.map((classItem) => (
//                 <option key={classItem._id} value={classItem._id}>
//                   {classItem.sclassName}
//                 </option>
//               ))}
//             </select>

//             <button
//               type="submit"
//               className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 focus:outline-none"
//             >
//               Add Student
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddStudentForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [rollNum, setRollNum] = useState("");
  const [sclassName, setsclassName] = useState("");
  const [password, setPassword] = useState("");
  const [classes, setClasses] = useState([]);
  const id = localStorage.getItem("_id");

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

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/student-register",
        {
          name,
          rollNum,
          sclassName,
          password,
          adminID: id,
          role: "Student",
        }
      );
      alert(response.data.message);
      // Add success handling or navigation logic here
    } catch (error) {
      console.error("Error adding student:", error);
      // Add error handling logic, e.g., show error message to the user
    }
  };

  return (
    <div >
      <div className=" bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <h1 className="text-4xl font-bold text-white mb-6">Add Student</h1>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-6">
          <form onSubmit={onSubmit} className="text-white">
            <label
              htmlFor="name"
              className="block font-medium mb-2 text-gray-300"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />

            <label
              htmlFor="rollNum"
              className="block font-medium mb-2 text-gray-300"
            >
              Roll Number:
            </label>
            <input
              type="number"
              id="rollNum"
              placeholder="Roll No."
              value={rollNum}
              onChange={(e) => setRollNum(e.target.value)}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />

            <label
              htmlFor="password"
              className="block font-medium mb-2 text-gray-300"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 focus:outline-none rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />

            <label
              htmlFor="className"
              className="block font-medium mb-2 text-gray-300"
            >
              Class:
            </label>
            <select
              id="className"
              value={sclassName}
              onChange={(e) => setsclassName(e.target.value)}
              className="w-full bg-gray-700 text-white border-gray-600 p-2 mb-4 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
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
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 focus:outline-none mt-4"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStudentForm;
