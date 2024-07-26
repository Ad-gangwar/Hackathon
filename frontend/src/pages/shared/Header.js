import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem('eduToken');
  const user = JSON.parse(localStorage.getItem('eduUser'));
  const [redirectPath, setRedirectPath] = useState('/login');

  useEffect(() => {
    if (token) {
      if (user.role === 'student') {
        setRedirectPath('/dashboard')
      }
      else if (user.role === 'teacher') {
        setRedirectPath('teacher-dashboard');
      }
      else if (user.role === 'college') {
        setRedirectPath('/Admin');
      }
    }
  }, [token]);

  return (
    <div>
        <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-md">
        <Link to="/"><div className="text-3xl font-extrabold">AstraNex</div></Link>
        <nav className="space-x-6">
          <a
            href="#features"
            className="hover:text-teal-200 transition duration-300"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-teal-200 transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="hover:text-teal-200 transition duration-300"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="hover:text-teal-200 transition duration-300"
          >
            Contact
          </a>
          <Link to={redirectPath}>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300">
              {token ? 'My Dashboard' : 'Get Started'}
            </button>
          </Link>
        </nav>
      </header>
    </div>
  )
}