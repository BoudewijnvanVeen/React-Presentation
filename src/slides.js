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
    var nextSlideIndex = Object.assign({}, this.state.currentSlideIndex);
    switch (pointer) {
      case 'prev': 
        nextSlideIndex[0] = nextSlideIndex[0] - 1
        break;  
      case 'next': 
        nextSlideIndex[0] = nextSlideIndex[0] + 1
        break;   
      case 'up': 
        nextSlideIndex[1] = nextSlideIndex[1] - 1
        break; 
      case 'down': 
        nextSlideIndex[1] = nextSlideIndex[1] + 1
        break; 
    }

    var nextSlide = this.props.slides[nextSlideIndex[0]];

    if (nextSlide !== undefined)
      nextSlide = nextSlide[nextSlideIndex[1]]; 

    if (nextSlide !== undefined)
      this.setState({ currentSlideIndex: nextSlideIndex, currentSlide: nextSlide })  
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