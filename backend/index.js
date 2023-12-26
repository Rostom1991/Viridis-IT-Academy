/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const userRoutes = require("./routes/userRoutes");
const enrollRoutes = require("./routes/enrollRoutes");

const app = express();
const port = process.env.PORT;
const mongo = process.env.MONGO;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/contact", contactRoutes);
app.use("/enroll", enrollRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(mongo)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

app.listen(port, () => console.log("Server Running!"));
