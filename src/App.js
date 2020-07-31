import React, { Component } from 'react';
import { Link, HashRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default App;
