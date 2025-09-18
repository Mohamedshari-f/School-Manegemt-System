import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function RegisterStudent() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    // const [active, setActive] = useState("students")

    const navigate = useNavigate()

    const handleInsert = (e) => {
        e.preventDefault()
        axios.post("http://localhost:6200/create/admin", { name,
    email,
    phone,
    password}).then((res) => {
                toast.success(" registered successfully");
                setTimeout(() => navigate("/Login"), 1000)
            })
            .catch(() => {
                toast.error("Registration failed, try again")
            })
    }

    return (
        <div className="min-h-screen grid place-items-center bg-gray-50">
            <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
                <h2 className="text-2xl font-semibold mb-4 text-center"></h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="name">Admin Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)}
                            id="name"
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)}
                            id="phone"
                            type="number"
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                            className="w-full rounded-xl border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-800"
                        />
                    </div>

                    <button onClick={handleInsert}
                        type="submit"
                        className="w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium"
                    >
                      Register Admin
                    </button>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={1000} />
        </div>
    )
}

export default RegisterStudent