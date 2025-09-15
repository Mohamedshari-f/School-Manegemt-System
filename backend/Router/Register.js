const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require('../Models/Ali');

router.post('/register/create', async (req, res) => {
  try {
    const { name, password, className } = req.body;

    const exists = await Student.findOne({ Name: name });
    if (exists) return res.status(400).json({ message: 'Student already exists' });

    const hashed = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      Name: name,
      Password: hashed,
      Class: className,
    });

    const saved = await newStudent.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
