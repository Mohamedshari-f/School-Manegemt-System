const AttendanceModel = require("../Models/attendance");
const StudentModel = require("../Models/StudentModel");

// Mark or Update Attendance
const MarkAttendance = async (req, res) => {
  try {
    const { studentId, status, date } = req.body;

    const start = new Date(new Date(date).setHours(0,0,0,0));
    const end = new Date(new Date(date).setHours(23,59,59,999));

    let record = await AttendanceModel.findOne({
      student: studentId,
      date: { $gte: start, $lte: end },
    });

    if(record){
      record.status = status;
      await record.save();
      return res.send(record);
    }

    const newRecord = new AttendanceModel({ student: studentId, status, date });
    await newRecord.save();
    res.send(newRecord);

  } catch(err){
    res.status(400).send({ message: err.message });
  }
}

// Read Attendance by Date (merge with all students)
const ReadAttendanceByDate = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const start = new Date(date.setHours(0,0,0,0));
    const end = new Date(date.setHours(23,59,59,999));

    const students = await StudentModel.find();

    const attendance = await AttendanceModel.find({
      date: { $gte: start, $lte: end },
    }).populate("student");

    const data = students.map(stu => {
      const record = attendance.find(a => a.student._id.toString() === stu._id.toString());
      return {
        _id: record?._id || null,
        student: stu,
        status: record?.status || "Absent",
        date,
      };
    });

    res.send(data);

  } catch(err){
    res.status(500).send({ message: err.message });
  }
}

module.exports = { MarkAttendance, ReadAttendanceByDate };
