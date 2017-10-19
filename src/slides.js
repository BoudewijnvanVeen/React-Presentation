import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);
    
    this.state = { currentSlideIndex: [0,0], currentSlide: {} };    
  }     

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ currentSlide: nextProps.slides[this.state.currentSlideIndex[0]][this.state.currentSlideIndex[1]] })      
    } 
  }

  setCurrentSlide(pointer) {  
    var nextSlideIndex = this.state.currentSlideIndex
    switch (pointer) {
      case 'prev': 
        nextSlideIndex = [1,0]
        break;  
      case 'next': 
        nextSlideIndex = [1,0]
        break;   
      case 'up': 
        nextSlideIndex = [0,1]
        break; 
      case 'down': 
        nextSlideIndex = [0,1]
        break; 
    }

    var currentSlide = this.props.slides[nextSlideIndex[0]][nextSlideIndex[1]];

    if (currentSlide !== undefined)
      this.setState({ currentSlideIndex: nextSlideIndex, currentSlide: currentSlide })  
  }   

  render() {
    return (
      <div>
        <div>
          <SlideNavigation setCurrentSlide={this.setCurrentSlide} />
        </div><div>
          <SlideContainer slide={this.state.currentSlide} />
        </div>
      </div>
    );
  }
}