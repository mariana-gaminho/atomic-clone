import React, { FunctionComponent } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/LandingPage';
import JoinForm from './pages/JoinForm';

const Router: FunctionComponent = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/join-form" component={JoinForm} />
    </Switch>
  </BrowserRouter>
);

export default Router;
