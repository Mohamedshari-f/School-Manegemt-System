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

const app=express()
mongoose.connect("mongodb://localhost:27017/School").then(()=>{console.log("connected")})

app.use(express.json())
app.use(cors())

app.use(StudentRouter)
app.use(TeacherRouter)
app.use(AssignmentRouter)
app.use(AttendanceRouter)
app.use(BookRouter)
app.use("/allImages", express.static("images"))
app.use("/allImages", express.static("document"))

app.listen(6200, () => console.log("✅ Server running on port 6200"));
