import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props }) {
  const loggedIn = props.loggedIn || localStorage.getItem('loggedIn');
  return (
    <Route>
      {() => (loggedIn ? <Component {...props} /> : <Redirect to='./' />)}
    </Route>
  );
}

export default ProtectedRoute;
