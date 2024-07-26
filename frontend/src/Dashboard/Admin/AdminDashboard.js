// src/components/AdminDashboard.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../../pages/shared/Header';
import {toast} from 'react-hot-toast'

const AdminDashboard = ({ admin }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('eduUser'));

  const handleRegisterStudent = () => {
    navigate("/register-student");
  };

  const handleLogout = ()=>{
    localStorage.removeItem('eduToken');
    localStorage.removeItem('eduUser');
    toast.success('Logged out successfully!');
    navigate("/");
  }

  return (
      <div className="min-h-screen bg-gray-800 text-white">
      <Header />
        <section className="flex flex-col items-center justify-center py-20">
          <div className="bg-gray-900 shadow-md rounded p-8 w-full max-w-lg">
            <h1 className="text-3xl font-bold mb-4 text-center">
              Admin Dashboard
            </h1>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Admin Info</h2>
              <p>
                <strong>College Name:</strong> IIIT Kota
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              {/* Add more fields as needed */}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleRegisterStudent}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Register a Student
              </button>
            </div>
            <button className="btn" onClick={handleLogout}>Logout</button>
          </div>
        </section>
      </div>
  );
};

export default AdminDashboard;
