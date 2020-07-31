import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
