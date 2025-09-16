// const express = require("express");
// const Student = require("../Models/StudentModel"); // ✅ hubi magaca saxda ah
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// const router = express.Router();

// // Student login
// router.post("/login", async (req, res) => {
//   const { name, password } = req.body;
//   try {
//     const student = await Student.findOne({ name });
//     if (!student) return res.status(404).json({ msg: "Student not found" });

//     const isMatch = await bcrypt.compare(password, student.password);
//     if (!isMatch) return res.status(400).json({ msg: "Invalid password" });

//     const token = jwt.sign({ id: student._id }, "secretkey", { expiresIn: "1h" });
//     res.json({ token, student });
//   } catch (err) {
//     res.status(500).json({ msg: "Server error" });
//   }
// });

// module.exports = router;
