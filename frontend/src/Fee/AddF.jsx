import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";

function Fee() {
  const [fees, setFees] = useState([]);
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    studentId: "",
    amount: "",
    month: "",
    paidDate: "",
  });

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const fetchFees = () => {
    axios
      .get("http://localhost:6200/fee/read")
      .then((res) => setFees(res.data))
      .catch((err) => console.error(err));
  };

  const fetchStudents = () => {
    axios
      .get("http://localhost:6200/read/student")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFees();
    fetchStudents();
  }, []);

  const handleSubmit = () => {
    axios
      .post("http://localhost:6200/fee/create", form)
      .then(() => {
        fetchFees();
        setForm({ studentId: "", amount: "", month: "", paidDate: "" });
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:6200/fee/delete/${id}`)
      .then(() => fetchFees())
      .catch((err) => console.error(err));
  };

  // Print Receipt
  const handlePrint = (fee) => {
    const receiptWindow = window.open("", "_blank", "width=400,height=600");
    const receiptHTML = `
      <html>
        <head>
          <title>Fee Receipt</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .receipt {
              border: 2px solid #2563eb;
              border-radius: 10px;
              padding: 20px;
              text-align: center;
            }
            h2 { color: #2563eb; margin-bottom: 10px; }
            .info { text-align: left; margin-top: 15px; }
            .info p { margin: 4px 0; font-size: 14px; }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: #555;
              border-top: 1px dashed #ccc;
              padding-top: 10px;
            }
          </style>
        </head>
        <body>
          <div class="receipt">
            <h2>School Fee Receipt</h2>
            <div class="info">
              <p><strong>Student:</strong> ${fee.student?.Name || ""}</p>
              <p><strong>Class:</strong> ${fee.student?.Class || ""}</p>
              <p><strong>Amount:</strong> $${fee.amount}</p>
              <p><strong>Month:</strong> ${fee.month}</p>
              <p><strong>Paid Date:</strong> ${fee.paidDate ? new Date(fee.paidDate).toLocaleDateString() : ""}</p>
            </div>
            <div class="footer">
              <p>Thank you for your payment!</p>
              <p>Powered by School Management System</p>
            </div>
          </div>
          <script>
            window.print();
          </script>
        </body>
      </html>
    `;
    receiptWindow.document.write(receiptHTML);
    receiptWindow.document.close();
  };

  return (
    <div className="flex">
      {/* Left side - Dashboard */}
      <div className="w-1/4 bg-white min-h-screen">
        <Dashboard />
      </div>

      {/* Right side - Fee Management */}
      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Fee Management
        </h1>

        {/* Form */}
        <div className="flex flex-wrap gap-3 mb-6">
          <select
            value={form.studentId}
            onChange={(e) => setForm({ ...form, studentId: e.target.value })}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Student</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>
                {s.Name} - {s.Class}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Amount"
            value={form.amount}
            onChange={(e) => setForm({ ...form, amount: e.target.value })}
            className="border px-3 py-2 rounded"
          />

          <select
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.target.value })}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={form.paidDate}
            onChange={(e) => setForm({ ...form, paidDate: e.target.value })}
            className="border px-3 py-2 rounded"
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>

        {/* Table */}
        <table className="min-w-full border shadow rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Month</th>
              <th className="px-4 py-2 text-left">Paid Date</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {fees.map((f) => (
              <tr key={f._id} className="hover:bg-gray-50">
                <td className="px-4 py-2">{f.student?.Name}</td>
                <td className="px-4 py-2">{f.student?.Class}</td>
                <td className="px-4 py-2">{f.amount}</td>
                <td className="px-4 py-2">{f.month}</td>
                <td className="px-4 py-2">
                  {f.paidDate ? new Date(f.paidDate).toLocaleDateString() : ""}
                </td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    onClick={() => handleDelete(f._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handlePrint(f)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Print Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fee;
