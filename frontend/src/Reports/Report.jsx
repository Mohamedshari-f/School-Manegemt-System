// src/pages/Reports.jsx
// Warbixin (Reports) oo isku soo uruurinaysa: Students, Teachers, Books iyo Fees

import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";

function Reports() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [books, setBooks] = useState([]);
  const [fees, setFees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all data
  const fetchAll = async () => {
    setLoading(true);
    setError("");
    try {
      const [sRes, tRes, bRes, fRes] = await Promise.all([
        axios.get("http://localhost:6200/read/student"),
        axios.get("http://localhost:6200/read/Teacher"),
        axios.get("http://localhost:6200/read/books"),
        axios.get("http://localhost:6200/fee/read"),
      ]);

      setStudents(sRes.data || []);
      setTeachers(tRes.data || []);
      setBooks(bRes.data || []);
      setFees(fRes.data || []);
    } catch (err) {
      setError("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // Calculate total fees
  const totalFees = fees.reduce((sum, f) => sum + (Number(f.amount) || 0), 0);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">Reports</h1>
          <button
            onClick={fetchAll}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Refresh
          </button>
        </div>

        {loading ? (
          <div className="text-center py-10">Loading...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-gray-500">Students</p>
                <p className="text-2xl font-bold">{students.length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-gray-500">Teachers</p>
                <p className="text-2xl font-bold">{teachers.length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-gray-500">Books</p>
                <p className="text-2xl font-bold">{books.length}</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-gray-500">Total Fees</p>
                <p className="text-2xl font-bold">${totalFees.toLocaleString()}</p>
              </div>
            </div>

            {/* Latest Fees Table */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Latest Fees</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-left">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-3 py-2">Student</th>
                      <th className="px-3 py-2">Class</th>
                      <th className="px-3 py-2">Amount</th>
                      <th className="px-3 py-2">Month</th>
                      <th className="px-3 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fees.slice(0, 10).map((f) => (
                      <tr key={f._id} className="border-b">
                        <td className="px-3 py-2">{f.student?.Name || "—"}</td>
                        <td className="px-3 py-2">{f.student?.Class || "—"}</td>
                        <td className="px-3 py-2">{f.amount}</td>
                        <td className="px-3 py-2">{f.month}</td>
                        <td className="px-3 py-2">
                          {f.paidDate ? new Date(f.paidDate).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                    {fees.length === 0 && (
                      <tr>
                        <td colSpan="5" className="p-4 text-center text-gray-500">
                          No fee records
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Reports;