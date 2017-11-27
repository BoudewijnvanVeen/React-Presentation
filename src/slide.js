
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Carrousel from './carrousel';

export default class Slide extends Component {
    constructor(props) {
        super(props)       
    }   

    render() {        
        return (
            <div>
                <div>{this.props.slide.title}</div>
                <div>{this.props.slide.description}</div>
                <div>
                    <Carrousel ref={instance => { this.child = instance; }} >
                        {this.props.slide.content.map((content, index) => {
                            return (<div key={index}><ReactMarkdown source={content} /></div>);
                        })}
                    </Carrousel>     
                    <button onClick={() => { this.child.prev(); }}>Prev</button>                  
                    <button onClick={() => { this.child.next(); }}>Next</button>                   
                </div>
                <div>{this.props.slide.sources.map((source) => {{ source.title }})}</div>
                <div>{this.props.id}</div>
            </div>
        );
    }
}
