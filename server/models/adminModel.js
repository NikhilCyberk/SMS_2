// import mongoose from 'mongoose'
// const UserSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const UserModel = mongoose.model('User', UserSchema)
// export { UserModel as User };

import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "admin",
  },
  schoolName: {
    type: String,
    unique: true,
    required: true,
  },
});

const AdminSchema = mongoose.model("Admin", adminSchema);
export { AdminSchema as Admin };
