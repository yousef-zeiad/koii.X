import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages

import { Home } from 'pages';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}
