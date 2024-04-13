import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListClass = () => {
  const [classes, setClasses] = useState([]);

  const id = localStorage.getItem("_id");
  // console.log(id);

  const handleViewClass = (classId) => {
    console.log({ classId });
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
        const response = await axios.get(
          `http://localhost:3000/get-class/${id}`,
          {}
        );
        // Assuming your API response has the data you want in response.data
        setClasses(response.data);
        // console.log(classes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  const data = [
    { id: 1, name: 'Component 1', description: 'Description 1' },
    { id: 2, name: 'Component 2', description: 'Description 2' },
    { id: 3, name: 'Component 3', description: 'Description 3' },
    { id: 1, name: 'Component 1', description: 'Description 1' },
    { id: 2, name: 'Component 2', description: 'Description 2' },
    { id: 3, name: 'Component 3', description: 'Description 3' },
    { id: 1, name: 'Component 1', description: 'Description 1' },
    { id: 2, name: 'Component 2', description: 'Description 2' },
    { id: 3, name: 'Component 3', description: 'Description 3' },
    { id: 1, name: 'Component 1', description: 'Description 1' },
    { id: 2, name: 'Component 2', description: 'Description 2' },
    { id: 3, name: 'Component 3', description: 'Description 3' },
    { id: 1, name: 'Component 1', description: 'Description 1' },
    { id: 2, name: 'Component 2', description: 'Description 2' },
    { id: 3, name: 'Component 3', description: 'Description 3' },
  ];

  return (
    <>
      {/* <div class=" w-full h-full mx-auto shadow-lg p-8 overflow-auto">
        <h1 class="text-4xl font-bold text-blue-500 mb-6">Classes List</h1>
        <div class="flex flex-wrap gap-5 ">
          {classes.length > 0 ? (
            classes.map((classItem) => (
              <div
                class="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 min-w-[250px] max-w-[300px]  max-h-[250px] m-6"
                key={classItem.id}
              >
                <h3 class="text-xl font-bold mb-4">{classItem.sclassName}</h3>
                <p class="text-gray-600">Created At: {classItem.createdAt}</p>
                <p class="text-gray-600">Updated At: {classItem.updatedAt}</p>
                <div class="flex justify-end mt-4 space-x-4">
                  <button
                    class="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
                    onClick={() => handleViewClass(classItem.id)}
                  >
                    View
                  </button>
                  <button
                    class="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
                    onClick={() => handleDeleteClass(classItem.id)}
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
      </div> */}



      <div className="w-full h-full mx-auto shadow-lg p-8 overflow-auto border-2 border-gray-950">
        <h1 class="text-4xl font-bold text-blue-500 mb-6">Classes List</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.length > 0 ? (
              classes.map((classItem, index) => (
              <tr key={classItem.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="border px-4 py-2">{classItem.sclassName}</td>
                <td className="border px-4 py-2">{classItem.createdAt + " " + classItem.updatedAt}</td>
                <td className="border px-4 py-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  //   onClick={() => handleViewClass(classItem.id)}
                  >
                    View
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                  //   onClick={() => handleDeleteClass(classItem.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  //   onClick={() => onDelete(index)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p>No classes found</p>
          )}
          </tbody>
        </table>
      </div>
    </>

  );
};

export default ListClass;
