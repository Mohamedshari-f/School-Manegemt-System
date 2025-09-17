import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [selectedClass, setSelectedClass] = useState("");

  const fetchAttendance = () => {
    axios
      .get(`http://localhost:6200/attendance/date/${date}`)
      .then((res) => {
        console.log("Attendance Data:", res.data);
        setStudents(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleStatus = (stu, status) => {
    axios
      .post("http://localhost:6200/attendance/mark", {
        studentId: stu.student._id,
        status,
        date,
      })
      .then(() => fetchAttendance())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAttendance();
  }, [date]);

  const filteredStudents = selectedClass
    ? students.filter(
        (stu) =>
          stu.student.Class.toLowerCase().replace(/\s/g, "") ===
          selectedClass.toLowerCase().replace(/\s/g, "")
      )
    : students;

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          📋 Attendance
        </h1>

        <div className="flex justify-center mb-4 gap-4 items-center">
          <label className="font-medium">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-1 rounded"
          />

          <label className="font-medium">Class:</label>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="">All Classes</option>
            <option value="Class One">Class One</option>
            <option value="Class Two">Class Two</option>
            <option value="Class Three">Class Three</option>
          </select>
        </div>

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
              {filteredStudents.map((stu, idx) => {
                const disabled =
                  stu.createdAt &&
                  new Date() - new Date(stu.createdAt) > 24 * 60 * 60 * 1000;

                return (
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
                        disabled={disabled}
                        onClick={() => handleStatus(stu, "Present")}
                        className={`px-3 py-1 rounded ${
                          stu.status === "Present"
                            ? "bg-green-500 text-white"
                            : "bg-gray-200"
                        }`}
                      >
                        Present
                      </button>
                      <button
                        disabled={disabled}
                        onClick={() => handleStatus(stu, "Absent")}
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
                );
              })}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="py-6 text-gray-500 font-medium text-center"
                  >
                    No students found ❌
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
