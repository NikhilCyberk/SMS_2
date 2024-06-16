import bcrypt from "bcrypt";
import { Subject } from "../models/subjectSchema.js";
import { Student } from "../models/studentSchema.js";
import { Teacher } from "../models/teacherSchema.js";
import { isValidObjectId } from "mongoose";
import { faker } from "@faker-js/faker";

export const subjectCreate = async (req, res) => {
  try {
    console.log(req.body, 223232323);
    const subjects = req.body.subjects.map((subject) => ({
      subName: subject.subName,
      subCode: subject.subCode,
      sessions: subject.sessions,
    }));

    const existingSubjectBySubCode = await Subject.findOne({
      "subjects.subCode": subjects[0].subCode,
      school: req.body.adminID,
    });

    if (existingSubjectBySubCode) {
      return res.status(400).json({ message: "Subcode must be unique." });
    } else {
      const newSubjects = subjects.map((subject) => ({
        ...subject,
        sclassName: req.body.sclassName,
        school: req.body.adminID,
      }));

      const result = await Subject.insertMany(newSubjects);
      res.send(result);
    }
  } catch (err) {
    console.log(err, 500);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const allSubjects = async (req, res) => {
  try {
    let subjects = await Subject.find({ school: req.params.id }).populate(
      "sclassName",
      "sclassName"
    );

    if (subjects.length > 0) {
      res.send(subjects);
    } else {
      res.status(201).send({ message: "No subjects found" });
    }
  } catch (err) {
    console.log(err, 500);
    res.status(500).json(err);
  }
};

export const classSubjects = async (req, res) => {
  
  try {
    let subjects = await Subject.find({ sclassName: req.params.id });
    if (subjects.length > 0) {
      res.send(subjects);
    } else {
      res.send({ message: "No subjects found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const freeSubjectList = async (req, res) => {
  try {
    let subjects = await Subject.find({
      sclassName: req.params.id,
      teacher: { $exists: false },
    });
    if (subjects.length > 0) {
      res.send(subjects);
    } else {
      res.send({ message: "No subjects found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteSubject = async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
    // Set the teachSubject field to null in teachers
    await Teacher.updateOne(
      { teachSubject: deletedSubject._id },
      { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
    );

    // Remove the objects containing the deleted subject from students' examResult array
    await Student.updateMany(
      {},
      { $pull: { examResult: { subName: deletedSubject._id } } }
    );

    // Remove the objects containing the deleted subject from students' attendance array
    await Student.updateMany(
      {},
      { $pull: { attendance: { subName: deletedSubject._id } } }
    );

    res.send(deletedSubject);
  } catch (error) {
    console.log(error, 908);
    res.status(500).json(error);
  }
};

export const deleteSubjects = async (req, res) => {
  try {
    const deletedSubjects = await Subject.deleteMany({ school: req.params.id });

    // Set the teachSubject field to null in teachers
    await Teacher.updateMany(
      { teachSubject: { $in: deletedSubjects.map((subject) => subject._id) } },
      { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
    );

    // Set examResult and attendance to null in all students
    await Student.updateMany(
      {},
      { $set: { examResult: null, attendance: null } }
    );

    res.send(deletedSubjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteSubjectsByClass = async (req, res) => {
  try {
    const deletedSubjects = await Subject.deleteMany({
      sclassName: req.params.id,
    });

    // Set the teachSubject field to null in teachers
    await Teacher.updateMany(
      { teachSubject: { $in: deletedSubjects.map((subject) => subject._id) } },
      { $unset: { teachSubject: "" }, $unset: { teachSubject: null } }
    );

    // Set examResult and attendance to null in all students
    await Student.updateMany(
      {},
      { $set: { examResult: null, attendance: null } }
    );

    res.send(deletedSubjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

// import mongoose from "mongoose";

// const generateRandomSubject = (sclassId, schoolId) => {
//   const subName = faker.word.words(2);
//   const subCode = faker.random.alphaNumeric(6);
//   const sessions = faker.helpers.arrayElement([
//     "Morning",
//     "Afternoon",
//     "Evening",
//   ]);

//   return {
//     subName,
//     subCode,
//     sessions,
//     sclassName: sclassId,
//     school: schoolId,
//     teacher: new mongoose.Types.ObjectId(),
//   };
// };

// const generateRandomData = async (numSubjects) => {
//   const sclassIds = [
//     "661ab7b02656357ab25110d7",
//     "661ac6f48e6c8a2203622ce0",
//     "661ac6f88e6c8a2203622ce3",
//     "661ac6fb8e6c8a2203622ce6",
//     "661ac6fd8e6c8a2203622ce9",
//     "661ac7018e6c8a2203622cec",
//     "661ac7048e6c8a2203622cef",
//     "661ac7078e6c8a2203622cf2",
//     "661ac70e8e6c8a2203622cf5",
//     "661ac7128e6c8a2203622cf8",
//     "661ac7178e6c8a2203622cfb",
//     "661ac71a8e6c8a2203622cfe",
//     "663f3f4a5c4ff20d442c285a",
//   ];
//   const schoolId = "661ab6e0752e60e4fa24cbde";

//   const subjects = [];

//   for (let i = 0; i < numSubjects; i++) {
//     const sclassId = faker.helpers.arrayElement(sclassIds);
//     const subject = generateRandomSubject(sclassId, schoolId);
//     subjects.push(subject);
//   }

//   return subjects;
// };

// // Usage
// generateRandomData(10)
//   .then((subjects) => {
//     console.log("Generated Subjects:", subjects);
//   })
//   .catch((err) => {
//     console.error("Error generating random data:", err);
//   });
