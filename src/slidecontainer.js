import React, { Component } from 'react';
import Slide from './slide';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import 'whatwg-fetch';
import "./slidecontainer.css";

export default class SlideContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { "slide": {} };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      fetch("./slides/" + nextProps.title + ".json")
        .then(response => response.json())
        .then(json => { this.setState({ slide: json }) })
        .catch(ex => { console.log('parsing failed', nextProps.url, ex) });
    }
  }

  render() {
    if (this.state.slide.title !== undefined)
      return (
        <div>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
            <Slide id={this.props.title} slide={this.state.slide} />
          </ReactCSSTransitionGroup>);
        </div>)

    return null;
  }
}