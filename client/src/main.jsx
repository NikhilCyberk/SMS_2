import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AdminLogin from "./components/pages/admin/AdminLogin";
import AdminSignup from "./components/pages/admin/AdminSignup";
import ForgotPassword from "./components/pages/admin/ForgotPassword";
import ResetPassword from "./components/pages/admin/ResetPassword";
import AdminDashboard from "./components/pages/admin/Layout/AdminDashboard";

import Homepage from "./components/pages/Homepage";
import ChooseUser from "./components/pages/ChooseUser";
import AdminProfile from "./components/pages/admin/AdminProfile";
import AddClass from "./components/pages/admin/Layout/AddClass";

import ListClass from "./components/pages/admin/Layout/ListClass";

import AddStudentForm from "./components/pages/admin/Layout/AddStudentForm";
import ListStudent from "./components/pages/admin/Layout/ListStudent";
import AdminLayout from "./components/pages/admin/Layout/AdminLayout";
import Authorization from "./components/pages/admin/Authorization";
import AuthorizationContainer from "./components/pages/admin/AuthorizationContainer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/chooseuser",
    element: <ChooseUser />
  },
  {
    path: "/authorization",
    element: <Authorization />,
    children: [
      {
        path: "",
        element: <AuthorizationContainer />
      },
      {
        path: "login",
        element: <AdminLogin />
      },
      {
        path: "signup",
        element: <AdminSignup />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "resetPassword/:token",
        element: <ResetPassword />
      },
    ]
  },
  
  {
    path: "/admin-dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <AdminDashboard />
      },
      {
        path: "admin-add-class",
        element: <AddClass />
      },
      {
        path: "admin-list-class/:id",
        element: <ListClass />
      },
      {
        path: "admin-add-student",
        element: <AddStudentForm />
      },
      {
        path: "admin-list-student",
        element: <ListStudent />
      },
      
    ]
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
