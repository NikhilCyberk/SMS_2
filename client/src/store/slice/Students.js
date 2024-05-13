import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_STUDENTS = [
  {
    index: 1,
    name: "John Doe",
    rollNum: "1",
  },
  {
    index: 2,
    name: "John Doe",
    rollNum: "2",
  },
  {
    index: 3,
    name: "John Doe",
    rollNum: "3",
  },
  {
    index: 4,
    name: "John Doe",
    rollNum: "4",
  },
  {
    index: 5,
    name: "John Doe",
    rollNum: "5",
  },
  {
    index: 6,
    name: "John Doe",
    rollNum: "6",
  },
];

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((student) => student.index !== action.payload);
    },
    edit: (state,action) => {
      return state;
    },
    fatch: (state , action) => {
      const id = localStorage.getItem("_id");
      const fetchData = async () => {
            try {
              // Replace 'YOUR_NODE_SERVER_URL' with the actual URL of your Node.js server
              const response = await axios.get(
                `http://localhost:3000/get-Students/${id}`,
                {}
              );
              // Assuming your API response has the data you want in response.data
              //setStudent(response.data);
              initialize(response.data)
              // console.log(response.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          
          fetchData();
    },

    initialize: (state,action) => {
      return state = action.payload;
    }
  },
});

export const {add, remove , fatch }= studentsSlice.actions;
export default studentsSlice.reducer
