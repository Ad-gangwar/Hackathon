import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Images/logo.png'
export default function Header() {
  const token = localStorage.getItem('eduToken');
  const user = JSON.parse(localStorage.getItem('eduUser'));
  const [redirectPath, setRedirectPath] = useState('/login');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      if (user.role === 'student') {
        setRedirectPath('/dashboard')
      }
      else if (user.role === 'teacher') {
        setRedirectPath('/teacher-dashboard');
      }
      else if (user.role === 'college') {
        setRedirectPath('/Admin');
      }
    }
  }, [token, user]);

  return (
    <div>
        <header className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white shadow-2xl">
        <Link to="/"><div className='flex items-center gap-2'>
            <img src={logo} className=' max-w-12'></img>
            <h1 className=' text-3xl font-bold'>AstraNex</h1>
          </div></Link>
        <nav className="space-x-6">
          <a
            href="#features"
            className="hover:text-teal-200 font-md transition duration-300"
          >
            Features
          </a>
          <a
            href="/about"
            className="hover:text-teal-200 font-md "
          >
            About Us
          </a>
          <a
            href="/contact"
            className="hover:text-teal-200 font-md"
          >
            Contact
          </a>
            <button className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300" onClick={() => navigate(redirectPath)}>
              {token ? 'My Dashboard' : 'Get Started'}
            </button>
        </nav>
      </header>
    </div>
  )
}
