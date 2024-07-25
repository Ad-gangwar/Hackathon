// src/components/StudentDashboard.js
import React from "react";
import { Outlet } from "react-router-dom";

import SidebarTeacher from "./SidebarTeacher";

const TeacherDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <SidebarTeacher />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherDashboard;
