// const mongoose = require("mongoose");

// const StudentSchema = new mongoose.Schema({
//   Name: { type: String, required: true },
//   Password: { type: String, required: true },
//   Class: { type: String, required: true },
//   Phonenumber: { type: String, required: false }, // optional
//   Gender: { type: String, required: false },      // optional
//   GuardianName: { type: String, required: false } // optional
// }, { timestamps: true });

// StudentSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.Password;
//   return obj;
// };

// module.exports = mongoose.models.Student || mongoose.model("Student", StudentSchema);
