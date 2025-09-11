const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  GuardianName: { type: String, required: true },
  Gender: { type: String, required: true },
  Phonenumber: { type: Number, required: true },
  Class: { type: String, required: true },
});

module.exports = mongoose.model("Student", studentSchema);
