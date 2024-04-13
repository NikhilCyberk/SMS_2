import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {remove , fatch} from '../../../../store/slice/Students'

const ListStudent = () => {

  const s = useSelector((state) => state.students);
  const dispatch = useDispatch();

  //const [students, setStudent] = useState([]);

  // const id = localStorage.getItem("_id");
  //  console.log(id);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
  //       const response = await axios.get(
  //         `http://localhost:3000/get-Students/${id}`,
  //         {}
  //       );
  //       // Assuming your API response has the data you want in response.data
  //       setStudent(response.data);
  //       // console.log(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  useEffect(()=> {
    fatch();
  },[]);


  return (
    <>
      <div className="w-full h-full mx-auto shadow-lg p-8 overflow-auto border-2 border-gray-950">
        <h1 className="text-4xl font-bold text-blue-500 mb-6">Student List</h1>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Roll Number</th>
              <th className="px-4 py-2">className</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {s.length > 0 ? (
              s.map((student, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.rollNum}</td>
                  <td className="border px-4 py-2">{/*{student.sclassName.sclassName}*/} className 6</td>
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
                         onClick={() => dispatch(remove(student.index))}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      // onClick={() => dispatch(remove(index))}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <p>No students found</p>
            )}
          </tbody>
        </table>
      </div>

    </>

  );
};

export default ListStudent;
