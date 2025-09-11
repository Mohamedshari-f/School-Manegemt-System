import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateStudent() {
    const [Name,setName]=useState("")
    const [GuardianName,setGuardianName]=useState("")
    const [Gender,setGender]=useState("")
    const [Phonenumber,setPhonenumber]=useState("")
    const [Class,setClass]=useState("")
    const navigate=useNavigate()

  const params=useParams()
  const handleSingleData=()=>{
    axios.get(`http://localhost:6200/read/student/${params.id}`).then((res)=>{
        setName(res.data[0].Name),
        setAddress(res.data[0].Address),
        setGender(res.data[0].Gender),
        setSalary(res.data[0].Salary)

    })
  }
    useEffect(()=>{
    handleSingleData()
  },[])
  const handleUpdate=(e)=>{
    
        e.preventDefault()
        axios.put(`http://localhost:6200/update/student/${params.id}`,{
            "Name":Name,
            "Address":Address,
            "Gender":Gender,
            "Salary":Salary
        
    }).then(()=>{
        alert("succes Updated")
        navigate("/DisplayS")

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
        <button onClick={handleUpdate}  className="w-80 bg-white text--600 font-semibold py-2 rounded">Update Student</button>

      </div>
    </form>
  )
}

export default UpdateStudent
