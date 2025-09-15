import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const fetchAttendance = () => {
    axios
      .get(`http://localhost:6200/attendance/date/${date}`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  const handleStatus = (student, status) => {
    axios
      .post("http://localhost:6200/attendance/mark", {
        studentId: student._id,
        status,
        date,
      })
      .then(() => fetchAttendance())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAttendance();
  }, [date]);

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          📋 Attendance
        </h1>

        {/* Date Filter */}
        <div className="flex justify-center mb-4 gap-2 items-center">
          <label className="font-medium">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-1 rounded"
          />
        </div>

        {/* Attendance Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-2 text-left">👨‍🎓 Name</th>
                <th className="px-6 py-2 text-left">🏫 Class</th>
                <th className="px-6 py-2 text-center">✅ Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((stu, idx) => (
                <tr
                  key={stu.student._id}
                  className={`hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-2">{stu.student.Name}</td>
                  <td className="px-6 py-2">{stu.student.Class}</td>
                  <td className="px-6 py-2 flex justify-center gap-2">
                    <button
                      onClick={() => handleStatus(stu.student, "Present")}
                      className={`px-3 py-1 rounded ${
                        stu.status === "Present"
                          ? "bg-green-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      Present
                    </button>
                    <button
                      onClick={() => handleStatus(stu.student, "Absent")}
                      className={`px-3 py-1 rounded ${
                        stu.status === "Absent"
                          ? "bg-red-500 text-white"
                          : "bg-gray-200"
                      }`}
                    >
                      Absent
                    </button>
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

export default Attendance;
