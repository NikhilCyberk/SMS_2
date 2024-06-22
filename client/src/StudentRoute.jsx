import React from "react";
import StudentDashBoard from "./components/pages/student/StudentDashBoard";
import AdminLayout from "./components/pages/admin/Layout/AdminLayout";
import { Route, Routes } from "react-router-dom";

const StudentRoute = () => {
  //   const ProtectedRoute = ({ children }) => {

  return (
    <Routes>
      <Route path="/student" element={<AdminLayout role={role} />}>
        <Route index element={<StudentDashBoard />} />
      </Route>
    </Routes>
  );
};

export default StudentRoute;
