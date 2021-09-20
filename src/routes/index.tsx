import { Home } from "pages";
import { Route, Switch } from "react-router-dom";

// pages

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};
