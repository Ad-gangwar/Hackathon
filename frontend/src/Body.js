import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Auth/Login';
import Homepage from './pages/Homepage';
import SignUpPage from './Auth/Register';
import AdminDashboard from './Dashboard/Admin/AdminDashboard';
import StudentDashboard from './Dashboard/Student/StudentDashboard';
import Profile from './pages/shared/Profile';
import EnrolledCourses from './Dashboard/Student/EnrolledCourses';
import TeacherDashboard from './Dashboard/Teacher/TeacherDashboard';
import ScheduleClass from './Dashboard/Teacher/ScheduleClass';
import About from './pages/About';

const Body = () => {

    const AppRouter = createBrowserRouter([
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register-student",
        element: <SignUpPage />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/Admin",
        element: <AdminDashboard />,
      },
      {
        path: "/dashboard",
        element: <StudentDashboard />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "enrolled-courses",
            element: <EnrolledCourses />,
          },
        ],
      },
      {
        path: "/teacher-dashboard",
        element: <TeacherDashboard />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "schedule-classes",
            element: <ScheduleClass />,
          },
        ],
      },
    ]);
  return (
    <div>
      <RouterProvider router={AppRouter} />
    </div>
  );
}

export default Body;
