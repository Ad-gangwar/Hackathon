import React, { useEffect, useState } from "react";
import { makeUnauthGetReq, makeUnauthPostReq } from "../../utils/serverHelper";
import { toast } from 'react-hot-toast';

const ScheduleClass = () => {
  const [courses, setCourses] = useState([]);
  const [updatedData, setUpdatedData] = useState({});

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

  const handleUpdate = async (e, courseId) => {
    e.preventDefault();
    const { roomId, timing } = updatedData[courseId] || {};

    if (!roomId || !timing) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await makeUnauthPostReq(`/course/update`, { courseId, roomId, timing });
      if (response.success) {
        toast.success("Successfully updated!");
      } else {
        toast.error("Failed to update course.");
      }
    } catch (error) {
      console.error("Error updating course:", error);
      toast.error("Failed to update course.");
    }
  };

  const handleChange = (e, courseId) => {
    const { name, value } = e.target;
    setUpdatedData((prevState) => ({
      ...prevState,
      [courseId]: {
        ...prevState[courseId],
        [name]: value
      }
    }));
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
          <label className="form-label">
            Schedule Time:
          </label>
          <input
            type="time"
            className="w-full p-2 rounded-md text-black"
            name="timing"
            value={course.timing}
            onChange={(e) => handleChange(e, course._id)}
          />

          <label className="form-label mt-2">
            Room ID:
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-md text-black"
            placeholder="Enter the room ID"
            name="roomId"
            value={course.roomId}
            onChange={(e) => handleChange(e, course._id)}
          />
          <button
            className="btn rounded-lg bg-yellow-500 hover:bg-yellow-600 mt-4"
            onClick={(e) => handleUpdate(e, course._id)}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
};

export default ScheduleClass;
