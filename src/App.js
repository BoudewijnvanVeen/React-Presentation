import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data.json';
import Slides from './slides';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Slides source="https://raw.githubusercontent.com/BoudewijnvanVeen/React-Presentation/master/slides/" />
        </div>
      </div>
    );
  }
}

export default App;
