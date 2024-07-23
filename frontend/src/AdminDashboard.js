// src/components/AdminDashboard.js

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = ({ admin }) => {
  const navigate = useNavigate();

  const handleRegisterStudent = () => {
    navigate("/register-student");
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <header className="bg-gradient-to-r from-green-500 to-teal-500 p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">AstraNex</div>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">
            Features
          </a>
          <a href="#pricing" className="hover:underline">
            Pricing
          </a>
          <a href="#about" className="hover:underline">
            About Us
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <button className="bg-white text-gray-800 px-4 py-2 rounded">
            Get Started
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center py-20">
        <div className="bg-gray-900 shadow-md rounded p-8 w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Admin Dashboard
          </h1>
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Admin Info</h2>
            <p>
              <strong>Name:</strong> Name
            </p>
            <p>
              <strong>Email:</strong> Email
            </p>
            <p>
              <strong>Role:</strong> Role
            </p>
            {/* Add more fields as needed */}
          </div>
          <div className="flex justify-center">
            <Link to="/SignUp">
              <button
                onClick={handleRegisterStudent}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              >
                Register a Student
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
