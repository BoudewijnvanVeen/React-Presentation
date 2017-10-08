
import React, { Component } from 'react';

export default class Slide extends Component {   
    render() {
        return (
            <div>
                <H1>{this.props.title}</H1>    
                <div>{this.props.description}</div> 
                <div>{this.props.sources}</div>            
            </div>
        );
    }
}