import React from "react";

const SignUpForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-600">AstraNex</h1>
          <p className="text-xl text-gray-600 mt-2">Online Registration</p>
        </div>
        <form>  
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-600 mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-600 mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full p-2 rounded border border-gray-300"
                type="text"
                id="lastName"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="company">
              Company (if applicable)
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="text"
              id="company"
              placeholder="Company"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-1" htmlFor="address">
              Physical Address
            </label>
            <input
              className="w-full p-2 rounded border border-gray-300"
              type="text"
              id="address"
              placeholder="Physical Address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-1" htmlFor="dob">
              Date of Birth
            </label>
            <div className="flex space-x-4">
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobMonth"
              >
                <option>Month</option>
                <option>January</option>
                <option>February</option>
                {/* Add other months */}
              </select>
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobDay"
              >
                <option>Day</option>
                <option>1</option>
                <option>2</option>
                {/* Add other days */}
              </select>
              <select
                className="w-1/3 p-2 rounded border border-gray-300"
                id="dobYear"
              >
                <option>Year</option>
                <option>2023</option>
                <option>2022</option>
                {/* Add other years */}
              </select>
            </div>
          </div>
          <button
            className="w-full p-3 rounded bg-green-600 text-white hover:bg-green-700"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
