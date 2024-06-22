import { Admin } from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "no Token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    console.log(decoded);
    next();
  } catch (err) {
    return res.json(err);
  }
};
export const adminRegister = async (req, res) => {
  try {
    // const admin = new Admin({
    //   ...req.body,
    // });

    let { name, email, password, schoolName } = req.body;

    const existingAdminByEmail = await Admin.findOne({ email: req.body.email });
    const existingSchool = await Admin.findOne({
      schoolName: req.body.schoolName,
    });

    console.log(existingAdminByEmail, existingSchool,55699887);

    if (existingAdminByEmail) {
      res.send({ message: "Email already exists " });
    } else if (existingSchool) {
      res.send({ message: "School name already exists" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({
        name,
        email,
        password: hashPassword,
        schoolName,
      });

      let result = await newAdmin.save();
      // console.log(result);
      // result.password = undefined;
      // res.send(result);

      return res.json({
        message: "User saved successfully You can now login",
        result,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const adminLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await Admin.findOne({ email }).maxTimeMS(30000);
    console.log(user, 4444444);
    console.log("post /login");
    console.log(req.body);
    if (!user) {
      return res.json({ message: "user not found" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({
        message: "password is incorrect",
      });
    }

    const token = jwt.sign({ username: user.username }, process.env.KEY, {
      expiresIn: "1h",
    });
    console.log(token);
    res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
    return res.json({
      status: true,
      message: "login successfully",
      email: email,
      token: token,
      user: user.name,
      schoolName: user.schoolName,
      role: user.role,
      _id: user._id,
    });
  } catch (err) {
    console.log(err, 253);
    res.status(500).json(err);
  }
};

export const getAdminDetail = async (req, res) => {
  try {
    let admin = await Admin.findById(req.params.id);
    if (admin) {
      admin.password = undefined;
      res.send(admin);
    } else {
      res.send({ message: "No admin found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// module.exports = { adminRegister };
