import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const PrivateRoute = ({ element, ...rest }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
