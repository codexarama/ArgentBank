import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { token } from '../utils/storage';

/**
 * Secure the account access (profile page) :
 * when user is not logged, redirect to the home page
 * @param {props} param
 * @returns props
 */

export default function PrivateRoute({ children, ...rest }) {
  return (
      <Route
        {...rest}
        render={({ location }) =>
          token ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}