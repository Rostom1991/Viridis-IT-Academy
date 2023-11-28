/* eslint-disable no-undef */

const Contact = require("../models/contactModel");
const validator = require("validator");

const postContact = async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All field are required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const contact = await Contact.create({ name, email, phone, message });
    if (!contact) {
      return res
        .status(400)
        .json({ error: "Message not sent, please try again!" });
    }
    res.status(201).json({ message: "Thank you for contacting us!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postContact };
