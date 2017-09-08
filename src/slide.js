
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import 'whatwg-fetch'

export default class Slide extends Component {

    constructor(props) {
        super(props);        
        this.state = { body: '## Loading...'  };
    }

    componentWillReceiveProps(nextProps) {   
        if(this.props !== nextProps && nextProps.slide.source) {
            fetch(nextProps.slide.source)
            .then(response => response.text())            
            .then(text => { this.setState({ body: text })})
            .catch(ex => { console.log('parsing failed', ex) });
        }
    }    

    render() {
        return (
            <div>
                <ReactMarkdown source={this.state.body} />                
            </div>
        );
    }
}