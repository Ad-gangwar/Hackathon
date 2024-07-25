// src/components/EnrolledCourses.js
import React from "react";

const EnrolledCourses = () => {
  return (
    <div>
      <h1 className="text-3xl mb-4">Enrolled Courses</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <h3 className="text-lg">Course Name</h3>
          <p>Full Stack MERN Developer</p>
        </div>
        <button className="btn">Click me</button>
      </div>
    </div>
  );
};

export default EnrolledCourses;
