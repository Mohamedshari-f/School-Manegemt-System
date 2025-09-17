const express = require("express");
const router = express.Router();
const AttendanceController = require("../controller/Attendance");

router.get("/date/:date", AttendanceController.getAttendanceByDate);
router.post("/mark", AttendanceController.markAttendance);

module.exports = router;
