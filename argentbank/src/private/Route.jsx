import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * Secured the profilePage when user is not logged, redirect to the homepage
 * @param {props} param
 * @returns props
 */
export default function PrivateRoute({ component: Component, ...rest }) {
    const hasToken = localStorage.getItem('TOKEN');

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