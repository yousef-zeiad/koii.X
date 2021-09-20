import React, { Fragment } from "react";
import { Route } from "react-router-dom";

type PublicRouteTypeProp = {
  component?: any;
  layout?: any | typeof Fragment;
  exact?: boolean;
  path?: string;
};
export const PublicRoute: React.FC<PublicRouteTypeProp> = ({ component: Component, layout: Layout = Fragment, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);
