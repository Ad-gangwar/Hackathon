import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const token = localStorage.getItem('eduToken');

  if (token) {
    // If token exists, user is logged in, redirect to homepage or dashboard
    return <Navigate to="/" replace />;
  }

  // If token does not exist, allow access to the child components (e.g., login)
  return children;
};

export default AuthGuard;
