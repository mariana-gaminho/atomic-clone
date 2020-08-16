import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// eslint-disable-next-line import/no-unresolved
import Home from './pages/LandingPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
