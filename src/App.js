import React, { Component } from 'react';
import logo from './logo.svg';
import data from './data.json';
import Slides from './slides';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);  

    this.state = { slides: [] };    
  }  

  componentDidMount() {
    this.loadData();        
  } 

  loadData() {   
    fetch('https://raw.githubusercontent.com/BoudewijnvanVeen/React-Presentation/master/slides/index.json')
    .then(response => response.json())
    .then(json => { this.setState({ slides: json })})
    .catch(ex => { console.log('parsing failed', ex) });
  }  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Slides slides={this.state.slides} />
        </div>
      </div>
    );
  }
}

export default App;
