// src/pages/StudentLogin.jsx
import { useState } from "react";
import axios from "axios";

function StudentLogin() {
  const [form, setForm] = useState({ name: "", password: "" });
  const [student, setStudent] = useState(null);
  const [exams, setExams] = useState([]);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6200/auth/login", form);
      setStudent(res.data); // student object no password
      setError("");

      // load student exams
      const r = await axios.get(
        `http://localhost:6200/exam/student/${res.data._id}`
      );
      setExams(r.data);
    } catch (err) {
      console.error(err);
      setError("Invalid login");
    }
  };

  if (!student) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6">
            🎓 Student Login
          </h1>
          <form onSubmit={handleLogin}>
            <input
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border rounded-lg p-3 w-full mb-4 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="password"
              placeholder="Enter password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="border rounded-lg p-3 w-full mb-6 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
        </div>
      </div>
    );
  }

  // logged in view
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 mt-10">
      <h1 className="text-2xl font-bold text-indigo-700 mb-6">
        👋 Welcome {student.Name}{" "}
        <span className="text-gray-500">({student.Class})</span>
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">📘 Subject</th>
              <th className="py-3 px-4 text-left">📅 Date</th>
              <th className="py-3 px-4 text-left">📝 Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((e, idx) => (
              <tr
                key={e._id}
                className={`${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-indigo-50 transition`}
              >
                <td className="py-3 px-4">{e.subject}</td>
                <td className="py-3 px-4">
                  {new Date(e.date).toLocaleDateString()}
                </td>
                <td className="py-3 px-4 font-semibold text-indigo-600">
                  {e.totalMarks}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentLogin;
