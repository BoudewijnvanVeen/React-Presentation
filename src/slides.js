import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';
import "./slides.css"

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);    
    this.toggleMenu = this.toggleMenu.bind(this);    

    this.state = { currentSlideIndex: [0, 0], currentSlide: {}, showMenu: false };
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
        nextSlideIndex[0]--
        break;
      case 'next':
        nextSlideIndex[0]++
        break;
      case 'up':
        nextSlideIndex[1]--
        break;
      case 'down':
        nextSlideIndex[1]++
        break;
    }

    var nextSlide = this.props.slides[nextSlideIndex[0]];

    if (nextSlide !== undefined)
      nextSlide = nextSlide[nextSlideIndex[1]];

    if (nextSlide !== undefined)
      this.setState({ currentSlideIndex: nextSlideIndex, currentSlide: nextSlide })
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div onKeyPress={this.keyPressed} id="slides" className={(this.state.showMenu ? "showMenu " : "")}>
        <div id="menutoggle" onClick={this.toggleMenu}>=</div>
        <div id="slidenavigation">
          <SlideNavigation slides={this.props.slides} setCurrentSlide={this.setCurrentSlide} />
        </div><div id="slidecontainer">
          <SlideContainer {...this.state.currentSlide} />
        </div>
      </div>
    );
  }
}