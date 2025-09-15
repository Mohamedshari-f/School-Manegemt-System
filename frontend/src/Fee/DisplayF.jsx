import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DisplayFee() {
  const [data, setData] = useState([]);

  const handleGet = () => {
    axios.get("http://localhost:6200/read/fee").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    handleGet();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:6200/delete/fee/${id}`).then(() => {
      alert("✅ Fee record deleted successfully");
      handleGet();
    });
  };

  return (
    <>
      <Link to="/addfee">
        <button className="bg-orange-500 px-5 rounded-lg my- mt-20 text-white ml-96 font-semibold text-2xl">
          Add New Fee
        </button>
      </Link>

      <table className="text-center ml-10 mt-10 w-[1000px] border">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-3">Student Name</th>
            <th className="px-4 py-3">Student ID</th>
            <th className="px-4 py-3">Class</th>
            <th className="px-4 py-3">Month</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Paid Date</th>
            <th className="px-4 py-3">Options</th>
          </tr>
        </thead>

        {data.map((item) => {
          return (
            <tbody key={item._id} className="text-center">
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3">{item.StudentName}</td>
                <td className="px-4 py-3">{item.StudentID}</td>
                <td className="px-4 py-3">{item.Class}</td>
                <td className="px-4 py-3">{item.Month}</td>
                <td className="px-4 py-3 font-semibold text-green-700">
                  ${item.Amount}
                </td>
                <td className="px-4 py-3">{item.PaidDate}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-3">
                    <Link to={`/update/fee/${item._id}`}>
                      <i className="fa-solid fa-edit text-green-700 cursor-pointer"></i>
                    </Link>
                    <i
                      onClick={() => handleDelete(item._id)}
                      className="fa-solid fa-trash text-red-700 cursor-pointer"
                    ></i>
                  </div>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}
export default DisplayFee;
