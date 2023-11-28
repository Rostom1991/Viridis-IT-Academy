/* eslint-disable no-undef */
const { postContact } = require("../controllers/contactController");

const router = require("express").Router();

router.post("/", postContact);

module.exports = router;
