const express = require("express");
const router = express.Router();
const AttendanceControl = require("../controller/Attendance");

// Mark or Update Attendance
router.post("/attendance/mark", AttendanceControl.MarkAttendance);

// Read Attendance by Date
router.get("/attendance/date/:date", AttendanceControl.ReadAttendanceByDate);

module.exports = router
