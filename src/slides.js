import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.gotoNextSlide = this.gotoNextSlide.bind(this);

    this.state = { currentslide: { "title" : "" }};    
  }    

  gotoNextSlide(currentslide) {
    var nextslide = this.props.slides[this.props.slides.indexOf(currentslide) + 1];        
    this.setState({ currentslide: nextslide });    
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