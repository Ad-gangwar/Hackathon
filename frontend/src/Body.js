import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Auth/Login';
import Homepage from './pages/Homepage';
import SignUpPage from './Auth/SignUp';
import Webcam from 'react-webcam';
import WebcamCapture from './Webcam';
import AdminDashboard from './Dashboard/AdminDashboard';
import StudentDashboard from './Dashboard/Student/StudentDashboard';
import Profile from './pages/shared/Profile';
import EnrolledCourses from './Dashboard/Student/EnrolledCourses';

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
        path: "/SignUp",
        element: <SignUpPage />,
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
    ]);
  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body