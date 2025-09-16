const express = require("express");
const router = express.Router();
const Exam = require("../Models/Exammodel");

// Create exam for a student
router.post("/create/exam", async (req, res) => {
  try {
    const { subject, date, totalMarks, studentId } = req.body;
    const newExam = new Exam({ subject, date, totalMarks, student: studentId });
    await newExam.save();
    res.json(newExam);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all exams with student info (for admin)
router.get("/read/exam", async (req, res) => {
  try {
    const exams = await Exam.find().populate("student");
    res.json(exams);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get student exams by studentId (for student login)
router.get("/student/:id", async (req, res) => {
  try {
    const exams = await Exam.find({ student: req.params.id }).populate("student");
    res.json(exams);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
