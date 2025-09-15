import { useState } from "react";
import axios from "axios";

function StudentRegister() {
  const [form, setForm] = useState({ name: "", password: "", className: "" });
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6200/register/create", {
        name: form.name,
        password: form.password,
        className: form.className,
      });
      console.log(res.data);
      setMessage("✅ Student registered successfully!");
      setForm({ name: "", password: "", className: "" });
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "❌ Error registering student");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-teal-700">
          📝 Register Student
        </h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Student Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg p-3 w-full mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="border rounded-lg p-3 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Class"
            value={form.className}
            onChange={(e) => setForm({ ...form, className: e.target.value })}
            className="border rounded-lg p-3 w-full mb-6"
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Register
          </button>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default StudentRegister;
