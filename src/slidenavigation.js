import React, { Component } from 'react';

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
          <button onClick={() => this.setCurrentSlide('prev')}>Prev</button>
          <button onClick={() => this.setCurrentSlide('next')}>Next</button>
          <button onClick={() => this.setCurrentSlide('up')}>Up</button>
          <button onClick={() => this.setCurrentSlide('down')}>Down</button>        
      </div>
    );
  }
}
