import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
