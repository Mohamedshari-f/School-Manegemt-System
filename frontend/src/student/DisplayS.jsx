// src/pages/DisplayS.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

function DisplayS() {
  const [data, setData] = useState([]);
  const [filterClass, setFilterClass] = useState(""); // class filter

  const handlePost = () => {
    axios
      .get("http://localhost:6200/read/student")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    handlePost();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:6200/delete/student/${id}`)
      .then(() => {
        alert("Successfully deleted");
        handlePost();
      })
      .catch((err) => console.error(err));
  };

  // filter data (kaliya haddii class la doorto)
  const filteredData = filterClass
    ? data.filter((item) => item.Class === filterClass)
    : [];

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <Dashboard />
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-700">👨‍🎓 Students</h1>
          <Link to="/Adds">
            <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-white font-semibold">
              ➕ Add New Student
            </button>
          </Link>
        </div>

        {/* Filter by class */}
        <div className="mb-4">
          <select
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm"
          >
            <option value="">Select Class</option>
            <option value="Class One">graphic degsign</option>
            <option value="Class Two">computer Application </option>
            <option value="Class Three">Video editing</option>
            <option value="Class Four">motion graphs</option>
            <option value="Class Five">web development</option>
          </select>
        </div>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border text-center">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Guardian Name</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Phone Number</th>
                <th className="px-4 py-3">Class</th>
                <th className="px-4 py-3">Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, idx) => (
                <tr
                  key={item._id}
                  className={`hover:bg-gray-50 ${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3">{item.Name}</td>
                  <td className="px-4 py-3">{item.GuardianName}</td>
                  <td className="px-4 py-3">{item.Gender}</td>
                  <td className="px-4 py-3">{item.Phonenumber}</td>
                  <td className="px-4 py-3">{item.Class}</td>
                  <td className="px-4 py-3 flex justify-center gap-4">
                    <Link to={`/update/student/${item._id}`}>
                      <i className="fa-solid fa-edit text-green-700 cursor-pointer"></i>
                    </Link>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="fa-solid fa-trash text-red-600 cursor-pointer"
                    ></i>
                  </td>
                </tr>
              ))}
              {filterClass && filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
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

export default DisplayS;
