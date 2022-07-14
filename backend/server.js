const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./user_model.js");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:12345@cluster0.xo80t.mongodb.net/test",
  () => {
    console.log("DATABASE CONNECTED TO MONGOOSE");
  }
);
app.post("/api/addUser", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(15);
    const SecuredPassword = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({
      email: req.body.email,
      fullName: req.body.fullName,
      phoneNumber: req.body.phoneNumber,
      password: SecuredPassword,
    });
    const userDetails = await User.findOne({ email: req.body.email });
    res.json({ data: userDetails, message: "Success", status: 200 });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/api/userLogin", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }
    if (user.email_verification == false) {
      return res.status(422).json({
        message:
          "Your email is not verified yet. Kindly verify your email before Login.",
        status: 422,
      });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (passwordCompare) {
      return res.json({ status: "ok", user: true });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => console.log(`SERVER STARTED on port:${port}`));
