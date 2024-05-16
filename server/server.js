import express from "express";
import dotenv from "dotenv";
import monggoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./routes/route.js";
dotenv.config();
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", UserRouter);

async function main() {
  monggoose.connect(`${process.env.MONGODB_URL}`);
}

main()
  .then(() => {
    console.log("database connection established");
  })
  .catch((err) => {
    console.log("error connecting to database", err);
  });

app.listen(process.env.PORT, () => {
  console.log("server is running on port", process.env.PORT);
});
