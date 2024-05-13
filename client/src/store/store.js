import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./slice/Students";

const store = configureStore({
  reducer: {
    students: studentsSlice.reducer,
  },
});

export default store;
