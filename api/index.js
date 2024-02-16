const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");
const { error } = require("console");

mongoose
  .connect("mongodb+srv://shiva:shiva123@cluster0.jz2skbg.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDb", err);
  });

app.listen(port, () => {
  console.log("Server is running on port 8000 ");
});

const User = require("./modals/user");
const Order = require("./modals/user");

// endpoint to register in the app

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if the email is already registered
    const exitingUser = await User.findOne({ email });
    if (exitingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
  } catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Registration faild" });
  }
});
