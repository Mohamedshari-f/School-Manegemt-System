const express = require("express")
const StudentModel=require("./Models/StudentModel")
const cors=require("cors")
const StudentRouter=require("./Router/StudentRouter")

const mongoose=require("mongoose")

const app=express()
mongoose.connect("mongodb://localhost:27017/School").then(()=>{console.log("connected")})

app.use(express.json())
app.use(cors())

app.use(StudentRouter)
app.listen(6200, () => console.log("✅ Server running on port 6200"));
