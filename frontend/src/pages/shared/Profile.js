import React from "react";

const Profile = () => {
  return (
    <div>
      <h1 className="text-4xl mb-6 font-bold">My Profile</h1>
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl">
            MS
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-semibold">Mss Ss</h2>
            <p className="text-gray-400">immanjot01@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">About</h3>
        <p className="text-gray-400">Write Something About Yourself</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
        <p className="text-gray-400">First Name: Mss</p>
        <p className="text-gray-400">Last Name: Ss</p>
        <p className="text-gray-400">Email: immanjot01@gmail.com</p>
        <p className="text-gray-400">Account Type: Student</p>
        <p className="text-gray-400">Date of Birth: January 1, 1970</p>
      </div>
    </div>
  );
};

export default Profile;
