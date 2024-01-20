import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem('user');

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Navigate to="/login" /> : <Component {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;
