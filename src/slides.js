import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.gotoNextSlide = this.gotoNextSlide.bind(this);

    this.state = { currentslide: { "url" : "slides/slide1.json" }};    
  }    

  gotoNextSlide(currentslide) {
    var nextSlide = this.props.slides[this.props.slides.slides.indexOf(this.state.currentslide) + 1];        
    this.setState({ currentslide: nextSlide });    
  } 

  render() {
    return (
      <div>
        <div>
          <SlideNavigation currentslide={this.state.currentslide} gotoNextSlide={this.gotoNextSlide} />
        </div><div>
          <SlideContainer slide={this.state.currentslide} />
        </div>
      </div>
    );
  }
}