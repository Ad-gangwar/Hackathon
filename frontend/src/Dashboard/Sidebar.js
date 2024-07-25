// src/components/Sidebar.js
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'

const Sidebar = () => {
  const navigate = useNavigate();

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
      <div className="p-4 text-center text-3xl font-bold">AstraNex</div>
      <nav>
        <ul>
          <li className="p-4">
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-gray-300"
              }
            >
              My Profile
            </NavLink>
          </li>
          <li className="p-4">
            <NavLink
              to="enrolled-courses"
              className={({ isActive }) =>
                isActive ? "text-yellow-500" : "text-gray-300"
              }
            >
              Enrolled Courses
            </NavLink>
          </li>
          <button className="btn m-4 py-2 w-100 rounded-lg" onClick={handleLogout}>Logout</button>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
