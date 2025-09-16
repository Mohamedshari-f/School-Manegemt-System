import axios from "axios";
import { useState, useEffect } from "react";
import Dashboard from "../Dashboard";

function ExamAdmin() {
 const [students, setStudents] = useState([]);
  const [exams, setExams] = useState([]);
  const [form, setForm] = useState({
    subject: "",
    date: "",
    totalMarks: "",
    studentId: ""
  });

  const loadData = async () => {
    try {
      const studentRes = await axios.get("http://localhost:6200/read/student");
      setStudents(studentRes.data);

      const examRes = await axios.get("http://localhost:6200/read/exam");
      setExams(examRes.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:6200/create/exam", form);
      setForm({ subject: "", date: "", totalMarks: "", studentId: "" });

      // Dib u refresh garee exams
      loadData();
    } catch (err) {
      console.error("Error saving exam:", err);
    }
  };
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-indigo-700 mb-6">
          📊 Exam Management
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap gap-3 bg-white p-4 shadow rounded-lg mb-6"
        >
          <input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="border rounded p-2 flex-1 min-w-[150px]"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="border rounded p-2 flex-1 min-w-[150px]"
          />
          <input
            type="number"
            placeholder="Total Marks"
            value={form.totalMarks}
            onChange={(e) => setForm({ ...form, totalMarks: e.target.value })}
            className="border rounded p-2 flex-1 min-w-[150px]"
          />
          <select
            value={form.studentId}
            onChange={(e) => setForm({ ...form, studentId: e.target.value })}
            className="border rounded p-2 flex-1 min-w-[150px]"
          >
            <option value="">Select Student</option>
            {students.map((s) => (
              <option value={s._id}>
                {s.Name} - {s.Class}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            Save
          </button>
        </form>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="w-full border border-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">👨‍🎓 Student</th>
                <th className="py-3 px-4 text-left">🏫 Class</th>
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
                  <td className="py-3 px-4">{e.student?.Name || "—"}</td>
                  <td className="py-3 px-4">{e.student?.Class || "—"}</td>
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
    </div>
  );
}

export default ExamAdmin
