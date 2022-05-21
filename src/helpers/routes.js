import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  console.log(rest, "Rest");
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          console.log("Not a user");
          return children;
        }

        if (user) {
          console.log("i'm a user");
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  console.log("ProtectedRoute");
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: "signin",
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}
