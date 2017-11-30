
import React, { Component } from 'react';
import ReactKeymaster from 'react-keymaster';

export default class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);        
        
        this.state = { current: 0 };    
    }   

    next() {        
        var next = this.state.current + 1;
        this.setState({ current: next })  
    }   

    render() {        
        return (
            <div>
                <ReactKeymaster keyName="space" onKeyDown={this.next} /> 
                {this.props.children[this.state.current]}
            </div>
        );
    }
}
