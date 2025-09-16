import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard";

function DisplayT(){
    const [data,setData]=useState([])

    const handlePost=()=>{
        axios.get("http://localhost:6200/read/Teacher").then((res)=>{
            setData(res.data)
        })
    }

    useEffect(()=>{
        handlePost()  
    },[])

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:6200/delete/Teacher/${id}`)
        .then(()=>{
            alert("succes deleted")
            handlePost()
        })
    }

    return (
      <div className="flex min-h-screen bg-white"> 
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white">
          <Dashboard/>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <Link to="/addteacher">
            <button className="bg-orange-500 px-5 ml-[700px] rounded-lg mt-5 text-white font-semibold text-2xl">
              ➕  Add New Teacher 
            </button>
          </Link>

          <table className="text-center mt-10 w-full border">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Qualification</th>
                <th className="px-4 py-3 font-semibold">Joining</th>
                <th className="px-4 py-3 font-semibold">Gender</th>
                <th className="px-4 py-3 font-semibold">Phone</th>
                <th className="px-4 py-3 font-semibold">Class</th>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Options</th>
              </tr>
            </thead>

            {data.map((item)=>(
              <tbody key={item._id} className="text-center">
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-3">{item.Name}</td>
                  <td className="px-4 py-3">{item.Qualification}</td>
                  <td className="px-4 py-3">{item.Joining}</td>
                  <td className="px-4 py-3">{item.Gender}</td>
                  <td className="px-4 py-3">{item.Phone}</td>
                  <td className="px-4 py-3">{item.Class}</td>
                  <td className="px-4 py-3">{item.Course}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3">
                      <Link to={`/update/Teacher/${item._id}`}>
                        <i className="fa-solid fa-edit text-green-800"></i>
                      </Link>
                      <i 
                        onClick={() => handleDelete(item._id)} 
                        className="fa-solid fa-trash text-red-700 cursor-pointer"
                      ></i>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    )
}
export default DisplayT