import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { makeUnauthPostReq } from '../utils/serverHelper';
import HashLoader from 'react-spinners/HashLoader';

const LoginPage = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = { email, password };
    try {
      const response = await makeUnauthPostReq('/auth/login', data);
      if (response && !response.err) {
        // Assuming the token is directly present in the response object
        const token = response.token;
        //setting time for the expiry of the token
        const date = new Date();
        date.setDate(date.getDate() + 30);
        localStorage.setItem("eduToken", token);
        localStorage.setItem("eduUser", JSON.stringify(response.data));
        let role = response.data.role;
        toast.success("Logged in Successfully!");
        
        if(role === "student"){
          navigate("/dashboard")
        }
        else if(role === "college"){
          navigate("/Admin")
        }
        else if(role === "teacher"){
          navigate("/")
        }
        
      } else {
        toast.error("Enter valid Credentials!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false regardless of success or error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-[800px] h-[600px] bg-white rounded-xl rounded-bl-[65px] overflow-hidden">
        <div className="w-2/5 bg-gradient-to-b from-teal-500 to-teal-700 flex items-center justify-center m-3 rounded-xl rounded-bl-[65px] rounded-tr-[65px]">
          <div className="text-white text-6xl font-bold">A</div>
        </div>
        <div className="w-3/5 p-6 px-8 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are <span className="text-teal-600">AstraNex</span>
          </h2>
          <p className="text-gray-600 mb-6">
            <span className="text-2xl">👋</span> Welcome back! Log in to your account.
          </p>
          <form>
            <div className="mb-8">
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 rounded-lg bg-gray-200 text-gray-900"
                type="email"
                placeholder="Enter your Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-12">
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-3 rounded-lg bg-gray-200 text-gray-900"
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full p-3 rounded-full bg-teal-600 text-white hover:bg-teal-700"
              type="submit" onClick={handleSubmit}
            >
              {loading ? <HashLoader size={35} color='white' /> : 'Login'}
            </button>
          </form>
          <div className="text-gray-600 mt-6">Forgot password?</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
