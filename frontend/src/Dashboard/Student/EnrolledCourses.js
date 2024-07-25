// src/components/EnrolledCourses.js
import React, { useState } from "react";

const EnrolledCourses = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const student = JSON.parse(localStorage.getItem("eduUser"));
  const handleClick = async () => {
    if (!student || !student.photo) {
      setError("Student information is missing or incomplete.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/check/recognize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ photo: student.photo, name: student.name }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response:", data);

      // Optional: handle success feedback
      alert("Recognition process completed. Check console for details.");
    } catch (err) {
      console.error("Error during recognition:", err);
      setError("An error occurred during recognition. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Enrolled Courses</h1>
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="mb-4">
          <h3 className="text-lg">Course Name</h3>
          <p>Full Stack MERN Developer</p>
        </div>
        <button
          className={`btn ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? "Processing..." : "Click me"}
        </button>
        {error && (
          <div className="mt-4 p-2 bg-red-500 text-white rounded">{error}</div>
        )}
      </div>
    </div>
  );
};

export default EnrolledCourses;
