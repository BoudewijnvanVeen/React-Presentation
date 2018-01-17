import React, { Component } from 'react';
import Slide from './slide';
import 'whatwg-fetch'

export default class SlideContainer extends Component {   
  constructor(props) {
    super(props); 

    this.state = { "slide": {} };
  }  

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      fetch("./slides/" + nextProps.title + ".json")
      .then(response => response.json())            
      .then(json => { this.setState({ slide: json })})
      .catch(ex => { console.log('parsing failed', nextProps.url, ex) });  
    }    
  }

  render() {
    if (this.state.slide.title !== undefined)
      return <Slide id={this.props.title} slide={this.state.slide}  />;

    return null;
  }
}