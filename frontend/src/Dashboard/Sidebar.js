// src/components/Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
          <li className="p-4 text-gray-300">Logout</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
