// import { createSlice } from "@reduxjs/toolkit";

// const DEFAULT_STUDENTS = [
//   {
//     index: 1,
//     name: "John Doe",
//     rollNum: "1",
//   },
//   {
//     index: 2,
//     name: "John Doe",
//     rollNum: "2",
//   },
//   {
//     index: 3,
//     name: "John Doe",
//     rollNum: "3",
//   },
//   {
//     index: 4,
//     name: "John Doe",
//     rollNum: "4",
//   },
//   {
//     index: 5,
//     name: "John Doe",
//     rollNum: "5",
//   },
//   {
//     index: 6,
//     name: "John Doe",
//     rollNum: "6",
//   },
// ];

// export const studentsSlice = createSlice({
//   name: "students",
//   initialState: [],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload);
//     },
//     remove: (state, action) => {
//       return state.filter((student) => student.index !== action.payload);
//     },
//     edit: (state,action) => {
//       return state;
//     },
//     fatch: (state , action) => {
//       const id = localStorage.getItem("_id");
//       const fetchData = async () => {
//             try {
//               // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
//               const response = await axios.get(
//                 `http://localhost:3000/get-Students/${id}`,
//                 {}
//               );
//               // Assuming your API response has the data you want in response.data
//               //setStudent(response.data);
//               initialize(response.data)

//             } catch (error) {
//               console.error("Error fetching data:", error);
//             }
//           };

//           fetchData();
//     },

//     initialize: (state,action) => {
//       return state = action.payload;
//     }
//   },
// });

// export const {add, remove , fatch }= studentsSlice.actions;
// export default studentsSlice.reducer

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((student) => student._id !== action.payload);
    },
    edit: (state, action) => {
      const index = state.findIndex(
        (student) => student._id === action.payload._id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    initialize: (state, action) => {
      return action.payload;
    },
  },
});

export const fetchStudents = () => async (dispatch) => {
  const id = localStorage.getItem("_id");
  try {
    const response = await axios.get(
      `http://localhost:3000/get-students/${id}`
    );
    dispatch(initialize(response.data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const { add, remove, edit, initialize } = studentsSlice.actions;
export default studentsSlice.reducer;
