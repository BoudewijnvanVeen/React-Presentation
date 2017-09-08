import React, { Component } from 'react';
import Slide from './slide';
import Slidenavigation from './slidenavigation';

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.gotoNextSlide = this.gotoNextSlide.bind(this);

    this.state = { currentslide: { "title" : "", "source": "" }};
    localStorage.setItem('currentslide', { "title" : "", "source": "" });
  }   

  componentWillReceiveProps(nextProps) {
    if (this.props === nextProps)
      return;

    this.setState({ currentslide: nextProps.slides.slides[0] });    
    localStorage.setItem('currentslide', JSON.stringify(nextProps.slides.slides[0]));
  }

  gotoNextSlide(currentslide) {
    var nextslide = this.props.slides[this.props.slides.indexOf(currentslide) + 1];
        
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
