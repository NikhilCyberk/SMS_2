import express from "express";
import bcryt from "bcrypt";
const router = express.Router();
import { Admin } from "../models/adminModel.js";
import {
  adminRegister,
  adminLogin,
  verifyUser,
} from "../controller/adminController.js";
import { adminAddClass, sclassList } from "../controller/classController.js";
import {
  adminAddStuudent,
  getStudents,
} from "../controller/studentController.js";
import jwt from "jsonwebtoken";
import nodemailwer from "nodemailer";

router.post("/admin/add-student", adminAddStuudent);

router.get("", (req, res) => {
  return res.json({ message: "hello from server" });
});

// Admin
router.post("/auth/signup", adminRegister);
router.post("/auth/login", adminLogin);
// router.post("/add-teacher", adminAddTeacher);
router.post("/add-class", adminAddClass);

router.get("/get-class/:id", sclassList);

router.get("/get-Students/:id", getStudents);

// router.post("/admin/add-stuudent", adminAddStuudent);

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

// router.get("/verify", verifyUser, (req, res) => {
//   //   console.log("verify");
//   res.json({ status: true, message: "authenticated" });
// });

// router.get("/getUsername", verifyUser, async (req, res) => {
//   // Access the authenticated user's information from req.user
//   // const { username } = req.body;
//   console.log("getusername");
//   // const user = await User.findOne({ email: req.user.email });
//   console.log(req.params);
//   // res.json({ username });
// });

export { router as UserRouter };
