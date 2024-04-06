import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListStudent = () => {
  const [students, setStudent] = useState([]);

  const id = localStorage.getItem("_id");
  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
        const response = await axios.get(
          `http://localhost:3000/get-Students/${id}`,
          {}
        );
        // Assuming your API response has the data you want in response.data
        setStudent(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  const s = [
    {
      index: 1,
      name: "John Doe",
      rollNum: "12345",
    },
    {
      index: 2,
      name: "John Doe",
      rollNum: "12345",
    },
    {
      index: 3,
      name: "John Doe",
      rollNum: "12345",
    }
  ]

  return (
    <>
      <div className="w-full h-full p-5 overflow-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Student List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.length > 0 ? (
            students.map((student, index) => (
              <div className="bg-white rounded-lg shadow-lg p-6" key={index}>
                <h3 className="text-xl font-bold mb-4">Name: {student.name}</h3>
                <p className="text-gray-600">Roll Number: {student.rollNum}</p>
                <p className="text-gray-600">
                  Class: {student.sclassName.sclassName}
                  {/* class : 5 */}
                </p>
                <div className="flex justify-end mt-4 space-x-4">
                  <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                  // onClick={() => handleViewClass(classItem.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
                  // onClick={() => handleDeleteClass(classItem.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No classes found</p>
          )}
        </div>
      </div>
    </>
    // <div class="mt-12 ml-20 w-96 h-screen mx-auto bg-gradient-to-r from-purple-400 to-blue-500 rounded-xl shadow-2xl">
    //   <h1 class="text-3xl font-bold text-white p-5">Classes List</h1>
    //   <div class="flex flex-wrap justify-center items-center p-3">
    //     {classes.map((classItem) => (
    //       <div class="w-2/3 p-3" key={classItem.id}>
    //         <div class="bg-white rounded-lg shadow-lg p-4">
    //           <h3 class="text-xl font-bold text-gray-800">
    //             {classItem.sclassName}
    //           </h3>
    //           <p class="text-gray-600">Created At: {classItem.createdAt}</p>
    //           <p class="text-gray-600">Updated At: {classItem.updatedAt}</p>
    //           <div class="flex justify-between mt-3">
    //             <button
    //               class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300"
    //               onClick={() => handleViewClass(classItem.id)}
    //             >
    //               View
    //             </button>
    //             <button
    //               class="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
    //               onClick={() => handleDeleteClass(classItem.id)}
    //             >
    //               Delete
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ListStudent;
