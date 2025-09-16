import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

function Assignment() {
  const [data, setData] = useState([]);

  // Read assignments
  const handleReadData = () => {
    axios.post("http://localhost:6200/read/Assignment").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleReadData();
  }, []);

  // Delete single assignment
  const handleDelete = (id) => {
    axios.delete(`http://localhost:6200/delete/Assignment/${id}`).then(() => {
      alert("Success delete");
      handleReadData();
    });
  };

  return <>
  <div className="flex ml-64">
<Dashboard/>
  (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl text-black font-semibold">Assignment List</h2>
        <Link to="/AddAssignment">
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-semibold text-lg shadow-md transition">
            + Add New Assignment
          </button>
        </Link>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-600">
            <tr>
              <th className="py-3 px-4 text-left text-white font-semibold">#</th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Image
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Name
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Date
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Assignment Title
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Course
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Class
              </th>
              <th className="py-3 px-4 text-left text-white font-semibold">
                Status
              </th>
              <th className="py-3 px-4 text-left  text-white font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
              <tr
                key={items._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={`http://localhost:6200/allImages/${items.prImage}`}
                    alt="assignment"
                    className="w-12 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-4">{items.name}</td>
                <td className="py-3 px-4">{items.date}</td>
                <td className="py-3 px-4">{items.AssigmentTitle}</td>
                <td className="py-3 px-4">{items.Course}</td>
                <td className="py-3 px-4">{items.Class}</td>
                <td className="py-3 px-4">
                  <span
                    className={`${
                      items.status === "Available"
                        ? "text-green-600"
                        : "text-red-500"
                    } font-semibold`}
                  >
                    {items.status}
                  </span>
                </td>
                <td className="py-3 px-4 flex gap-3">
                  <Link to={`/update/${items._id}`}>
                    <button className="text-green-500 mt-2 text-xl">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(items._id)}
                    className="text-red-500 mt-2 text-xl"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  </div>

  </>

}


export default Assignment;
