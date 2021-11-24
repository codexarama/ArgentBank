import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { token } from '../utils/storage';

/**
 * Secure the account access (profile page) :
 * when user is not logged, redirect to the home page
 * @param {props} param
 * @returns props
 */
export default function PrivateRoute({ component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}
