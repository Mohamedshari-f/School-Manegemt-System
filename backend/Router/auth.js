const express = require("express");
const router = express.Router();
const Student = require("../Models/StudentModel");

// Student login
router.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;
    const student = await Student.findOne({ Name: name, Password: password });
    if (!student) return res.status(401).json({ message: "Invalid credentials" });
    res.json(student);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
