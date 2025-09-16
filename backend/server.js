<<<<<<< HEAD
const express = require("express")
// const StudentModel=require("./Models/StudentModel")
// const Assignment=require("./Models/Assignment")
const cors=require("cors")
const StudentRouter=require("./Router/StudentRouter")
const TeacherRouter=require("./Router/TeacherRouter")
const AssignmentRouter=require("./Router/AssignmentRouter")
const AttendanceRouter=require("./Router/attendanceRouter")
const BookRouter=require("./Router/Book")
const mongoose=require("mongoose")
=======
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
>>>>>>> c0e4b0b1c1b712571c4250f2fefbd9722b18387e

// Routers
const StudentRouter = require("./Router/StudentRouter");
const StdRouter = require("./Router/StdRouter");      // Registration route
const TeacherRouter = require("./Router/TeacherRouter");
const AssignmentRouter = require("./Router/AssignmentRouter");
const AttendanceRouter = require("./Router/attendanceRouter");
const feeRouter = require("./Router/Fee");
const ExamRouter = require("./Router/ExamRouter");

// Auth routes
const authRoutes = require("./middleware/auth");

<<<<<<< HEAD
app.use(StudentRouter)
app.use(TeacherRouter)
app.use(AssignmentRouter)
app.use(AttendanceRouter)
app.use(BookRouter)
app.use("/allImages", express.static("images"))
app.use("/allImages", express.static("document"))
=======
const app = express();

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/School")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));
>>>>>>> c0e4b0b1c1b712571c4250f2fefbd9722b18387e

// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use("/student", StudentRouter);
app.use("/teacher", TeacherRouter);
app.use("/assignment", AssignmentRouter);
app.use("/attendance", AttendanceRouter);
app.use("/fee", feeRouter);
app.use("/exam", ExamRouter);

// StdRouter (registration route)
app.use("/", StdRouter); // POST /register/create

// Auth routes
app.use("/auth", authRoutes);

// Static folder
app.use("/allImages", express.static("images"));

// Start server
app.listen(6200, () => console.log("✅ Server running on port 6200"));
