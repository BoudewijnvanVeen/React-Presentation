import React, { Component } from 'react';
import Slide from './slide';
import Slidenavigation from './slidenavigation';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.gotoNextSlide = this.gotoNextSlide.bind(this);

    this.state = { currentslide: this.props.slides[0] };
    localStorage.setItem('currentslide', this.props.slides[0].id);
  }

  gotoNextSlide(currentslide) {
    var nextslide = this.props.slides[this.props.slides.indexOf(currentslide) + 1];
    localStorage.setItem('currentslide', nextslide.id);
    this.setState({ currentslide: nextslide });
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
