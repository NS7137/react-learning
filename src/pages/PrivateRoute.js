import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// v5
const PrivateRoute = ({ children, ...rest }) => {
  const isUser = true;
  // return <Route index element={isUser ? children : <Redirect to='/login' />} />;
};
export default PrivateRoute;
