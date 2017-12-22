import React, { Component } from 'react';
import Slides from './slides';
import 'whatwg-fetch'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { slides: [] };
  }

  componentDidMount() {
    fetch('slides/index.json', { cache: "force-cache" })
      .then(response => response.json())
      .then(json => { this.setState({ slides: json.slides }) })
      .catch(ex => { console.log('parsing failed', ex) });
  }

  render() {  
    return (
      <div id="app">
        <div id="header" className="tile">
          <img src='./images/logo_ecare.png' className="logo" alt="logo" />
          <h1 className="title">React ... ?</h1>
        </div>       
        <div id="content" className="tile">
          <Slides slides={this.state.slides} />
        </div>
      </div>
    );
  }
}

export default App;