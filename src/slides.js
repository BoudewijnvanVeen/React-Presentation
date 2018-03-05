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

    this.state = { currentSlide: {}, showMenu: true };
  }   

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ currentSlide: nextProps.children[0] })
    }
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
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

  render() {
    return (
      <div onKeyPress={this.keyPressed} id="slides" className={(this.state.showMenu ? "hideMenu " : "showMenu")}>               
        <div id="sideMenu" className="tile fillArea">              
          <div id="menuBody">                  
            <SlideNavigation slides={this.props.children} setCurrentSlide={this.setCurrentSlide} currentSlide={this.state.currentSlide} />
          </div>
        </div><div id="innercontent" className="tile flexbox-item-grow">
          <div id="menuToggle" onClick={this.toggleMenu}>##</div>
          <SlideContainer {...this.state.currentSlide} />
        </div>
      </div>
    );
  }
}