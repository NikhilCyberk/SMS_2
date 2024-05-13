import express from "express";
import bcryt from "bcrypt";
const router = express.Router();
import { Admin } from "../models/adminModel.js";
import {
  adminRegister,
  adminLogin,
  verifyUser,
  getAdminDetail,
} from "../controller/adminController.js";
import {
  adminAddClass,
  deleteSclass,
  deleteSclasses,
  getSclassStudents,
  sclassList,
} from "../controller/classController.js";
import {
  StudentRegister,
  clearAllStudentsAttendance,
  clearAllStudentsAttendanceBySubject,
  deleteStudent,
  deleteStudents,
  deleteStudentsByClass,
  getStudentDetail,
  getStudents,
  removeStudentAttendance,
  removeStudentAttendanceBySubject,
  studentAttendance,
  studentLogIn,
  updateExamResult,
  updateStudent,
} from "../controller/studentController.js";
import jwt from "jsonwebtoken";
import nodemailwer from "nodemailer";
import {
  allSubjects,
  classSubjects,
  deleteSubject,
  deleteSubjects,
  deleteSubjectsByClass,
  freeSubjectList,
  subjectCreate,
} from "../controller/subjectController.js";
import {
  deleteNotice,
  deleteNotices,
  noticeCreate,
  noticeList,
  updateNotice,
} from "../controller/noticeController.js";
import {
  deleteTeacher,
  deleteTeachers,
  deleteTeachersByClass,
  getTeacherDetail,
  getTeachers,
  teacherAttendance,
  teacherLogIn,
  teacherRegister,
  updateTeacherSubject,
} from "../controller/teacherCotroller.js";
import { complainCreate, complainList } from "../controller/complainController.js";

// router.get("*", (req, res) => {
//   return res.json({ message: "404: page not found" });
// });

// Admin
router.post("/auth/signup", adminRegister);
router.post("/auth/login", adminLogin);
router.get("/admin/:id", getAdminDetail);

// Teacher
router.post("/teacher-reg", teacherRegister);
router.post("/teacher-login", teacherLogIn);
router.get("/teachers/:id", getTeachers);
router.get("/teacher/:id", getTeacherDetail);
router.delete("/teachers/:id", deleteTeachers);
router.delete("/teachers-class/:id", deleteTeachersByClass);
router.delete("/teacher/:id", deleteTeacher);
router.put("/teacher-subject", updateTeacherSubject);
router.post("/teacher-attendance/:id", teacherAttendance);

//student
router.post("/student-register", StudentRegister); //check
router.post("/student-login", studentLogIn); //check
router.get("/get-students/:id", getStudents); //check
router.get("/get-student-detail/:id", getStudentDetail); //error
router.delete("/students/:id", deleteStudents);
router.delete("/students-class/:id", deleteStudentsByClass);
router.delete("/student/:id", deleteStudent);
router.put("/student/:id", updateStudent);
router.put("/update-exam-result/:id", updateExamResult);
router.put("/student-attendance/:id", studentAttendance);
router.put(
  "/remove-all-students-sub-atten/:id",
  clearAllStudentsAttendanceBySubject
);
router.put("/remove-all-students-atten/:id", clearAllStudentsAttendance);
router.put("/remove-student-sub-atten/:id", removeStudentAttendanceBySubject);
router.put("/remove-student-atten/:id", removeStudentAttendance);

// router.post("/add-teacher", adminAddTeacher);

//class
router.post("/add-class", adminAddClass); //check
router.get("/get-class/:id", sclassList); //check
router.get("/class/Students/:id", getSclassStudents);
router.delete("/sclasses/:id", deleteSclasses);
router.delete("/sclass/:id", deleteSclass);

//subject
router.post("/subject-create", subjectCreate); //checked
router.get("/all-subjects/:id", allSubjects); //checked
router.get("/class-subjects/:id", classSubjects); //checked
router.get("/free-subject-list/:id", freeSubjectList);
router.delete("/Subject/:id", deleteSubject);
router.delete("/Subjects/:id", deleteSubjects);
router.delete("/SubjectsClass/:id", deleteSubjectsByClass);

// Complain

router.post("/complain-create", complainCreate);
router.get("/complain-list/:id", complainList);

// Notice

router.post("/notice-create", noticeCreate);
router.get("/notice-list/:id", noticeList);
router.delete("/notices/:id", deleteNotices);
router.delete("/notice/:id", deleteNotice);
router.put("/notice/:id", updateNotice);






// router.post("/admin/add-student", adminAddStuudent);

// const verifyUser = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) {
//       return res.json({ status: false, message: "no Token" });
//     }
//     const decoded = await jwt.verify(token, process.env.KEY);
//     console.log(decoded);
//     next();
//   } catch (err) {
//     return res.json(err);
//   }
// };

// router.post("/signup", async (req, res) => {
//   let { name, email, password, schoolName } = req.body;
//   const userAdmin = await Admin.findOne({ email });
//   console.log(userAdmin);
//   if (userAdmin) {
//     return res.status(400).send({ message: "user already exists" });
//   }

//   const hashPassword = await bcryt.hash(password, 10);
//   const newAdmin = new Admin({
//     name,
//     email,
//     password: hashPassword,
//     schoolName,
//   });

//   await newAdmin.save();
//   return res.json({
//     status: true,
//     message: "User saved successfully",
//   });
// });

// router.post("/login", async (req, res) => {
//   let { email, password } = req.body;
//   const user = await User.findOne({ email });
//   console.log("post /login");
//   console.log(req.body);
//   if (!user) {
//     return res.json({ message: "user not found" });
//   }

//   const validPassword = await bcryt.compare(password, user.password);
//   if (!validPassword) {
//     return res.json({
//       message: "password is incorrect",
//     });
//   }

//   const token = jwt.sign({ username: user.username }, process.env.KEY, {
//     expiresIn: "1h",
//   });
//   console.log(token);
//   res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
//   return res.json({
//     status: true,
//     message: "login successfully",
//     email: email,
//     token: token,
//   });
// });

// router.post("/forgot-password", async (req, res) => {
//   const { email } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ message: "user not found" });
//     }

//     var nodemailer = require("nodemailer");
//     const token = jwt.sign({ id: user._id }, process.env.KEY, {
//       expiresIn: "5m",
//     });
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "youremail@gmail.com",
//         pass: "yourpassword",
//       },
//     });

//     var mailOptions = {
//       from: "youremail@gmail.com",
//       to: "myfriend@yahoo.com",
//       subject: "Reset Password",
//       text: `http://localhost:5173/resetPassword/${token}`,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         return res.json({ message: "error email sending" });
//       } else {
//         return res.json({ status: true, message: "email sent" });
//       }
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });

// router.post("/resetPassword/:token", async (res, req) => {
//   const token = req.param.body;
//   const password = req.body;
//   try {
//     const decoded = await jwt.verify(token, process.env.KEY);
//     const id = decoded.id;
//     const hashPassword = await bcryt.hash(password, 10);
//     await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
//     res.json({ status: true, message: "password changed successfully" });
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/verify", verifyUser, (req, res) => {
  //   console.log("verify");
  res.json({ status: true, message: "authenticated" });
});

// router.get("/getUsername", verifyUser, async (req, res) => {
//   // Access the authenticated user's information from req.user
//   // const { username } = req.body;
//   console.log("getusername");
//   // const user = await User.findOne({ email: req.user.email });
//   console.log(req.params);
//   // res.json({ username });
// });

export { router as UserRouter };
