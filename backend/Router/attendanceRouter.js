const express = require("express");
const router = express.Router();
const AttendanceControl = require("../controller/Attendance");

router.post("/attendance/mark", AttendanceControl.MarkAttendance);

router.get("/attendance/date/:date", AttendanceControl.ReadAttendanceByDate);

module.exports = router
