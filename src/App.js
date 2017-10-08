import React, { Component } from 'react';
import logo from './logo.svg';
import Slides from './slides';
import 'whatwg-fetch'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);  

    this.state = { slides: [{"title":"Loading..."}] };    
  }  

  loadData() {   
    fetch('slides/index.json')
    .then(response => response.json())
    .then(json => { this.setState({ slides: json })})
    .catch(ex => { console.log('parsing failed', ex) });
  } 

  componentDidMount() {
    this.loadData();        
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
