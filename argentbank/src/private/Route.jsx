import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getValueFromSessionStorage } from '../utils/sessionStorage';
import { getValueFromLocalStorage } from '../utils/localStorage';

/**
 * Secure the account access (profile page) :
 * when user is not logged, redirect to the home page
 * @param {props} param
 * @returns props
 */
export default function PrivateRoute({ component: Component, ...rest }) {
  let hasToken =
    getValueFromLocalStorage('USER') || getValueFromSessionStorage('USER');

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!hasToken) {
          return <Redirect to="/" />;
        }
        return <Component {...props} />;
      }}
    />
  );
}
