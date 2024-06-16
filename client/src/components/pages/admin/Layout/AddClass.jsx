import React, { useState } from "react";
import axios from "axios";
import classImg from "../../../../../public/class.svg";

const AddClass = () => {
  const [sclassName, setSclassName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setSclassName(e.target.value);
  };

  const handleButton1CreateClass = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/add-class", {
        sclassName,
        adminID: localStorage.getItem("_id"),
      })
      .then((response) => {
        setMessage(response.data.message || "Class added successfully");
        setSclassName("");
      })
      .catch((error) => {
        setMessage("Error adding class");
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-gray-900 p-8 rounded shadow  ">
        <img src={classImg} alt="Class Image" />
      </div>
      <div className="flex justify-center items-center ">
        <div className=" p-4 rounded shadow ">
          <input
            type="text"
            placeholder="Enter class name"
            value={sclassName}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleButton1CreateClass}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Create Class
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </>
  );
};

export default AddClass;
