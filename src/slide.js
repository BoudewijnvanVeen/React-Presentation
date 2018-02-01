
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import "./slide.css"

export default class Slide extends Component {   
    render() {        
        return (
            <div id="slide">
                <div className="title">{this.props.slide.title}</div>
                <div className="description">{this.props.slide.description}</div>
                <div className="content"><ReactMarkdown source={this.props.slide.content} /></div>  
                <div  className="sources">{
                    this.props.slide.sources.map((source, index) => { 
                        return (<div key={index} className="source"><a href={source.url}>{source.title}</a><span className="url"> ({source.url})</span></div>) 
                    })}
                </div>
                <div className="id">{this.props.id}</div>
            </div>
        );
    }
}
