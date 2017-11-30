import React, { Component } from 'react';
import ReactKeymaster from 'react-keymaster';

export default class SlideNavigation extends Component {
  constructor(props) {
    super(props);

    this.setCurrentSlide = this.setCurrentSlide.bind(this);      
  } 

  setCurrentSlide(pointer) {
    this.props.setCurrentSlide(pointer);
  }  

  render() { 
    return (
      <div>     
          <ReactKeymaster keyName="up" onKeyDown={() => {this.setCurrentSlide('up')}} /> 
          <ReactKeymaster keyName="down" onKeyDown={() => {this.setCurrentSlide('down')}}  />   
          <ReactKeymaster keyName="left" onKeyDown={() => {this.setCurrentSlide('prev')}} /> 
          <ReactKeymaster keyName="right" onKeyDown={() => {this.setCurrentSlide('next')}}  />     
          <button onClick={() => this.setCurrentSlide('prev')}>Prev</button>
          <button onClick={() => this.setCurrentSlide('next')}>Next</button>
          <button onClick={() => this.setCurrentSlide('up')}>Up</button>
          <button onClick={() => this.setCurrentSlide('down')}>Down</button>        
      </div>
    );
  }
}
