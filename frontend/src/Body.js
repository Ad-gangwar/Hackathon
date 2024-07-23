import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Login';
import Homepage from './Homepage';
import SignUpPage from './SignUp';
import Webcam from 'react-webcam';
import WebcamCapture from './Webcam';
import AdminDashboard from './AdminDashboard';
import StudentDashboard from './StudentDashboard';
import Profile from './Profile';
import EnrolledCourses from './EnrolledCourses';

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