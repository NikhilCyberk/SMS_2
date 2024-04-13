import { configureStore } from "@reduxjs/toolkit";
import { studentsSlice } from "./slice/Students";

export  const store = configureStore({
    reducer: {
        students: studentsSlice.reducer
    }
})