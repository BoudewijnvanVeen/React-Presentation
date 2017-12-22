import React, { Component } from 'react';
import ReactKeymaster from 'react-keymaster';
import Menu from './menu'

export default class SlideNavigation extends Component {
  constructor(props) {
    super(props);

    this.setCurrentSlide = this.setCurrentSlide.bind(this);      
  } 

  setCurrentSlide(pointer) {
    this.props.setCurrentSlide(pointer);
  }  

  render() { 
    var menuitems = [].concat.apply([], this.props.slides);

    return (
      <div>     
          <Menu items={menuitems} />   
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
