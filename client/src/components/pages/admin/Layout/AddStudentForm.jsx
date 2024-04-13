import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {add} from '../../../../store/slice/Students'

const AddStudentForm = () => {
  // const [name, setName] = useState("");
  // const [rollNum, setRollNum] = useState("");
  // const [className, setClassName] = useState("");
  // const [password, setPassword] = useState("");
  const [classes, setClasses] = useState([]);
  const id = localStorage.getItem("_id");

  const name = useRef("");
  const rollNum =useRef("");;
  const className = useRef("");
  const password = useRef("");



  useEffect(() => {
    // Fetch classes from the database
    axios
      .get(`http://localhost:3000/get-class/${id}`)
      .then((response) => {
        // console.log(response.data);
        setClasses(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/admin/add-student", {
  //       name: name,
  //       rollNum: rollNum,
  //       sclassName: className,
  //       password: password,
  //       adminID: id,
  //       role: "Student",
  //     })
  //     .then((response) => {
  //       if (response.status) {
  //         // console.log(response);
  //         confirm(response.data.message);
  //         // navigate("/login");
  //       }
  //       // console.log(response);
  //     })
  //     .catch((error) => {
  //       confirm(error);
  //     });
  // };

  const onSubmit = ()=>{
    add({
      index: 43,
      name: name,
      rollNum: rollNum,
    },)
    // console.log("add student sucsees");
    // console.log({
    //   index: 43,
    //   name: name,
    //   rollNum: rollNum,
    // });
  }

  return (
    <div className="w-full h-full overflow-auto flex justify-center items-center">
    <div className="mt-20 mx-auto w-96 bg-gradient-to-r from-gray-600 to-gray-500 rounded-xl shadow-lg p-8 mb-8">
      <h1 className="text-4xl font-bold text-white mb-6">Add Student</h1>
      <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-1 gap-6">
        <form onSubmit={()=>onSubmit()} className="text-gray-200">
          <label className="block">Name:</label>
          <input
            type="text"
            placeholder="Student Name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            ref={name}
            className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
          />

          <label className="block">Roll Number:</label>
          <input
            type="number"
            placeholder="Roll No."
            // value={rollNum}
            //onChange={(e) => setRollNum(e.target.value)}
            ref={rollNum}
            className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
          />

          <label className="block">Password:</label>
          <input
            type="password"
            placeholder="*********"
            // value={password}
            //onChange={(e) => setPassword(e.target.value)}
            ref={password}
            className="w-full bg-transparent border-b-2 border-white p-2 mb-4 focus:outline-none"
          />

          <label className="block">Class:</label>
          <select
            // value={className}
            // onChange={(e) => setClassName(e.target.value)}
            ref={className}
            className="w-full bg-transparent border-b-2 border-blue-500 p-2 mb-4 focus:outline-none"
          >
            {classes.map((classItem) => (
              <option key={classItem._id} value={classItem._id} className="text-black">
                {classItem.sclassName}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 focus:outline-none"
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
