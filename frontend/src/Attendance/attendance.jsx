import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [filterClass, setFilterClass] = useState(""); // class filter
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [attendance, setAttendance] = useState({}); // {studentId: true/false}

  // Fetch all students
  useEffect(() => {
    axios.get("http://localhost:6200/read/student")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  // filter students by selected class
  const filteredStudents = filterClass
    ? students.filter((s) => s.Class === filterClass)
    : [];

  // toggle checkbox
  const handleToggle = (id) => {
    setAttendance(prev => ({
      ...prev,
      [id]: !prev[id] // toggle present
    }));
  };

  const handleSubmit = () => {
    const today = new Date().toISOString().split("T")[0];
    if (date < today) {
      alert("You cannot mark attendance for past dates ");
      return;
    }

    const requests = filteredStudents.map(student => {
      const status = attendance[student._id] ? "Present" : "Absent";
      return axios.post("http://localhost:6200/attendance", {
        studentId: student._id,
        date,
        status
      }).catch(() => null);
    });

    Promise.all(requests).then(() => alert("Attendance saved "));
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Mark Attendance</h1>

        {/* Class Filter */}
        <div className="mb-4 flex gap-4 items-center">
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Select Class</option>
            <option value="Class One">Graphic Design</option>
            <option value="Class Two">Computer Application</option>
            <option value="Class Three">Video Editing</option>
            <option value="Class Four">Motion Graphics</option>
            <option value="Class Five">Web Development</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border text-center">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Present (checkbox)</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((s, idx) => (
                <tr
                  key={s._id}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-3">{s.Name}</td>
                  <td className="px-4 py-3">{s.Class}</td>
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={attendance[s._id] || false}
                      onChange={() => handleToggle(s._id)}
                      disabled={date < new Date().toISOString().split("T")[0]} // disable if past
                    />
                  </td>
                </tr>
              ))}
              {filterClass && filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="3" className="py-6 text-gray-500">
                    No students in this class 
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}

export default Attendance;
