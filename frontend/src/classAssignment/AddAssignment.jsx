import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "../Dashboard"

function AddAssignment() {
    const [name, setname] = useState("")
    const [date, setdate] = useState("")
    const [AssignmentTitle, setAssignmentTitle] = useState("")
    const [Course, setCourse] = useState("")
    const [Class, setClass] = useState("")
    const [image, setImage] = useState(null)

    const navigate = useNavigate()

    const handleCreate = async (e) => {
        e.preventDefault()

        if (!image) {
            toast.error("Please select an image ")
            return
        }

        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("date", date)
            formData.append("AssignmentTitle", AssignmentTitle)
            formData.append("Course", Course)
            formData.append("Class", Class)
            formData.append("prImage", image)

            // Debug - eeg waxa la dirayo
            for (let pair of formData.entries()) {
                console.log(pair[0] + ": " + pair[1])
            }

            await axios.post("http://localhost:6200/create/Assignment", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })

            toast.success("Assignment added successfully ")
            setTimeout(() => navigate("/Assingment"), 2000)
        } catch (err) {
            toast.error("Error adding assignment ")
            console.error("Upload error:", err.response?.data || err.message)
        }
    }

    return <>
    <div className="flex overflow-hidden h-screen mt-2 ml-64">
        <Dashboard/>
        <div className="flex justify-center items-start min-h-screen bg-white p-10">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-[40rem] border-t-8 border-orange-600">
                <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">Register Assignment</h2>
                
                <form onSubmit={handleCreate} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            type="text"
                            className="w-full border border-orange-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Date</label>
                        <input
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                            type="date"
                            className="w-full border border-orange-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Assignment Title</label>
                        <input
                            value={AssignmentTitle}
                            onChange={(e) => setAssignmentTitle(e.target.value)}
                            type="text"
                            className="w-full border border-orange-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Course</label>
                        <input
                            value={Course}
                            onChange={(e) => setCourse(e.target.value)}
                            type="text"
                            className="w-full border border-orange-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Class</label>
                        <input
                            value={Class}
                            onChange={(e) => setClass(e.target.value)}
                            type="text"
                            className="w-full border border-orange-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Image</label>
                        <input
                            onChange={(e) => setImage(e.target.files[0])}
                            type="file"
                            accept="image/*"
                            className="w-full text-gray-700"
                            required
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 mt-5">
                        Add Assignment
                    </button>
                </form>

                <ToastContainer position="top-right" autoClose={2000} />
            </div>
        </div>
    </div>
    </>
}

export default AddAssignment
