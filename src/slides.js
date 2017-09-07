import React, { Component } from 'react';
import Slide from './slide';
import Slidenavigation from './slidenavigation';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.gotoNextSlide = this.gotoNextSlide.bind(this);

    this.state = { currentslide: this.props.slides[0] };
    localStorage.setItem('currentslide', this.props.slides[0]);
  }  

  gotoNextSlide(currentslide) {
    var nextslide = this.state.slides[this.props.slides.indexOf(currentslide) + 1];
        
    this.setState({ currentslide: nextslide });
    localStorage.setItem('currentslide', JSON.stringify(nextslide));
  }

  render() {
    return (
      <div>
        <div>
          <Slidenavigation currentslide={this.state.currentslide} gotoNextSlide={this.gotoNextSlide} />
        </div><div>
          <Slide slide={this.state.currentslide} />
        </div>
      </div>
    );
  }
}
