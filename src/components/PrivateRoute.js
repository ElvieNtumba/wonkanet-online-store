import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true; // Add your authentication logic here
  
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
