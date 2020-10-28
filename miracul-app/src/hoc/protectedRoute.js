import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authed === "done") {
          return <Component {...props} />;
        } else if (authed === "failed") {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
