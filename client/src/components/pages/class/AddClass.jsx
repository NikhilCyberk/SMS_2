import React, { useState } from "react";
import axios from "axios";

const AddClass = () => {
  const [sclassName, setSclassName] = useState("");

  const handleInputChange = (e) => {
    setSclassName(e.target.value);
  };

  const handleButton1CreateClass = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-class", {
        sclassName,
        adminID: localStorage.getItem("_id"),
        // localStorage.getItem("schoolName")
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // Logic for the first button
    console.log("Button 1 clicked");
  };

  const handleButton2Click = () => {
    // Logic for the second button
    console.log("Button 2 clicked");
  };

  return (
    // <>
    //   <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 via-blue-200- to-blue-300">
    //     <input
    //       type="text"
    //       placeholder="Enter class name"
    //       value={sclassName}
    //       onChange={handleInputChange}
    //       className="border border-gray-300 p-4 mb-6 rounded-md focus:outline-none focus:border-blue-500 text-xl bg-white text-gray-800"
    //     />
    //     <div className="flex gap-8">
    //       <button
    //         onClick={handleButton1CreateClass}
    //         className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md focus:outline-none transition-all duration-300"
    //       >
    //         Create Class
    //       </button>
    //       <button
    //         onClick={handleButton2Click}
    //         className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md focus:outline-none transition-all duration-300"
    //       >
    //         Cancel
    //       </button>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300">
        <input
          type="text"
          placeholder="Enter class name"
          value={sclassName}
          onChange={handleInputChange}
          className="border border-gray-300 p-4 mb-6 rounded-md focus:outline-none focus:border-blue-500 text-xl bg-white text-gray-800 shadow-md"
        />
        <div className="flex gap-8">
          <button
            onClick={handleButton1CreateClass}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md focus:outline-none transition-all duration-300 shadow-md"
          >
            Create Class
          </button>
          <button
            onClick={handleButton2Click}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-md focus:outline-none transition-all duration-300 shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default AddClass;
