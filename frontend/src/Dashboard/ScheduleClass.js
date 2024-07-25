import React from "react";

const ScheduleClass = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-gradient-to-b bg-gray-700 text-white min-h-screen">
      {["Math", "Science", "History", "English"].map((course, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xs w-full"
        >
          <h2 className="text-xl font-semibold mb-4">{course} Class</h2>
          <label className="block mb-2 text-sm font-medium">
            Schedule Time:
          </label>
          <input type="time" className="w-full p-2 rounded-md text-black" />
        </div>
      ))}
    </div>
  );
};

export default ScheduleClass;
