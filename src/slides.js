import React, { Component } from 'react';
import SlideNavigation from './slidenavigation';
import SlideContainer from './slidecontainer';
import Helper from './helper';
import "./slides.css"

export default class Slides extends Component {
  constructor(props) {
    super(props);
    this.setCurrentSlide = this.setCurrentSlide.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.state = { currentSlide: {}, showMenu: false };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ currentSlide: nextProps.slides[0] })
    }
  }

  setCurrentSlide(pointer) {
    var currentSlide = undefined;
    if (pointer.title !== undefined) {
      currentSlide = Helper.findSlide(this.props, pointer);      
    } else {
      currentSlide = Helper.findSlide(this.props, this.state.currentSlide);
      if (currentSlide !== undefined) {
        currentSlide = currentSlide[pointer];        
      }
    }

    if (currentSlide !== undefined && currentSlide.title !== undefined) {
      this.setState({ currentSlide: currentSlide })
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div onKeyPress={this.keyPressed} id="slides" className={(this.state.showMenu ? "showMenu " : "")}>
        <div id="menutoggle" onClick={this.toggleMenu}>=</div>
        <div id="slidenavigation">
          <SlideNavigation slides={this.props.slides} setCurrentSlide={this.setCurrentSlide} currentSlide={this.state.currentSlide} />
        </div><div id="slidecontainer">
          <SlideContainer {...this.state.currentSlide} />
        </div>
      </div>
    );
  }
}