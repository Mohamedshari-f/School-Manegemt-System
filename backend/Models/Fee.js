const mongoose = require("mongoose");

const FeeSchema = new mongoose.Schema({
  StudentName: { type: String, required: true },
  StudentID: { type: String, required: true },
  Class: { type: String, required: true },
    Month: { type: String, required: true },
    Amount: { type: Number, required: true },
    PaidDate: { type: String, required: true },
});

module.exports = mongoose.model("Fee", FeeSchema);
