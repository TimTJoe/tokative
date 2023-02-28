//create protected route component
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAuth, ...props }) => {
  if (!isAuth) {
      return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <Route {...props} />;
};

export default ProtectedRoute;