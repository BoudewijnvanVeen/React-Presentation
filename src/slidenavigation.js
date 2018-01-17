import React, { Component } from 'react';
import ReactKeymaster from 'react-keymaster';
import Menu from './menu';

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
          <Menu items={this.props.slides} currentItem={this.props.currentSlide} />   
          <ReactKeymaster keyName="up" onKeyDown={() => {this.setCurrentSlide('parent')}} /> 
          <ReactKeymaster keyName="down" onKeyDown={() => {this.setCurrentSlide('firstchild')}}  />   
          <ReactKeymaster keyName="left" onKeyDown={() => {this.setCurrentSlide('prev')}} /> 
          <ReactKeymaster keyName="right" onKeyDown={() => {this.setCurrentSlide('next')}}  />     
          <button onClick={() => this.setCurrentSlide('prev')}>Prev</button>
          <button onClick={() => this.setCurrentSlide('next')}>Next</button>
          <button onClick={() => this.setCurrentSlide('parent')}>Parent</button>
          <button onClick={() => this.setCurrentSlide('firstchild')}>firstChild</button>        
      </div>
    );
  }
}
