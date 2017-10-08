
import React, { Component } from 'react';

export default class Slide extends Component {   
    render() {
        return (
            <div>
                <h1>{this.props.slide.title}</h1>    
                <div>{this.props.slide.description}</div> 
                <div>{this.props.slide.sources}</div>            
            </div>
        );
    }
}