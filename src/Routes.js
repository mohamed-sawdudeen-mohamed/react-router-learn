import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import UserDetails from './components/pages/UserDetails';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/usr/:id/:name/" component={UserDetails} />
    </Switch>
  );
};

export default Routes;
