import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Dashboard from "../Dashboard"

function UpdateTeacher() {
    const [Name,setName]=useState("")
    const [Qualification,setQualification]=useState("")
    const [Gender,setGender]=useState("")
    const [Joining, setJoining]=useState("")
    const [Phone,setPhone]=useState("")
    const [Class,setClass]=useState("")
    const [Course,setCourse]=useState("")
    const navigate=useNavigate()
    
  const params=useParams()
  const handleSingleData=()=>{
    axios.get(`http://localhost:6200/read/Teacher/${params.id}`).then((res)=>{
        setName(res.data[0].Name),
        setQualification(res.data[0].Qualification),
        setJoining(res.data[0].Joining),
        setGender(res.data[0].Gender)
        setPhone(res.data[0].Phone),
        setClass(res.data[0].Class),
        setCourse(res.data[0].Course)

    })
  }
    useEffect(()=>{
    handleSingleData()
  },[])
  const handleUpdate=(e)=>{
    
        e.preventDefault()
        axios.put(`http://localhost:6200/update/Teacher/${params.id}`,{
            "Name":Name,
            "Qualification":Qualification,
            "Joining":Joining,
            "Gender":Gender,
            "Phone":Phone,
            "Class":Class,
            "Course":Course

    }).then(()=>{
        alert("succes Updated")
        navigate("/Teachers")

    })

}

  return <>
  <div className="flex ml-[500px]">
<Dashboard/> 
    <form className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-blue-600 p-6 rounded-lg w-96">
        
        <input value={Name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Qualification} onChange={(e)=>setQualification(e.target.value)} type="text" placeholder="enter Qualification" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Joining} onChange={(e)=>setJoining(e.target.value)} type="text" placeholder="enter Joining" className="w-80 mb-3 px-3 py-2 rounded" />
        <select value={Gender} onChange={(e)=>setGender(e.target.value)} className="w-80 mb-3 px-3 py-2 rounded">
          <option>choose your Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <input value={Phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="enter Phone" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Class} onChange={(e)=>setClass(e.target.value)} type="text" placeholder="enter Class" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Course} onChange={(e)=>setCourse(e.target.value)} type="text" placeholder="enter Course" className="w-80 mb-3 px-3 py-2 rounded" />
        <button onClick={handleUpdate}  className="w-80 bg-white text--600 font-semibold py-2 rounded">Update Teacher</button>

      </div>
    </form>
  </div>

  </>
}

export default UpdateTeacher
