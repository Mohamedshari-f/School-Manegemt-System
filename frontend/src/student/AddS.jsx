import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
    const [Name,setName]=useState("")
    const [GuardianName,setGuardianName]=useState("")
    const [Gender,setGender]=useState("")
    const [Phonenumber,setPhonenumber]=useState("")
    const [Class,setClass]=useState("")
    const navigate=useNavigate()

    const handlePost=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:6200/create/student",{
            "Name":Name,
            "GuardianName":GuardianName,
            "Gender":Gender,
            "Phonenumber":Phonenumber,
            "Class":Class
        }).then(()=>{
            alert("successed")
            navigate("/Student")
        }) 
    }
  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-orange-500 p-6 rounded-lg w-96">
        
        <input value={Name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={GuardianName} onChange={(e)=>setGuardianName(e.target.value)} type="text" placeholder="enter GuardianName" className="w-80 mb-3 px-3 py-2 rounded" />
        <select value={Gender} onChange={(e)=>setGender(e.target.value)} className="w-80 mb-3 px-3 py-2 rounded">
          <option>choose your gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input value={Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} type="number" placeholder="enter Phonenumber" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Class} onChange={(e)=>setClass(e.target.value)} type="text" placeholder="enter Class" className="w-80 mb-3 px-3 py-2 rounded" />
        <button onClick={handlePost} className="w-80 bg-white text--600 font-semibold py-2 rounded">Add Student</button>

      </div>
    </form>
  )
}
export default Add
