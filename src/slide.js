
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import 'whatwg-fetch'

export default class Slide extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            body: '# Loading\n\n...'
        };
    }

    loadData() {   
        fetch('https://raw.githubusercontent.com/BoudewijnvanVeen/ToWeb-DashBoard/master/README.md')
        .then(response => response.text())
        .then(text => { this.setState({ body: text })})
        .catch(ex => { console.log('parsing failed', ex) });
    }

    componentDidMount() {
        this.loadData();        
    }    

    render() {
        return (
            <div>
                <div>
                    {this.props.slide.title}
                </div>
                <div>
                    <ReactMarkdown source={this.state.body} />
                </div>
            </div>
        );
    }
}