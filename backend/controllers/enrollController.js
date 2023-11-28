/* eslint-disable no-undef */
const validator = require("validator");
const Student = require("../models/enrollModel");

const enrollStudent = async (req, res) => {
  const { courseTitle, fullName, email, phone } = req.body;
  if (!courseTitle || !fullName || !email || !phone) {
    return res.status(400).json({ error: "Some fields are empty!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const student = await Student.create({
      courseTitle,
      fullName,
      email,
      phone,
    });
    if (!student) {
      return res
        .status(400)
        .json({ error: "Error Applying! please try again" });
    }
    res.status(201).json({ message: "You are now enrolled in this course!" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { enrollStudent };
