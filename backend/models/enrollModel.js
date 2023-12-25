/* eslint-disable no-undef */
const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, required: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", enrollSchema);
module.exports = Student;
