import React, { Component } from 'react';
import Slide from './slide';
import 'whatwg-fetch'

export default class SlideContainer extends Component {   
  constructor(props) {
    super(props); 

    this.state = { slide: { "url" : "slides/Slide1.json"}};
  }  

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props && nextProps.slide !== undefined) {
      fetch(nextProps.slide.url)
      .then(response => response.json())            
      .then(json => { this.setState({ slide: json })})
      .catch(ex => { console.log('parsing failed', ex) });  
    }    
  }

  render() {
    return <Slide slide={this.state.slide } />;
  }
}