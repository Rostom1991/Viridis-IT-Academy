/* eslint-disable no-undef */
const {
  postContact,
  getContacts,
} = require("../controllers/contactController");

const router = require("express").Router();

router.post("/", postContact);
router.get("/", getContacts);

module.exports = router;
