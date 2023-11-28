/* eslint-disable no-undef */
const { enrollStudent } = require("../controllers/enrollController");

const router = require("express").Router();

router.post("/", enrollStudent);

module.exports = router;
