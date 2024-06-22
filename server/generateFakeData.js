import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import { Complain } from "./models/complainSchema.js";
import { Notice } from "./models/noticeSchema.js";
import { Sclass } from "./models/sclassSchema.js";
import { Student } from "./models/studentSchema.js";
import { Subject } from "./models/subjectSchema.js";
import { Teacher } from "./models/teacherSchema.js";

// Connect to MongoDB
async function main() {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

main()
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// Function to generate and insert fake data
const generateFakeData = async () => {
  // Clear existing data
  await Complain.deleteMany({});
  await Notice.deleteMany({});
  await Sclass.deleteMany({});
  await Student.deleteMany({});
  await Subject.deleteMany({});
  await Teacher.deleteMany({});

  // Generate Admin data
  const adminId = "661ab6e0752e60e4fa24cbde"; // Example admin ID, replace with your actual ID

  const password = "test123";

  const passwd = await bcrypt.hash(password, 10);

  // Generate Sclass data
  const sclasses = [];
  for (let i = 0; i < 10; i++) {
    const sclass = new Sclass({
      sclassName: i + 1,
      school: adminId,
    });
    sclasses.push(sclass);
  }
  await Sclass.insertMany(sclasses);

  // Generate Subject data
  const subjects = [];
  for (let i = 0; i < 40; i++) {
    const subject = new Subject({
      subName: faker.person.jobArea(),
      subCode: faker.string.alphanumeric(6),
      sessions: faker.number.int({ min: 30, max: 100 }).toString(),
      sclassName: sclasses[i % sclasses.length]._id,
      school: adminId,
    });
    subjects.push(subject);
  }
  await Subject.insertMany(subjects);

  // Generate Student data
  const students = [];
  for (let i = 0; i < 100; i++) {
    const student = new Student({
      name: faker.person.firstName(),
      rollNum: faker.number.int({ min: 1, max: 100 }),
      password: passwd,
      sclassName: sclasses[i % sclasses.length]._id,
      school: adminId,
      examResult: subjects.map((sub) => ({
        subName: sub._id,
        marksObtained: faker.number.int({ min: 0, max: 100 }),
      })),
      attendance: Array.from({ length: 10 }, () => ({
        date: faker.date.past(),
        status: faker.helpers.arrayElement(["Present", "Absent"]),
        subName: subjects[i % subjects.length]._id,
      })),
    });
    students.push(student);
  }
  await Student.insertMany(students);

  // Generate Teacher data
  const teachers = [];
  for (let i = 0; i < 35; i++) {
    const teacher = new Teacher({
      name: faker.person.firstName(),
      email: faker.internet.email(),
      password: passwd,
      school: adminId,
      teachSubject: subjects[i % subjects.length]._id,
      teachSclass: sclasses[i % sclasses.length]._id,
      attendance: Array.from({ length: 10 }, () => ({
        date: faker.date.past(),
        presentCount: faker.number.int({ min: 0, max: 30 }).toString(),
        absentCount: faker.number.int({ min: 0, max: 30 }).toString(),
      })),
    });
    teachers.push(teacher);
  }
  await Teacher.insertMany(teachers);

  // Generate Notice data
  const notices = [];
  for (let i = 0; i < 20; i++) {
    const notice = new Notice({
      title: faker.lorem.words(5),
      details: faker.lorem.paragraph(),
      date: faker.date.past(),
      school: adminId,
    });
    notices.push(notice);
  }
  await Notice.insertMany(notices);

  // Generate Complain data
  const complains = [];
  for (let i = 0; i < 20; i++) {
    const complain = new Complain({
      user: students[i % students.length]._id,
      date: faker.date.past(),
      complaint: faker.lorem.sentence(),
      school: adminId,
    });
    complains.push(complain);
  }
  await Complain.insertMany(complains);

  console.log("Fake data inserted successfully!");
  mongoose.connection.close();
};

generateFakeData();
