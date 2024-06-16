import { Sclass } from "../models/sclassSchema.js";
import { Student } from "../models/studentSchema.js";
import { Subject } from "../models/subjectSchema.js";
import { Teacher } from "../models/teacherSchema.js";

export const adminAddClass = async (req, res) => {
  // console.log(req.body,131321);
  try {
    const sclass = new Sclass({
      sclassName: req.body.sclassName,
      school: req.body.adminID,
    });

    const existingSclassByName = await Sclass.findOne({
      sclassName: req.body.sclassName,
      school: req.body.adminID,
    });

    if (existingSclassByName) {
      res.send({ message: "Sorry this class name already exists" });
    } else {
      const result = await sclass.save();
      res.send(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const sclassList = async (req, res) => {
  //   return res.send("hello from class list ");
  // console.log(req.params.id);
  try {
    let sclasses = await Sclass.find({ school: req.params.id });
    if (sclasses.length > 0) {
      res.send(sclasses);
    } else {
      res.send({ message: "No sclasses found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSclassStudents = async (req, res) => {
  try {
    let students = await Student.find({ sclassName: req.params.id });
    if (students.length > 0) {
      let modifiedStudents = students.map((student) => {
        return { ...student._doc, password: undefined };
      });
      res.send({ status: true, modifiedStudents });
    } else {
      res.send({ status: false, message: "No students found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteSclass = async (req, res) => {
  try {
    console.log(req.params.id, 111222);
    const deletedClass = await Sclass.findByIdAndDelete(req.params.id);
    console.log(deletedClass, 2233322);
    if (!deletedClass) {
      return res.send({ message: "Class not found" });
    }
    const deletedStudents = await Student.deleteMany({
      sclassName: req.params.id,
    });
    const deletedSubjects = await Subject.deleteMany({
      sclassName: req.params.id,
    });
    const deletedTeachers = await Teacher.deleteMany({
      teachSclass: req.params.id,
    });
    res.send(deletedClass);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteSclasses = async (req, res) => {
  try {
    const deletedClasses = await Sclass.deleteMany({ school: req.params.id });
    if (deletedClasses.deletedCount === 0) {
      return res.send({ message: "No classes found to delete" });
    }
    const deletedStudents = await Student.deleteMany({ school: req.params.id });
    const deletedSubjects = await Subject.deleteMany({ school: req.params.id });
    const deletedTeachers = await Teacher.deleteMany({ school: req.params.id });
    res.send(deletedClasses);
  } catch (error) {
    console.log(error, 5500);
    res.status(500).json(error);
  }
};
