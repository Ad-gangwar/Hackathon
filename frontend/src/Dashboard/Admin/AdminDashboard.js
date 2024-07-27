// src/components/AdminDashboard.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from '../../pages/shared/Header';
import { toast } from 'react-hot-toast';
import Footer from '../../pages/shared/Footer';

const AdminDashboard = ({ admin }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('eduUser'));

  const handleRegisterStudent = () => {
    navigate("/register-student");
  };

  const handleLogout = () => {
    localStorage.removeItem('eduToken');
    localStorage.removeItem('eduUser');
    toast.success('Logged out successfully!');
    navigate("/");
  }

  return (
    <div className=" bg-gray-800 text-white min-h-screen">
      <Header />
      <section className="flex flex-col items-center justify-center py-[100px] px-4 my-[90px]">
        <div className="bg-gray-900 shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Admin Dashboard
          </h1>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Admin Info</h2>
            <div className="space-y-2">
              <p>
                <strong className="font-medium">College Name:</strong> IIIT Kota
              </p>
              <p>
                <strong className="font-medium">Email:</strong> {user.email}
              </p>
              {/* Add more fields as needed */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleRegisterStudent}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
              Register a Student
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AdminDashboard;
