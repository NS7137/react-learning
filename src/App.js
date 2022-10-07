import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            index
            element={isUser ? <Dashboard /> : <Navigate to='/login' />}
          />
          ;
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;
