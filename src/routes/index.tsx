import Home from "pages/home";
import { Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
// ui
import { AppLayout } from "components/layouts";

export const Routes = () => {
  return (
    <>
      <Switch>
        <PublicRoute exact path="/" component={Home} layout={AppLayout} />
      </Switch>
    </>
  );
};
