const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    status: { type: String, enum: ["Present", "Absent"], default: null },
    date: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Attendance", attendanceSchema);
