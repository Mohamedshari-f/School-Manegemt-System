
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
function DisplayS(){
    const [data,setData]=useState([])
    const handlePost=()=>{
       
        axios.get("http://localhost:6200/read/student").then((res)=>{
            setData(res.data)
        })
    }
    useEffect(()=>{
        handlePost()  
        
    },[])
     const  handleDelete=(id)=>{
    axios.delete(`http://localhost:6200/delete/student/${id}`)
.then(()=>{
        alert("succes deleted")
        handlePost()
    })
    }
    return <>
 <Link to="/addstudent" ><button className="bg-orange-500 px-5  rounded-lg my- mt-20 text-white ml-96 font-semibold text-2xl ">Add New Students </button></Link>

      <table className="text-center ml-10 mt-10 w-[900px] ">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-4 py-3 text-center font-semibold">Name</th>
              <th class="px-4 py-3 text-center font-semibold">Guardian Name</th>
              <th class="px-4 py-3 text-center font-semibold">Gender</th>
              <th class="px-4 py-3 text-center font-semibold">Phone Number</th>
              <th class="px-4 py-3 text-center font-semibold">Class</th>
              <th class="px-4 py-3 text-center font-semibold">Options</th>
            </tr>
          </thead>
{
    data.map((item)=>{
        return <tbody class="text-center">
            <tr class="hover:bg-blue-50">
              <td class="px-4 py-3">{item.Name}</td>
              <td class="px-4 py-3">{item.GuardianName}</td>
              <td class="px-4 py-3">{item.Gender}</td>
              <td class="px-4 py-3">{item.Phonenumber}</td>
              <td class="px-4 py-3">{item.Class}</td>
              <td class="px-4 py-3">
                <div>
<Link to={`/UpdateStudent/${item._id}`} > <i className="fa-solid fa-edit text-green-800"></i> </Link>
<i   onClick={() => handleDelete(item._id)}   className="fa-solid fa-trash text-red-700 cursor-pointer"></i>

                </div>
              </td>

            </tr>
           
          </tbody>
    })
}
        </table>
    </>
}
export default DisplayS