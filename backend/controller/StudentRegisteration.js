// const bcrypt = require("bcrypt");
// const Student = require("../models/Student");

// // Register a new student
// const registerStudent = async (req, res) => {
//   try {
//     const { name, email, password, Class } = req.body;

//     // Validation: hubi in dhamaan fields la buuxiyey
//     if (!name || !email || !password || !Class) {
//       return res.status(400).json({ message: "Fadlan buuxi dhamaan fields-ka" });
//     }

//     // Hubi haddii student horey u jiro
//     const exists = await Student.findOne({ email });
//     if (exists) {
//       return res.status(400).json({ message: "Student already exists" });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create student
//     const student = new Student({
//       name,
//       email,
//       password: hashedPassword,
//       Class,
//     });

//     const saved = await student.save();

//     // Remove password before sending response
//     const safeStudent = saved.toObject();
//     delete safeStudent.password;

//     res.status(201).json(safeStudent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = { registerStudent };
