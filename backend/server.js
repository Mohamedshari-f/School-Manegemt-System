const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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

const app = express();

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/School")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

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
