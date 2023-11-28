const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

//Create Token

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "1d" });
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Some fields are empty!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid!" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "You don't have an account! please signup!" });
    }
    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res.status(400).json({ error: "Wrong password!" });
    }
    const token = createToken(user._id);
    res.status(200).json({ message: "Login Successful!", user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Signup
const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email is not valid" });
  }

  try {
    const userEmail = await User.findOne({ email });
    if (userEmail) {
      return res
        .status(400)
        .json({ error: "You already have an account, try to log in!" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const user = await User.create({ fullName, email, password: hashPass });
    const token = createToken(user._id);
    res.status(201).json({ message: "Sign Up Succsseful", user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login, signup };
