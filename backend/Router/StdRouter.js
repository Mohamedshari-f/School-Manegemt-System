const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Student schema
const StudentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Password: { type: String, required: true },
  Class: { type: String, required: true },
  Phonenumber: { type: String, required: true },
  Gender: { type: String, required: true },
  GuardianName: { type: String, required: true },
});

// Avoid OverwriteModelError
const Student = mongoose.models.Student || mongoose.model("Student", StudentSchema);

// Registration route
router.post("/register/create", async (req, res) => {
  console.log("Register route hit!", req.body);
  try {
    const { name, password, className, phone, gender, guardian } = req.body;

    // Check if student exists
    const exists = await Student.findOne({ Name: name });
    if (exists) return res.status(400).json({ message: "Student already exists" });

    const hashed = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      Name: name,
      Password: hashed,
      Class: className,
      Phonenumber: phone,
      Gender: gender,
      GuardianName: guardian,
    });

    const saved = await newStudent.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
