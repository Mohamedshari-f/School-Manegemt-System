import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddFee() {
  const [StudentName, setStudentName] = useState("");
  const [StudentID, setStudentID] = useState("");
  const [Class, setClass] = useState("");
  const [Month, setMonth] = useState("");
  const [Amount, setAmount] = useState("");
  const [PaidDate, setPaidDate] = useState("");

  const navigate = useNavigate();

  const handlePost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:6200/create/fee", {
        StudentName,
        StudentID,
        Class,
        Month,
        Amount,
        PaidDate,
      })
      .then(() => {
        alert("Fee payment recorded successfully ✅");
        navigate("/Fees"); 
      });
  };

  return (
    <form className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg p-6 rounded-xl w-96 border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Add Fee Payment
        </h2>

        <input
          value={StudentName}
          onChange={(e) => setStudentName(e.target.value)}
          type="text"
          placeholder="Enter Student Name"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

        <input
          value={StudentID}
          onChange={(e) => setStudentID(e.target.value)}
          type="text"
          placeholder="Enter Student ID"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

        <input
          value={Class}
          onChange={(e) => setClass(e.target.value)}
          type="text"
          placeholder="Enter Class"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

        <input
          value={Month}
          onChange={(e) => setMonth(e.target.value)}
          type="text"
          placeholder="Enter Month (e.g. September)"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

        <input
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          placeholder="Enter Amount"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

        <input
          value={PaidDate}
          onChange={(e) => setPaidDate(e.target.value)}
          type="date"
          className="w-80 mb-3 px-3 py-2 rounded border"
        />

       <Link to="/Cards"><button
          onClick={handlePost}
          className="w-80 bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
        >
          Save Fee
        </button></Link>
      </div>
    </form>
  );
}
export default AddFee;
