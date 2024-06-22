import { Student } from "../models/studentSchema.js";
import { Admin } from "../models/adminModel.js";
import { Sclass } from "../models/sclassSchema.js";
import { Subject } from "../models/subjectSchema.js";

import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const StudentRegister = async (req, res) => {
  console.log(req.body, 154154154);
  try {
    // Validate incoming data (e.g., check required fields)

    const { adminID, password, rollNum, sclassName, name } = req.body;

    console.log(adminID, password, rollNum, sclassName, name, 4654646);

    // Check if the student already exists
    const existingStudent = await Student.findOne({
      rollNum,
      school: adminID,
      sclassName: sclassName,
    });

    if (existingStudent) {
      return res.status(400).json({ message: "Roll Number already exists" });
    }

    // Hash the password
    const hashPassword = await bcrypt.hash(password, 10);
    // Create a new student instance
    const newStudent = new Student({
      school: adminID,
      password: hashPassword,
      rollNum,
      sclassName,
      name,
    });

    // Save the new student to the database
    const result = await newStudent.save();

    res
      .status(201)
      .json({ message: "Student added successfully", student: result });
  } catch (error) {
    console.error("Error adding student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const studentLogIn = async (req, res) => {
  console.log(req.body, 154154154);
  try {
    let student = await Student.findOne({
      rollNum: req.body.rollNum,
      name: req.body.studentName,
    });
    if (student) {
      const validated = await bcrypt.compare(
        req.body.password,
        student.password
      );
      if (validated) {
        // console.log(student, 5544466);
        student = await student.populate("school", "schoolName");
        student = await student.populate("sclassName", "sclassName");
        student.password = undefined;
        student.examResult = undefined;
        student.attendance = undefined;
        res.send(student);
      } else {
        res.send({ message: "Invalid password" });
      }
    } else {
      res.send({ message: "Student not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// let result = await student.save();
// return res.send(result);

// return res.json({ message: "hello from server" });
// try {
// const salt = await bcrypt.genSalt(10);
// const hashedPass = await bcrypt.hash(req.body.password, salt);
//   const existingStudent = await Student.findOne({
//     rollNum: req.body.rollNum,
//     school: req.body.adminID,
//     sclassName: req.body.sclassName,
//   });
//   if (existingStudent) {
//     res.send({ message: "Roll Number already exists" });
// //   } else {
// const student = new Student({
//   ...req.body,
//   school: req.body.adminID,
//   // password: hashedPass,
//   password:req.body.password ,
// });
// let result = await student.save();
// result.password = undefined;
// res.send(result);
// //   }
// } catch (err) {
//   res.status(500).json(err);
// }

export const getStudents = async (req, res) => {
  try {
    let students = await Student.find({ school: req.params.id })
      .populate("sclassName")
      .populate("school");
    if (students.length > 0) {
      let modifiedStudents = students.map((student) => {
        return { ...student._doc, password: undefined };
      });
      res.status(200).send(modifiedStudents);
      // res.send(students);
    } else {
      res.status(201).send({ message: "No students found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export const getStudentDetail = async (req, res) => {
  try {
    // console.log(req.params.id, 200);
    let student = await Student.findById(req.params.id)
      .populate("school", "schoolName")
      .populate("sclassName", "sclassName")
      .populate("examResult.subName", "subName")
      .populate("attendance.subName", "subName sessions");

    if (student) {
      console.log(student, 656565);
      student.password = undefined;
      return res.json(student);
    } else {
      return res.json({ message: "No student found" });
    }
  } catch (err) {
    console.log(err, 300);
    return res.status(500).json(err);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500).json(err);
  }
};

export const deleteStudents = async (req, res) => {
  try {
    const result = await Student.deleteMany({ school: req.params.id });
    if (result.deletedCount === 0) {
      res.send({ message: "No students found to delete" });
    } else {
      res.send(result);
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

export const deleteStudentsByClass = async (req, res) => {
  try {
    const result = await Student.deleteMany({ sclassName: req.params.id });
    if (result.deletedCount === 0) {
      res.send({ message: "No students found to delete" });
    } else {
      res.send(result);
    }
  } catch (error) {
    res.status(500).json(err);
  }
};

export const updateStudent = async (req, res) => {
  console.log(req.body, 400);
  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      res.body.password = await bcrypt.hash(res.body.password, salt);
    }
    let result = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    result.password = undefined;
    res.send(result);
  } catch (error) {
    console.log(error, 500);
    res.status(500).json(error);
  }
};

export const updateExamResult = async (req, res) => {
  const { subName, marksObtained } = req.body;

  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.send({ message: "Student not found" });
    }

    const existingResult = student.examResult.find(
      (result) => result.subName.toString() === subName
    );

    if (existingResult) {
      existingResult.marksObtained = marksObtained;
    } else {
      student.examResult.push({ subName, marksObtained });
    }

    const result = await student.save();
    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const studentAttendance = async (req, res) => {
  const { subName, status, date } = req.body;

  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.send({ message: "Student not found" });
    }

    const subject = await Subject.findById(subName);

    const existingAttendance = student.attendance.find(
      (a) =>
        a.date.toDateString() === new Date(date).toDateString() &&
        a.subName.toString() === subName
    );

    if (existingAttendance) {
      existingAttendance.status = status;
    } else {
      // Check if the student has already attended the maximum number of sessions
      const attendedSessions = student.attendance.filter(
        (a) => a.subName.toString() === subName
      ).length;

      if (attendedSessions >= subject.sessions) {
        return res.send({ message: "Maximum attendance limit reached" });
      }

      student.attendance.push({ date, status, subName });
    }

    const result = await student.save();
    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const clearAllStudentsAttendanceBySubject = async (req, res) => {
  const subName = req.params.id;

  try {
    const result = await Student.updateMany(
      { "attendance.subName": subName },
      { $pull: { attendance: { subName } } }
    );
    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const clearAllStudentsAttendance = async (req, res) => {
  const schoolId = req.params.id;

  try {
    const result = await Student.updateMany(
      { school: schoolId },
      { $set: { attendance: [] } }
    );

    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const removeStudentAttendanceBySubject = async (req, res) => {
  const studentId = req.params.id;
  const subName = req.body.subId;

  try {
    const result = await Student.updateOne(
      { _id: studentId },
      { $pull: { attendance: { subName: subName } } }
    );

    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const removeStudentAttendance = async (req, res) => {
  const studentId = req.params.id;

  try {
    const result = await Student.updateOne(
      { _id: studentId },
      { $set: { attendance: [] } }
    );

    return res.send(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
