import mongoose from "mongoose";
import { Sclass } from "../models/sclassSchema.js";

const subjectSchema = new mongoose.Schema(
  {
    subName: {
      type: String,
      required: true,
    },
    subCode: {
      type: String,
      required: true,
    },
    sessions: {
      type: String,
      required: true,
    },
    sclassName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sclass",
      required: true,
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("subject", subjectSchema);

const SubjectSchema = mongoose.model("subject", subjectSchema);
export { SubjectSchema as Subject };
