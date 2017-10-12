import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);
    
    this.state = { currentSlide: { "url" : "slides/slide1.json" }};    
  }    

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ currentSlide: nextProps.slides[0] })      
    }    
  }

  setCurrentSlide(Slide) {
    this.setState({ currentSlide: Slide });       
  }   

  render() {
    return (
      <div>
        <div>
          <SlideNavigation currentSlide={this.state.currentSlide} slides={this.props.slides} setCurrentSlide={this.setCurrentSlide} />
        </div><div>
          <SlideContainer slide={this.state.currentSlide} />
        </div>
      </div>
    );
  }
}