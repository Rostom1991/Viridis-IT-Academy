/* eslint-disable no-undef */
const {
  enrollStudent,
  getStudents,
} = require("../controllers/enrollController");

const router = require("express").Router(); 

router.post("/", enrollStudent);
router.get("/", getStudents);

module.exports = router;
