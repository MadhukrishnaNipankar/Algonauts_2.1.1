import React from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = sessionStorage.getItem("role"); // Assuming you store user role in sessionStorage

  if (!allowedRoles.includes(userRole)) {
    // User role not allowed, redirect to home or login page
    return <Navigate to="/" replace />;
  }

  return children;
};
