
import React, { Component } from 'react';

export default class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        
        this.state = { current: 0 };    
    }   

    next() {        
        var next = this.state.current++;
        this.setState({ current: next })  
    }

    prev() {        
        var prev = this.state.current--;
        this.setState({ current: prev })  
    }

    render() {        
        return (
            <div>
                {this.props.children[this.state.current]}
            </div>
        );
    }
}
