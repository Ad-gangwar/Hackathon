import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from './Login';
import Homepage from './Homepage';
import SignUpPage from './SignUp';
import Webcam from 'react-webcam';
import WebcamCapture from './Webcam';
import AdminDashboard from './AdminDashboard';

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
        element: <AdminDashboard/>,
      },
    ]);
  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
}

export default Body