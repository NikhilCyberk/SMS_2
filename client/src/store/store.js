import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./slice/studentsSlice";

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
  },
});

export default store;
