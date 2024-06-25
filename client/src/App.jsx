import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import './App.css'
import AdminLogin from "./components/pages/admin/AdminLogin";
import AdminSignup from "./components/pages/admin/AdminSignup";
import ForgotPassword from "./components/pages/admin/ForgotPassword";
import ResetPassword from "./components/pages/admin/ResetPassword";
import AdminDashboard from "./components/pages/admin/Layout/AdminDashboard";
import AdminLayout from "./components/pages/admin/Layout/AdminLayout";

import Homepage from "./components/pages/Homepage";
import ChooseUser from "./components/pages/ChooseUser";
import AdminProfile from "./components/pages/admin/AdminProfile";
import AddClass from "./components/pages/admin/Layout/AddClass";
import Topbar from "./components/bar/Topbar";

import ListClass from "./components/pages/admin/Layout/ListClass";

import AddStudentForm from "./components/pages/admin/Layout/AddStudentForm";
import ListStudent from "./components/pages/admin/Layout/ListStudent";
import AddSubject from "./components/pages/admin/Layout/AddSubject";

import SubjectList from "./components/pages/admin/SubjectList";
import TeacherLogin from "./components/pages/admin/TeacherLogin";
import StudentLogin from "./components/pages/admin/StudentLogin";
import AddTeacherForm from "./components/pages/admin/AddTeacherForm";
import ListTeacher from "./components/pages/admin/Layout/ListTeacher";
import ComplainComponent from "./components/pages/admin/ComplaintList";
import StudentListByClass from "./components/pages/admin/StudentListByClass";
import ComplaintList from "./components/pages/admin/ComplaintList";
import NoticeList from "./components/pages/admin/NoticeList";
import TeacherDetail from "./components/pages/admin/TeacherDetail";
import ClassDetails from "./components/pages/admin/Layout/ClassDetails";
import StudentDetails from "./components/pages/student/StudentDetails";
import SubjectDetails from "./components/pages/subject/SubjectDetails";
import TeacheDetails from "./components/pages/teacher/TeacheDetails";
import NotFound from "./NotFound";
import StudentDashBoard from "./components/pages/student/StudentDashBoard";
import TeacherDashboard from "./components/pages/teacher/TeacherDashboard";
import StudentSubjectDetails from "./components/pages/student/StudentSubjectDetails";
import StudentAttendance from "./components/pages/student/StudentAttendance";
import ComplaintForm from "./components/pages/admin/ComplaintForm";
import ClassStudentsDashboard from "./components/pages/teacher/ClassStudentsDashboard";
// import ProtectedRoute from "./ProtectedRoute";

function App() {
  const id = localStorage.getItem("_id");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const [loginStatus, setLoginStatus] = useState(false);
  const school_id = localStorage.getItem("school_id");

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="/chooseuser" element={<ChooseUser />} />

      <Route path="/login" element={<AdminLogin />} />
      <Route path="/signup" element={<AdminSignup />} />

      <Route
        path="/st_login"
        element={<StudentLogin setLoginStatus={setLoginStatus} />}
      />
      <Route path="/t_login" element={<TeacherLogin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/* <Route path="admin-profile" element={<AdminProfile />} /> */}
        <Route path="admin-add-class" element={<AddClass />} />
        <Route
          path="admin-list-class/school____id/:school_id"
          element={<ListClass />}
        />
        <Route path="admin-add-student" element={<AddStudentForm />} />
        <Route
          path="list-student/school____id/:school_id"
          element={<ListStudent />}
        />
        <Route path="add-subject" element={<AddSubject />} />
        <Route path="admin-add-teacher" element={<AddTeacherForm />} />
        <Route path="list-subject/:id" element={<SubjectList id={id} />} />
        <Route path="list-teacher/:id" element={<ListTeacher id={id} />} />
        <Route path="list-complain/:id" element={<ComplaintList />} />
        <Route path="list-notice/:id" element={<NoticeList />} />
        <Route
          path="class-student/:classId/:className"
          element={<StudentListByClass />}
        />
        <Route
          path="class_name/:classes/class____id/:class_id/:type"
          element={<ClassDetails />}
        />
        <Route
          path="student/class____id/:class_id/student____id/:student_id/:type"
          element={<StudentDetails />}
        />
        <Route
          path="subject/subject___id/:subject_id/:type"
          element={<SubjectDetails />}
        />
        <Route
          path="teacher/teacher___id/:teacher_id/:type"
          element={<TeacheDetails />}
        />

        <Route path="list-teacher/:id/:teacherId" element={<TeacherDetail />} />
      </Route>

      <Route path="/student" element={<AdminLayout role={role} />}>
        <Route index element={<StudentDashBoard />} />
        <Route
          path="student-subjects/class____id/:class_id"
          element={<StudentSubjectDetails />}
        />
        <Route path="student-attendance" element={<StudentAttendance />} />
        <Route
          path="student-complaints"
          element={<ComplaintForm id={school_id} />}
        />
      </Route>

      <Route path="/teacher" element={<AdminLayout />}>
        <Route index element={<TeacherDashboard />} />
        <Route
          path="class/students/class____id/:class_id"
          element={<ClassStudentsDashboard />}
        />
      </Route>
    </Routes>
  );
}

export default App;
