import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateTeacher() {
    const [Name,setName]=useState("")
    const [Email,setEmail]=useState("")
    const [joining,setJoining]=useState("")
    const [Phone,setPhone]=useState("")
    const [Class,setClass]=useState("")
    const [Course,setCourse]=useState("")
    const navigate=useNavigate()

  const params=useParams()
  const handleSingleData=()=>{
    axios.get(`http://localhost:6200/read/student/${params.id}`).then((res)=>{
        setName(res.data[0].Name),
        setEmail(res.data[0].Email),
        setJoining(res.data[0].joining),
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
        axios.put(`http://localhost:6200/update/student/${params.id}`,{
            "Name":Name,
            "Email":Email,
            "joining":joining,
            "Phone":Phone,
            "Class":Class,
            "Course":Course

    }).then(()=>{
        alert("succes Updated")
        navigate("/Student")

    })

}

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-orange-500 p-6 rounded-lg w-96">
        
        <input value={Name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter Email" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={joining} onChange={(e)=>setJoining(e.target.value)} type="text" placeholder="enter joining date" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="enter Phone" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Class} onChange={(e)=>setClass(e.target.value)} type="text" placeholder="enter Class" className="w-80 mb-3 px-3 py-2 rounded" />
        <input value={Course} onChange={(e)=>setCourse(e.target.value)} type="text" placeholder="enter Course" className="w-80 mb-3 px-3 py-2 rounded" />
        <button onClick={handleUpdate}  className="w-80 bg-white text--600 font-semibold py-2 rounded">Update Teacher</button>

      </div>
    </form>
  )
}

export default UpdateTeacher
