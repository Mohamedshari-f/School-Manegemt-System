import { Link, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div className="fixed bg-blue-500 top-0 left-0 h-screen w-64  bg-green-800 text-white p-6 shadow-xl flex flex-col justify-start gap-4">
      <ul className="flex flex-col gap-3 list-none">
        <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-house text-xl"></i>
          <span className="font-semibold text-lg">Dashboard</span>
        </li>

        <Link to="/Student">
          <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
            <i className="fa-solid fa-user-graduate text-xl"></i>
            <span className="font-semibold text-lg">Students</span>
          </li>
        </Link>

        <Link to="/Teachers">
          <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
            <i className="fa-solid fa-user-plus text-xl"></i>
            <span className="font-semibold text-lg">Teacher</span>
          </li>
        </Link>

        <Link to="/Fee">
          <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
            <i className="fa-regular fa-money-bill-1 text-xl"></i>
            <span className="font-semibold text-lg">Fees</span>
          </li>
        </Link>

        <NavLink to="/Assingment">
          <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
            <i className="fa-solid fa-book text-xl"></i>
            <span className="font-semibold text-lg">Assignment</span>
          </li>
        </NavLink>


       <Link to="/Courses"> <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-book text-xl"></i>
          <span className="font-semibold text-lg">Courses</span>
        </li></Link>

        <Link to="/Attendance"><li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-user text-xl"></i>
          <span className="font-semibold text-lg">Attendance</span>
        </li></Link>

      <Link to="/Exam"><li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-gear text-xl"></i>
          <span className="font-semibold text-lg">Exam</span>
        </li> </Link>

      <Link to="/StudentRegister"> <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-book text-xl"></i>
          <span className="font-semibold text-lg">Subjects</span>
        </li></Link> 

        <Link to="/Attendance">
          <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
            <i className="fa-solid fa-user text-xl"></i>
            <span className="font-semibold text-lg">Attendance</span>
          </li>
        </Link>

       
 <Link to="/ExamAdmin">
        <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
          <i className="fa-solid fa-right-from-bracket text-xl"></i>
          <span className="font-semibold text-lg">Logout</span>
        </li></Link>

        
      </ul>
    </div>
  );
}

export default Dashboard;
