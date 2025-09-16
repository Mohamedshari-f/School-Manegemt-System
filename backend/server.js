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
const StdRouter = require("./Router/StdRouter")     // Registration route
const feeRouter = require("./Router/Fee")
const ExamRouter = require("./Router/ExamRouter")
const authRoutes = require("./Router/auth")

<<<<<<< HEAD
// Routers
const StudentRouter = require("./Router/StudentRouter");
// const StdRouter = require("./Router/StdRouter");      // Registration route
const TeacherRouter = require("./Router/TeacherRouter");
const AssignmentRouter = require("./Router/AssignmentRouter");
const AttendanceRouter = require("./Router/attendanceRouter");
const feeRouter = require("./Router/Fee");
const ExamRouter = require("./Router/ExamRouter");
// const authRoutes = require("./Router/AuthRouter");    // ✅ saxay
// const RegisterRoutes = require("./Router/Register");    // ✅ saxay
=======

const app=express()
app.use(cors());



app.use(StudentRouter)
app.use(TeacherRouter)
app.use(AssignmentRouter)
app.use(AttendanceRouter)
app.use(BookRouter)
app.use("/allImages", express.static("images"))
app.use("/allImages", express.static("document"))
>>>>>>> b1a32cb833645c9b92733a1f593b482726830b0e


// MongoDB connection
mongoose.connect("mongodb://localhost:27017/School")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(" MongoDB connection error:", err));


// Middleware
app.use(cors());
app.use(express.json());

// Mount routers
app.use(StudentRouter);
<<<<<<< HEAD
app.use(TeacherRouter);
app.use(AssignmentRouter);
app.use(AttendanceRouter);
app.use(feeRouter);
app.use(ExamRouter);
// app.use(RegisterRoutes);
=======
app.use( TeacherRouter);
app.use(AssignmentRouter);
app.use(AttendanceRouter);
app.use(feeRouter);
app.use( ExamRouter);
>>>>>>> b1a32cb833645c9b92733a1f593b482726830b0e

// StdRouter (registration route)
// app.use("/", StdRouter); // POST /register/create

// Auth routes (student login)
// app.use("/auth", authRoutes);

// Static folder for images
app.use("/allImages", express.static("images"));

// Start server
app.listen(6200, () => console.log("✅ Server running on port 6200"));
