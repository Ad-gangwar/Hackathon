// src/components/EnrolledCourses.js
import React, { useState, useEffect } from "react";
import { toast } from 'react-hot-toast';
import { makeUnauthGetReq } from "../../utils/serverHelper";
import { useNavigate } from "react-router-dom";

const EnrolledCourses = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await makeUnauthGetReq("/course/");
        console.log(response.data);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const student = JSON.parse(localStorage.getItem("eduUser"));
  const handleClick = async (roomId) => {
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
      toast.success("Recognition process completed. Check console for details.");
      navigate(`https://google-meet-clone-lxn0.onrender.com/${roomId}`);
    } catch (err) {
      console.error("Error during recognition:", err);
      setError("An error occurred during recognition. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 text-white">
      {courses.map((course) => (
        <div
          key={course._id}
          className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs w-full my-4 flex flex-col justify-between"
        >
          <h2 className="text-xl font-semibold">{course.name} Class</h2>
          <p className="text_para mb-3">{course.code}</p>
          <p className="mb-2">Teacher: {course.teacher}</p>
          <p>Timing: {course.timing}</p>
          <button
            className="btn text-[18px] py-[12px] rounded-lg bg-yellow-500 mt-5 hover:bg-yellow-600"
            onClick={() => handleClick(course.roomId)}
          >
            Take Class
          </button>
        </div>
      ))}
    </div>
  );
};

export default EnrolledCourses;
