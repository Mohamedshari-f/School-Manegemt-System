import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <div
        className={`fixed bg-green-700 top-0 left-0 h-screen ${
          collapsed ? "w-20" : "w-64"
        } text-white p-6 shadow-xl flex flex-col justify-between transition-all duration-300`}
      >
        {/* Top Section */}
        <div>
          {/* Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white text-2xl mb-6 focus:outline-none ml-48"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <ul className="flex flex-col gap-3 list-none">
            <Link to="/Reports"> <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
              <i className="fa-solid fa-house text-xl"></i>
              {!collapsed && (
                <span className="font-semibold text-lg">Dashboard</span>
              )}
            </li></Link>

            <Link to="/Student">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-user-graduate text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Students</span>
                )}
              </li>
            </Link>

            <Link to="/Teachers">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-user-plus text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Teacher</span>
                )}
              </li>
            </Link>

            <Link to="/Fee">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-regular fa-money-bill-1 text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Fees</span>
                )}
              </li>
            </Link>

            <NavLink to="/Assignment">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-book text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Assignment</span>
                )}
              </li>
            </NavLink>

            <Link to="/Courses">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-book text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Courses</span>
                )}
              </li>
            </Link>

            <Link to="/Attendance">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-user text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Attendance</span>
                )}
              </li>
            </Link>

            <Link to="/ExamAdmin">
              <li className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-white/20 hover:scale-105 transition transform duration-200">
                <i className="fa-solid fa-gear text-xl"></i>
                {!collapsed && (
                  <span className="font-semibold text-lg">Exam</span>
                )}
              </li>
            </Link>
          </ul>
        </div>

        {/* Bottom Section (Logout) */}
       
      </div>
    </>
  );
}

export default Dashboard;
