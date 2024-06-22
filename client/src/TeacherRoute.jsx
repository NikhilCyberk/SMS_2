import React from "react";
import { Routes, Route } from "react-router-dom";

const TeacherRoute = () => {
  return (
    <Routes>
      <Route path="/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherDashboard />} />
      </Route>
    </Routes>
  );
};

export default TeacherRoute;
