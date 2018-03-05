import React, { Component } from 'react';
import Slides from './slides';
import Helper from './helper';
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
      .then(json => { 
        Helper.makeTree(json);              
        this.setState({ slides: json}) 
  })}

  render() {  
    return (
      <div id="app">
        <div id="header" className="tile">
          <img src='./images/logo_ecare.png' className="logo" alt="logo" />
          <h1 className="title">React ... ?</h1>
        </div>       
        <div id="content">
          <Slides {...this.state.slides} />
        </div>
      </div>
  );}}

export default App;