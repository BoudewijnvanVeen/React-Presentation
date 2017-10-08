import React, { Component } from 'react';
import Slide from './slide';

export default class SlideContainer extends Component {   
  constructor(props) {
    super(props); 

    this.state = { slide: { "title" : "Loading..."}};
  }  

  componentDidMount() {
    fetch(nextProps.slide.url)
    .then(response => response.json())            
    .then(json => { this.setState({ slide: json })})
    .catch(ex => { console.log('parsing failed', ex) });      
  }

  render() {
    return <Slide slide={this.state.slide } />;;
  }
}