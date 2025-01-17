// src/components/Sidebar.js
import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('eduUser'));

  useEffect(() => {
    // Navigate to the "profile" route when the component mounts
    navigate("profile");
  }, [navigate]);

  const handleLogout = ()=>{
    localStorage.removeItem('eduToken');
    localStorage.removeItem('eduUser');
    toast.success('Logged out successfully!');
    navigate("/");
  }

  return (
    <aside className="w-64 bg-gray-800">
      <Link to="/"><div className="p-6 text-center text-3xl font-bold border-b-2 border-gray-700">AstraNex</div></Link>
      <nav className="ps-4 mt-5 border-b-2 border-gray-700">
        <ul>
          <li className="p-4 w-100">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? "text-[#ffd60a] text-xl font-bold" : "text-gray-300"
              }
            >
              My Profile
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink
              to={user.role === "student" ? "enrolled-courses" : "schedule-classes"}
              className={({ isActive }) =>
                isActive ? "text-[#ffd60a] text-xl font-bold" : "text-gray-300"
              }
            >
              {user.role === "student" ? "Enrolled Courses" : "Schedule Classes"}
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="btn m-4 py-[10px] mt-12 ml-8 w-100 rounded-lg bg-yellow-400 text-black text-[17px] hover:bg-yellow-500" onClick={handleLogout}>Logout</button>
    </aside>
  );
};

export default Sidebar;
