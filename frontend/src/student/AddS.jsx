import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard"

function Adds() {
  const [Name, setName] = useState("")
  const [GuardianName, setGuardianName] = useState("")
  const [Gender, setGender] = useState("")
  const [Phonenumber, setPhonenumber] = useState("")
  const [Class, setClass] = useState("")
  const navigate = useNavigate()

  const handlePost = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:6200/create/student", {
        Name,
        GuardianName,
        Gender,
        Phonenumber,
        Class,
      })
      .then(() => {
        alert("✅ Student successfully added")
        navigate("/Student")
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="flex ml-[500px]">
      <Dashboard />
      <form
        onSubmit={handlePost}
        className="flex items-center justify-center min-h-screen bg-white"
      >
        <div className="bg-blue-600 p-6 rounded-lg w-96 text-white">
          <input
            value={Name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="w-80 mb-3 px-3 py-2 rounded text-black"
            required
          />
          <input
            value={GuardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            type="text"
            placeholder="Enter Guardian Name"
            className="w-80 mb-3 px-3 py-2 rounded text-black"
            required
          />
          <select
            value={Gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-80 mb-3 px-3 py-2 rounded text-black"
            required
          >
            <option value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            value={Phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            type="number"
            placeholder="Enter Phone Number"
            className="w-80 mb-3 px-3 py-2 rounded text-black"
            required
          />

          {/* Class dropdown */}
          <select
            value={Class}
            onChange={(e) => setClass(e.target.value)}
            className="w-80 mb-3 px-3 py-2 rounded text-black"
            required
          >
            <option value="">Select Course</option>
            <option value="Class One">web development</option>
            <option value="Class Two">Graphic degsin</option>
            <option value="Class Three">video editing</option>
            <option value="Class Four">computer Application</option>
            <option value="Class Five">graphic motion</option>
          </select>

          <button
            type="submit"
            className="w-80 bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-200"
          >
            ➕ Add Student
          </button>
        </div>
      </form>
    </div>
  )
}

export default Adds
