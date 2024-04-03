import { Sclass } from "../models/sclassSchema.js";
// const Student = require("../models/studentSchema.js");
// const Subject = require("../models/subjectSchema.js");
// const Teacher = require("../models/teacherSchema.js");

export const adminAddClass = async (req, res) => {
  //   console.log(req.body);
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
