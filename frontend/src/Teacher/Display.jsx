
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
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
     const  handleDelete=(id)=>{
    axios.delete(`http://localhost:6200/delete/Teacher/${id}`)
.then(()=>{
        alert("succes deleted")
        handlePost()
    })
    }
    return <>
 <Link to="/addteacher" ><button className="bg-orange-500 px-5  rounded-lg my- mt-20 text-white ml-96 font-semibold text-2xl ">Add New Teacher </button></Link>

      <table className="text-center ml-10 mt-10 w-[900px] ">
          <thead class="bg-blue-600 text-white">
            <tr>
              <th class="px-4 py-3 text-center font-semibold">Name</th>
              <th class="px-4 py-3 text-center font-semibold">Qualification</th>
              <th class="px-4 py-3 text-center font-semibold">joining</th>
              <th class="px-4 py-3 text-center font-semibold">Gender</th>
              <th class="px-4 py-3 text-center font-semibold">Phone</th>
              <th class="px-4 py-3 text-center font-semibold">Class</th>
              <th class="px-4 py-3 text-center font-semibold">Course</th>
              <th class="px-4 py-3 text-center font-semibold">Options</th>
            </tr>
          </thead>
{
    data.map((item)=>{
        return <tbody class="text-center">
            <tr class="hover:bg-blue-50">
              <td class="px-4 py-3">{item.Name}</td>
              <td class="px-4 py-3">{item.Qualification}</td>
              <td class="px-4 py-3">{item.Joining}</td>
              <td class="px-4 py-3">{item.Gender}</td>
              <td class="px-4 py-3">{item.Phone}</td>
              <td class="px-4 py-3">{item.Class}</td>
              <td class="px-4 py-3">{item.Course}</td>
              <td class="px-4 py-3">
                <div>
<Link to={`/update/Teacher/${item._id}`}>
  <i className="fa-solid fa-edit text-green-800"></i>
</Link>
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
export default DisplayT