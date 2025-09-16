import { Link, NavLink } from "react-router-dom";

function MainPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r ">
      <div className="bg-white p-10 rounded-2xl shadow-2xl flex flex-col gap-6 w-[350px] text-center">
        <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
        <p className="text-gray-600">Choose an option to continue</p>

       <NavLink to="/Login"><button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition">
          Login
        </button>
</NavLink> 
      <Link to="/Reg"> <button className="w-full bg-pink-600 text-white font-semibold py-3 rounded-lg hover:bg-pink-700 transition">
          Register
        </button></Link> 
      </div>
    </div>
  );
}

export default MainPage
