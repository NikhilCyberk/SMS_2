import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ListClass = () => {
  const [classes, setClasses] = useState([]);

  const id = localStorage.getItem("_id");
  console.log(id);
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

  return (
    <>
      <div class="ml-[16rem] w-[100rem] h-screen mx-auto bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <h1 class="text-4xl font-bold text-white mb-6">Classes List</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
          {classes.length > 0 ? (
            classes.map((classItem) => (
              <div
                class="bg-white rounded-lg shadow-lg p-6 bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
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
      </div>
    </>

    // <>
    //   <div className="mt-10 mx-auto w-96 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-lg p-8 mb-8">
    //     <h1 className="text-4xl font-bold text-white mb-6">Classes List</h1>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {classes.length > 0 ? (
    //         classes.map((classItem) => (
    //           <div
    //             className="bg-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
    //             key={classItem.id}
    //           >
    //             <h3 className="text-2xl font-bold mb-4">
    //               {classItem.sclassName}
    //             </h3>
    //             <p className="text-gray-600">
    //               Created At: {classItem.createdAt}
    //             </p>
    //             <p className="text-gray-600">
    //               Updated At: {classItem.updatedAt}
    //             </p>
    //             <div className="flex justify-end mt-4 space-x-4">
    //               <button
    //                 className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300"
    //                 onClick={() => handleViewClass(classItem.id)}
    //               >
    //                 View
    //               </button>
    //               <button
    //                 className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-all duration-300"
    //                 onClick={() => handleDeleteClass(classItem.id)}
    //               >
    //                 Delete
    //               </button>
    //             </div>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="text-white">No classes found</p>
    //       )}
    //     </div>
    //   </div>
    // </>
  );
};

export default ListClass;
