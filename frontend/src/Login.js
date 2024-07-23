import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex w-[800px] h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="w-1/3 bg-gradient-to-b from-teal-500 to-teal-700 flex items-center justify-center">
          <div className="text-white text-6xl font-bold">A</div>
        </div>
        <div className="w-2/3 p-6 mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            We are <span className="text-teal-600">AstraNex</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Welcome back! Log in to your account.
          </p>
          <form>
            <div className="mb-8">
              <label className="block text-gray-600 mb-1" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-2 rounded bg-gray-200 text-gray-900"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-12">
              <label className="block text-gray-600 mb-1" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 rounded bg-gray-200 text-gray-900"
                type="password"
                id="password"
              />
            </div>
            <Link to={"/Admin"}>
              <button
                className="w-full p-2 rounded bg-teal-600 text-white hover:bg-teal-700"
                type="submit"
              >
                Log in
              </button>
            </Link>
          </form>
          <div className="text-gray-600 mt-6">Forgot password?</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
