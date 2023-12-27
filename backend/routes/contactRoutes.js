/* eslint-disable no-undef */
const {
  postContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

const router = require("express").Router();

router.post("/", postContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);

module.exports = router;
