// // controllers/studentController.js
// const bcrypt = require("bcrypt");
// const Student = require("../Models/Ali");

// // Register a new student
// const registerStudent = async (req, res) => {
//   try {
//     const { name, password, Class } = req.body;

//     // Check if student already exists
//     const exists = await Student.findOne({ Name: name });
//     if (exists)
//       return res.status(400).json({ message: "Student already exists" });

//     // Hash the password
//     const hashed = await bcrypt.hash(password, 10);

//     const student = new Student({
//       Name: name,
//       Password: hashed,
//       Class,
//     });

//     const saved = await student.save();
//     // Remove password before sending response
//     const safeStudent = saved.toObject();
//     delete safeStudent.Password;

//     res.status(201).json(safeStudent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// // Login student
// const loginStudent = async (req, res) => {
//   try {
//     const { name, password } = req.body;

//     const student = await Student.findOne({ Name: name });
//     if (!student) return res.status(401).json({ message: "Invalid credentials" });

//     const match = await bcrypt.compare(password, student.Password);
//     if (!match) return res.status(401).json({ message: "Invalid credentials" });

//     const safeStudent = student.toObject();
//     delete safeStudent.Password;

//     res.json(safeStudent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { registerStudent, loginStudent };
